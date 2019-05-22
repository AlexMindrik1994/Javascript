
/*----------------------------------------------------------Задача 2 ------------------------------------------*/

let ed_dlina =parseInt (prompt ("Выберете единицы длины: \n1 - Дециметр\n2 - Километр\n3 - Метр\n4 -Сантиметр\n5 -Миллиметр "));

let dlina = parseInt(prompt ("Введите длину"));



if (ed_dlina === 1){
	let a = (dlina  * 10);
	alert ((a) + " м");
}else if (ed_dlina === 2){
	let b = (dlina  * 1000);
	alert  ((b) + " м");
}else if (ed_dlina ===3){
	let c = (dlina);
	alert ((c) + " м");
} else if (ed_dlina === 4) {
	let d = (dlina * 0.01);
	alert ((d) + " м" )
} else if (ed_dlina === 5){
	let e = (dlina * 0.001);
	alert ((e) + " м");
}


/*------------------------------------Задача 1-----------------------------------------------------------------*/


/*let month = prompt (" Введите номер месяца");

if (month === "1"){
	alert ("Январь");
} else if (month === "2"){
	alert ("Февраль");
} else if (month === "3"){
	alert ("Март");
} else if (month === "4"){
	alert ("Апрель");
}else if (month === "5"){
	alert ("Май");
}else if (month === "6"){
	alert ("Июнь");
}else if (month === "7"){
	alert ("Июль");
}else if (month === "8"){
	alert ("Август");
}else if (month === "9"){
	alert ("Сентябрь");
}else if (month === "10"){
	alert ("Октябрь");
}else if (month === "11"){
	alert ("Ноябрь");
}else if (month === "12"){
	alert ("Декабрь");
}*/







/*---------------------------------------------------Задача 3----------------------------------------------*/



/*let number = prompt ("Введите число от -999 до 999");

if ((number >= -999) && (number <= -100)) {
	alert ("Число отрицательное трехзначное");
} else if  ((number >= -99) && (number <= -10)){
	alert ("Число отрицательное двухзначное");
} else if ((number >= -9) && (number <= -1)){
	alert ("Число отрицательное односоставное");
} else if (number === 0){
	alert ("Число нулевое");
} else if ((number >= 1) && (number <= 9)){
	alert ("Число положительное односоставное");	
} else if ((number >= 10) && (number <= 99)){
	alert ("Число положительное двухсоставное");
} else if((number >= 100) && (number <= 999)){
	alert ("Число положительное трехсоставное");
}
*/


