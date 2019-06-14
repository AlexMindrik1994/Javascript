/*---------------Задача 1----------------------------*/

    let b = [5, 6, 7, 8];
    let a = [1, 2, 3, 4];


function compare(a,b){
    if (a.length === b.length){ 
      console.log (true);
        
   }else if(a.length != b.length){
   	 console.log (false);
   }
   

}
compare(a,b); 

/*--------------------------------------------*/


/*----------------Задача 2 ------------------------*/
range = function (a, b, step){
  if(step === null) step = 1;
  var range = [];
  if(a<b){
    for (var i = a; i<=b; i+=step)
      range.push(i);
  }else{
    for (var i = a; i>=b; i+=step)
      range.push(i);
  }
  return range;

}
console.log(range(1,10,2));

/*------------------------------------------------------*/
/*--------------------Задача 3------------------------------*/
var student = {
    name: "Alexey",
    surname: "Mindric",
    age: "25",
    hobbies: ['football', 'cinema', 'books'],
    university: "IFMO"
};
function studentCard(student){
  console.log(student);
}
studentCard(student);
/*--------------------------------------*/