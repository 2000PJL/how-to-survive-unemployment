# GitHub 发布与传播执行清单

> 目标：让真正失业或即将失业的人在30秒内找到自己要做的事。**不承诺Star数、曝光量或收入。** 真实好用的内容、最新政策、可信来源比空喊爆款重要。

## 发布当天

- [ ] 仓库公开：`AIPMAndy/how-to-survive-unemployment`（名称由所有者实际创建，未建立不得声称已发布）
- [ ] 完整提交根目录、`playbooks/`、`guides/`、`templates/`、`data/`、`assets/`、`tests/`、`.github/`；不要只提交单个HTML。
- [ ] README 首屏可看到「失业了咋办」封面、[3分钟分流](guides/00-start-here.html)、[前7天](playbooks/02-benefits-insurance.html)。
- [ ] 仓库 About 填：`失业自救开源手册：N/N+1/2N、失业金、医保、社保、公积金、求职、现金流。按阶段直接操作，附政策原文。`
- [ ] Topics 建议：`unemployment`, `layoff`, `job-search`, `career`, `china`, `open-source`, `personal-finance`, `checklist`。
- [ ] 将 `assets/social-preview.png` 设置为 Social preview。
- [ ] GitHub Pages：仓库 Settings → Pages → Deploy from a branch → `main` / root，保存后等待GitHub提供真实网站地址。
- [ ] GitHub Actions 运行 Python/Node 测试，确认通过；手动检验手机端导航、CSV下载、城市分流。
- [ ] 发布前再次核对金额和资格政策日期（尤其是10月份之后政策是否变化）。

## 推荐的发布传播结构

首屏标题：**失业了咋办？我把N+1、失业金、医保、公积金和重新找工作整理成了开源攻略。**

正文先给3种读者入口：

1. **还在职、收到裁员通知：**先核对书面方案、工龄与补偿。👉 离职谈判SOP。
2. **已经失业：**按前72小时把失业金与医保查清，先算现金安全期。👉 3分钟分流。
3. **三个月没找到工作：**30个目标岗位表 + 10次真实客户访谈。👉 求职与第一笔收入。

末尾请求**提交有官方依据的政策纠错和地区贡献**，不要只喊「求Star」。公开评论里不让读者上传身份证、社保账户、录音和工资流水。

## 7天内应该看哪些真实指标

| 指标 | 为什么看 | 不能得出什么结论 |
|---|---|---|
| README首屏链接点击 | 读者能否找到实操入口 | 点击不等于任务完成 |
| GitHub Issues中政策纠错数与被采纳数 | 内容有没有可验证的改善 | Issue多不一定是受欢迎，也可能质量差 |
| Stars、Forks | 传播与开发者参与的弱信号 | Star不等于实际失业者看完可办理 |
| 来自粉丝的真实办事反馈（匿名） | 是否真正减少办事成本 | 单个故事不能证明对所有人有效 |
| FAQ反复被问的问题 | 哪一步没写清楚 | 不应根据传言直接改政策金额 |

## 保持长期可信

政策金额、办理入口与适用对象如有更新，应先在官方原文确认再修改。新增城市必须填写 [城市贡献模板](templates/city-policy.md)。每次重要更新可写一条简短Release note：**改了什么、适用谁、何时生效、来源在哪里**。
