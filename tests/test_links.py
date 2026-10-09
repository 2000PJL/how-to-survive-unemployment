import unittest
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

ROOT=Path(__file__).resolve().parents[1]
class Extractor(HTMLParser):
    def __init__(self): super().__init__();self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag=='a': self.links.extend(v for k,v in attrs if k=='href' and v)

class LinkTests(unittest.TestCase):
    def test_every_local_html_link_has_target(self):
        pages=[ROOT/'index.html',*ROOT.glob('guides/*.html'),*ROOT.glob('playbooks/*.html'),*ROOT.glob('templates/*.html')]
        self.assertGreaterEqual(len(pages),20)
        for page in pages:
            x=Extractor();x.feed(page.read_text(encoding='utf-8'))
            for href in x.links:
                if href.startswith(('http://','https://','#','mailto:')): continue
                target=(page.parent/unquote(urlsplit(href).path)).resolve()
                with self.subTest(page=page.name,link=href):self.assertTrue(target.is_file(),f'Missing {href} from {page}')
    def test_no_network_dependencies_for_index(self):
        html=(ROOT/'index.html').read_text(encoding='utf-8')
        self.assertNotIn('<script src=',html)
        self.assertNotIn('<link rel="stylesheet"',html)
        self.assertIn('id="weekly-planner"',html)
        self.assertIn('id="route-result"',html)
        self.assertIn('id="n-result"',html)
if __name__=='__main__':unittest.main()
