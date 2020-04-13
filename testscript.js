'use strict';

let money,time;

function start(){
	 money = +prompt("Ваш бюджет на месяц?", '');
	 time = prompt('Введите дату в формате YYYY-MM-DD', '');

	 while(isNaN(money)|| money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');

	 }
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++){
		let a = prompt("Введите обязатенльную статью расходовв этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
	
	
		if ((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b))!= null && a != "" && b != "" && a.length < 50) {	
			console.log("done");
		appData.expenses[a] = b;
		} else {
			console.log("Попробуйте еще раз!");
			i--;
		}
	
	}
}
chooseExpenses();

function detectDayBudget(){
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ваш бюджет на сутки " + appData.moneyPerDay );

}
detectDayBudget();


function detectLevel(){
	if(appData.moneyPerDay < 100){
console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
}	 else  if(appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
	} else {
	console.log("Попробуйте еще раз,возможно вы где то ошиблись");
}
}
detectLevel();

function checkSaving(){
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = + prompt("Под какой процент?", "");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSaving();

function chooseOptExpenses(){
	for (let i = 0; i < 3; i++){
		 let questOptExpenses = prompt("Статья необязательных расходов", ""),
			 summOptExpenses = +prompt ("Сумма необязательных расходов", "");
		if	((typeof(questOptExpenses)) != null && (typeof(summOptExpenses))!= null && questOptExpenses != "" && summOptExpenses != ""){
			alert("Старайтесь сократить необязательные расходы!");

		appData.optionalExpenses[questOptExpenses] = summOptExpenses;
		}else {
		
			alert("Отлично, так держать");
			break;


		}
	}
}
chooseOptExpenses();


