'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


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

// let i = 0;
// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько обойдется?', '');
//       i++;
 
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     console.log('error');
//   }
// } while (i < 2);

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//      b = prompt('Во сколько обойдется?', '');
 
//     if((typeof(a)) === 'string' && (typeof(a)) != null && 
// (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//      console.log('done');
//      appData.expenses[a] = b;
//     } else {
//      console.log('error');
//     }
 
//      i++;
// };

appData.moneyPerDay = appData.budget / 30;


alert("Бюджет из расчета на сутки" + " " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else  if(appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Попробуйте еще раз,возможно вы где то ошиблись");
}