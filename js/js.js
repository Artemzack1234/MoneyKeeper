let starts=document.querySelectorAll('#start'),
budgetvalue = document.querySelectorAll('.budget-value'),
daybudgetvalue=document.querySelectorAll('.daybudget-value'),
levelvalue = document.querySelectorAll('.level-value'),
expensesvalue=document.querySelectorAll('.expenses-value'),
optionalexpensesvalue=document.querySelectorAll('.optionalexpenses-value'),
incomevalue=document.querySelectorAll('.income-value'),
monthsavingsvalue=document.querySelectorAll('.monthsavings-value'),
yearsavingsvalue=document.querySelectorAll('.yearsavings-value'),
expensesitem=document.querySelectorAll('.expenses-item'),
countbudgetbtn =document.querySelectorAll('.count-budget-btn'),//Рассчитать
optionalexpensesbtn =document.querySelectorAll('.optionalexpenses-btn'),//Утвердить
expensesitembtn =document.querySelectorAll('.expenses-item-btn'),///\\\
optionalexpensesitem =document.querySelectorAll('.optionalexpenses-item'),
chooseincome =document.querySelector('.choose-income'),
savings =document.querySelector('#savings'),
choosesum =document.querySelector('.choose-sum'),
choosepercent =document.querySelector('.choose-percent'),
yearvalue =document.querySelector('.year-value'),
monthvalue =document.querySelector('.month-value'),
dayvalue =document.querySelector('.day-value')
;
let money,time;
function start (){
money = +prompt("Сколько ты зарабатываешь?")
 time =prompt("Введите дату в формате YYYY-MM-DD");
 while(money==""||money==null||isNaN(money)){
  money = +prompt("Сколько ты зарабатываешь?");
 }

}
start();
let appDate ={
bydget: money,
timeData:time,
expenses:{},
optionalExpenses:{},
income:{},
savings:true,
chooseExpenses:function(){
  for(let i=0;i<2;i++)
 {
  let a=prompt("Введите обязательную статью расходов в этом месяце",''),
  b=prompt("Во сколько обойдется?",'');
  if((typeof(a))==='string'&& (typeof(a)) !=null && (typeof(b)) !=null
  && a !=''&& b !=''&& a.length<50){
    console.log("done");
  appDate.expenses[a]=b;
 
 }
 else {                            
  console.log ("еще раз");
  i--;
      }
  }
},
chooseOptExpenses:function  (){
  for(let c=1;c<4;c++)
  {
    let v=prompt("Статья необязательных расходов?",'');
    if((typeof(v))==='string'&&(typeof(v))!=null && v !=''){
      console.log("suc");
      appDate.optionalExpenses[c]=v;
      
    }else{
      c--;
      }
    }
  },
  detectDayBydget:function(){
    appDate.moneyPerDay = appDate.bydget/30;
alert("Ежедневный бюджет :"+ appDate.moneyPerDay);},

detectLevel: function  (){
if(appDate.moneyPerDay<100){
   console.log("Минимальный уровень достатка");
}else if (appDate.moneyPerDay>100 && appDate.moneyPerDay<2000){
  console.log("Средний уровень достатка ");
}else if (appDate.moneyPerDay>2000){
  console.log("Высокий уровень достатка");
}
else{
  console.log("Пройзошла ошибка");
}
   },  

   checkSavings:function(){
if (appDate.savings == true){
    let save = +prompt("Какая сумма накоплений?"),
        percent =+prompt("Под какой процент");
      appDate.mothIncome =save/100/12+percent;
      alert("Доход в месяц с вашего депозита:"+ appDate.mothIncome);
  }
   },
   chooseIcome : function (){
     for(g=0;g<1;g++){
   let items =prompt('Что принесет дополнительный доход?(перечислите через запятую )','');
   if((typeof(items))==='string'&&(typeof(items))!=null && items !=''){
   appDate.income=items.split(', ');
   appDate.income.push(prompt('Может что-то еще?'));
   appDate.income.sort();
   appDate.income.forEach(function(item,h,naj){
    console.log( ++h + ": " + item + " (способы доп.зарабатка:" + naj + ")" );
    })
     }else{
       g--;
     }
   }
}
}
for ( key in appDate) {
 console.log( "Наша программа включает в себя данные: "+key + appDate)
    

}
/*let i=0
while (i<2) {
  let a=prompt("Введите обязательную статью расходов в этом месяце",''),
  b=prompt("Во сколько обойдется?",'');
  if((typeof(a))==='string'&& (typeof(a)) !=null && (typeof(b)) !=null
  && a !=''&& b !=''&& a.length<50){
    console.log("done");
  appDate.expenses[a]=b;
 }
else{
  let a=prompt("Введите обязательную статью расходов в этом месяце",''),
  b=prompt("Во сколько обойдется?",'');
}
i++;
}*/
/*i=0;
do{
  let a=prompt("Введите обязательную статью расходов в этом месяце",''),
  b=prompt("Во сколько обойдется?",'');
  if((typeof(a))==='string'&& (typeof(a)) !=null && (typeof(b)) !=null
  && a !=''&& b !=''&& a.length<50){
    console.log("done");
  appDate.expenses[a]=b;
 }
else{
  let a=prompt("Введите обязательную статью расходов в этом месяце",''),
  b=prompt("Во сколько обойдется?",'');
}
i++;
}
while(i<2);*/

 
/*function detectDayBydgets(){
  console.log("Ваш доход в день :"+appDate.moneyPerDay+(appDate.mothIncome/30));
}*/
