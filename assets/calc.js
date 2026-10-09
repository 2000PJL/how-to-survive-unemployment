/** Pure arithmetic helpers. Decision rules and eligibility are NOT computed. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.UnemploymentMath=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
const valid=(n)=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
function cashflow(cash,extraDue,monthlyNecessary,confirmedMonthlyIncome){
  if(![cash,extraDue,monthlyNecessary,confirmedMonthlyIncome].every(valid))return {status:'invalid',message:'请输入完整、非负的金额'};
  const available=Math.max(0,cash-extraDue),net=monthlyNecessary-confirmedMonthlyIncome;
  if(extraDue>cash)return {status:'shortfall',available:0,net,message:'额外近期到期款已经超过可动用现金，请按实际到期日做13周现金流表'};
  if(available===0)return {status:'zero',available:0,net,message:'0个月（没有剩余现金缓冲）'};
  if(net<=0)return {status:'positive',available,net,message:'静态未见净流出（不代表长期安全）'};
  return {status:'runway',available,net,months:available/net,message:(available/net).toFixed(1)+'个月'};
}
function compensation(years,months,avgWage){
  if(![years,months,avgWage].every(valid)||!Number.isInteger(years)||!Number.isInteger(months)||months>11||years>80)return {status:'invalid'};
  const n=years+(months===0?0:months<6?0.5:1);return {status:'ok',n,nAmount:n*avgWage,doubleAmount:n*avgWage*2};
}
function weeklyBalance(initial,rows){
  if(!valid(initial)||!Array.isArray(rows)||!rows.every(r=>[r.income,r.expense].every(valid)))return {status:'invalid'};
  let balance=initial;const end=[];for(const r of rows){balance+=r.income-r.expense;end.push(balance)}
  return {status:'ok',end,firstNegative:end.findIndex(x=>x<0)};
}
return Object.freeze({cashflow,compensation,weeklyBalance});
});
