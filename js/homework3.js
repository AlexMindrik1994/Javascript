/*---------------------Задача 1---------------------------------------*/

/*let A = [12,4,3,10,1,20];
let B = [-3,-7,-100,-33];

let C = A.concat(B);
console.log (C);*/

/*---------------------------------------------------------------------*/


/*-----------------Задача 3--------------------------------------------*/

let D = [-12,4,3,10,1,20];

let min = D.sort ().shift ();
console.log (D);

let max = D.sort ().pop ();
console.log (D);

/*-------------------------------------------------------------------*/
/*min = D[0];
max = D[0];

for (let i =0; i < D.length; i++){
	if (min < D[i]){
		D.shift (D[i]);
	} else if (max > D[i]){
		D.pop (D[i]);
	}
}
console.log (D);*/