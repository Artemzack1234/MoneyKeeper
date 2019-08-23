let starts=document.getElementById("start"),
budgetvalue = document.getElementsByClassName('budget-value')[0],
daybudgetvalue=document.getElementsByClassName('daybudget-value')[0],
levelvalue = document.getElementsByClassName('level-value')[0],
expensesvalue=document.getElementsByClassName('expenses-value')[0],
optionalexpensesvalue=document.getElementsByClassName('optionalexpenses-value')[0],
incomevalue=document.getElementsByClassName('income-value')[0],
monthsavingsvalue=document.getElementsByClassName('monthsavings-value')[0],
yearsavingsvalue=document.getElementsByClassName('yearsavings-value')[0],
expensesitem=document.getElementsByClassName('expenses-item'),
expensesitembtn =document.getElementsByTagName('button')[0],//Рассчитать
optionalexpensesbtn =document.getElementsByTagName('button')[1],//Утвердить
countbudgetbtn =document.getElementsByTagName('button')[2],///\\\
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
starts.addEventListener('click',function(){
  money = +prompt("Сколько ты зарабатываешь?")
  time =prompt("Введите дату в формате YYYY-MM-DD");

  while(money==""||money==null||isNaN(money)){
   money = +prompt("Сколько ты зарабатываешь?");
  }
 appDate.bydget=money;
 appDate.timeData=time;
 budgetvalue.textContent=money.toFixed();
 yearvalue.value=new Date(Date.parse(time)).getFullYear();
 monthvalue.value=new Date(Date.parse(time)).getMonth() +1;
 dayvalue.value =new Date(Date.parse(time)).getDay();
});

expensesitembtn.addEventListener('click',()=>{
  let sum=0;
  for(let i=0;i<expensesitem.length;i++)
  {
   let a=expensesitem[i].value,
       b=expensesitem[++i].value; 

   if((typeof(a))==='string'&& (typeof(a)) !=null && (typeof(b)) !=null
   && a !=''&& b !=''&& a.length<50){
     

   appDate.expenses[a]=b;
   sum += +b;
  }
  else {                            
   i--;
       }
   }
   expensesvalue.textContent=sum;
});
let appDate ={
bydget: money,
timeData:time,
expenses:{},
optionalExpenses:{},
income:{},
savings:true,
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
