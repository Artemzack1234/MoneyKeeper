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
expensesitembtn.disabled=true;//отключены функции без расчета бюджета
optionalexpensesbtn.disabled=true;
countbudgetbtn.disabled=true;
starts.addEventListener('click',function(){
  money = +prompt("Сколько ты зарабатываешь?")
  time =prompt("Введите дату в формате YYYY-MM-DD");
  noclick=true;
  while(money==""||money==null||isNaN(money)){
   money = +prompt("Сколько ты зарабатываешь?");
  }
 appDate.bydget=money;
 appDate.timeData=time;
 budgetvalue.textContent=money.toFixed();
 yearvalue.value=new Date(Date.parse(time)).getFullYear();
 monthvalue.value=new Date(Date.parse(time)).getMonth() +1;
 dayvalue.value =new Date(Date.parse(time)).getDay();
 expensesitembtn.disabled=false;
 optionalexpensesbtn.disabled=false;
 countbudgetbtn.disabled=false;
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
optionalexpensesbtn.addEventListener('click',function(){
  for(let c=0;c<optionalexpensesitem.length;c++)
  {
    let v=optionalexpensesitem[c].value;
     appDate.optionalExpenses[c]=v;
     optionalexpensesvalue.textContent += appDate.optionalExpenses[c] + '';
    }
});
countbudgetbtn.addEventListener('click', function(){
  if(appDate.bydget !=undefined){
  appDate.moneyPerDay = (appDate.bydget/30).toFixed();
  daybudgetvalue.textContent=appDate.moneyPerDay;

  if(appDate.moneyPerDay<100){
     levelvalue.textContent="Минимальный уровень достатка";
  }else if (appDate.moneyPerDay>100 && appDate.moneyPerDay<2000){
    levelvalue.textContent="Средний уровень достатка ";
  }else if (appDate.moneyPerDay>2000){
    levelvalue.textContent="Высокий уровень достатка";
  }
  else{
    levelvalue.textContent="Произошла ошибка";
  }
}else{
 daybudgetvalue.textContent="Произошла ошибка";
}
});
chooseincome.addEventListener('input',function(){
  let items =chooseincome.value;
  appDate.income=items.split(', ');
  incomevalue.textContent=appDate.income;
});
savings.addEventListener('input', function(){
if(appDate.savings==true){
   appDate.savings=false;
}else{
   appDate.savings=true;
}
});
choosesum.addEventListener('input',function(){
if (appDate.savings==true) {
  let sum =+choosesum.value,
      percent= +choosepercent.value;
  appDate.mouthIncome=sum/100/12 *percent;
  appDate.yearIncome=sum/100* percent;
  monthsavingsvalue.textContent=appDate.mouthIncome.toFixed();
  yearsavingsvalue.textContent=appDate.yearIncome.toFixed();
}
});
choosepercent.addEventListener('input',function(){
  if (appDate.savings==true) {
    if (appDate.savings==true) {
      let sum =+choosesum.value,
          percent= +choosepercent.value;
      appDate.mouthIncome=sum/100/12*percent;
      appDate.yearIncome=sum/100*percent;
      monthsavingsvalue.textContent=appDate.mouthIncome.toFixed();
      yearsavingsvalue.textContent=appDate.yearIncome.toFixed();
    }
  }
  });

let appDate ={
bydget: money,
timeData:time,
expenses:{},
optionalExpenses:{},
income:{},
savings:false
};
