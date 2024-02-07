// Task 1
function checkVotingEligibility(age) {
 
  if (age >18 ){
      console.log('you are eligible for voting')
  }
  else{
      console.log('you are not eligible for voting')
  }
}
checkVotingEligibility(20);
// Task 2
function printNumbersWithWhile(num) {
  console.log('--------------home works two-----------------------')
  var i=0 ;
  while(i<=num){
      console.log(i)
      i++
  }
}
printNumbersWithWhile(6)

// Task 3
function printEvenNumbersWithFor() {
  console.log('--------------home works three-----------------------')
  for( i=0 ;i<=10 ;i++){
    if ( i % 2== 0){
     console.log(i)
    }
 }
}
printEvenNumbersWithFor()
// Task 4
function getDayOfWeek(day) {
  console.log('--------------home works four-----------------------')
  switch(day){
      case 1: console.log('sunday')
      break;
      case 2: console.log('monday')
      break;
      case 3: console.log('tusday')
      break;
      case 4: console.log('winsday')
      break;
      case 5: console.log('thirsday')
      break;
      case 6: console.log('friday')
      break;
      default : console.log('satrday')
  }
  
}
getDayOfWeek(4)

// Task 5
function sum(a,b) {
  console.log('--------------home works five-----------------------')
  
      console.log(a+b)
}
sum(9,6);

// Task 6
//Uncomment and solve
// const fruits = ;
console.log('--------------home works six-----------------------')
var fruits =['apple' , 'banana' ,'orange'];
for(var j=0 ; j<fruits.length ; j++){
    console.log(j , fruits[j])
}
module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
