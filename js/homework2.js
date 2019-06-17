
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
//--------------------------------------------------------

//-----------------Задача 4-------------------------------

/*for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('ThreeFive');
  } else if ( i % 3 === 0) {
    console.log('Three');
  } else if ( i % 5 === 0) {
    console.log('Five');
  } else {
    console.log(i);
  }
}*/

//-----------------------------------------------------------

//----------------Задача 5 -------------------------------------

/*let year = prompt('Введите год :');

if (year % 100 !== 0 && year % 4 === 0) {
  alert(year + ' год - високосный')
} else if (year % 400 === 0) {
  alert(year + ' год - високосный')
} else alert(year + ' год - не високосный');*/

//--------------------Задача 6----------------------------------------

let plates = parseInt(prompt('Количество тарелок, шт.:'));
let cleanser = parseFloat(prompt('Количество моющего средства:'));

while (plates > 0 && cleanser >= 0.5) {
  plates = plates - 1;
  cleanser = cleanser - 0.5;
};

if (plates === 0 && cleanser > 0) {
  console.log(`Все тарелки вымыты. Осталось ${cleanser} ед. моющего средства`);
} else if (plates > 0 && cleanser < 0.5) {
  console.log(`Моющее средство закончилось. Осталось ${plates} тарелок`)
} else if (plates === 0 && cleanser === 0) {
	console.log('Все тарелки вымыты, моющее средство закончилось');