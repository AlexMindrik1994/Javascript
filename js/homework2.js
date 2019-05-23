
/*----------------------------------------------------------Задача 2 ------------------------------------------*/

/*let ed_dlina =parseInt (prompt ("Выберете единицы длины: \n1 - Дециметр\n2 - Километр\n3 - Метр\n4 -Сантиметр\n5 -Миллиметр "));

let dlina = parseInt(prompt ("Введите длину"));



if (ed_dlina === 1){
	let a = (dlina  * 0.1);
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
}*/


/*------------------------------------Задача 1-----------------------------------------------------------------*/


/*let month = prompt (" Введите номер месяца");

if (month === "1"){
	alert ("Зима");
} else if (month === "2"){
	alert ("Зима");
} else if (month === "3"){
	alert ("Весна");
} else if (month === "4"){
	alert ("Весна");
}else if (month === "5"){
	alert ("Весна");
}else if (month === "6"){
	alert ("Лето");
}else if (month === "7"){
	alert ("Лето");
}else if (month === "8"){
	alert ("Лето");
}else if (month === "9"){
	alert ("Осень");
}else if (month === "10"){
	alert ("Осень");
}else if (month === "11"){
	alert ("Осень");
}else if (month === "12"){
	alert ("Зима");
}
*/






/*---------------------------------------------------Задача 3----------------------------------------------*/



/*let number = prompt ("Введите число от -999 до 999");

if (number >= -999 && number <= -100) {
	alert ("Число отрицательное трехзначное");
} else if  (number >= -99 && number <= -10){
	alert ("Число отрицательное двухзначное");
} else if (number >= -9 && number <= -1){
	alert ("Число отрицательное односоставное");
} else if (number === 0){
	alert ("Число нулевое");
} else if (number >= 1 && number <= 9){
	alert ("Число положительное односоставное");	
} else if (number >= 10 && number <= 99){
	alert ("Число положительное двухсоставное");
} else if (number >= 100 && number <= 999)){
	alert ("Число положительное трехсоставное");
}
*/


/*let arr = [];
let A = [12,4,3,10,1,20];
let B = [-3,-7,-100,-33];

let C = A.concat(B);
console.log (C);*/

let D = [-12,4,3,10,1,20];

/*let min = D.sort ().shift ();
console.log (D);

let max = D.sort ().pop ();
console.log (D);*/

min = D[0];
max = D[0];

for (let i =0; i < D.length; i++){
	if (min > D[i]){
		D.shift (D[i]);
	} else if (max < D[i]){
		D.pop (D[i]);
	}
}
console.log (D);