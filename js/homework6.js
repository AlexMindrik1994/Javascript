/*-----------Задача 2 --------------*/
function Number(){
  var arr = [];
  return function() {
    var number;
    while (arr.length <=100) {
      number = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(number) === -1) {
        arr.push(number);
        return number;
      }
    }
  }
}
  var number = Number();
console.log(number());
