/*let num = 3;
let square =0;
for(let i = 1; i <= num;i++){
    square = num * num;
}
    console.log("Square of",num,"=",square);

*/

/*console.log("Prime nums from 1 to 100:")
for (let n = 2; n <= 100; n++) {
    let isPrime = true;
    for (let a = 2; a <= Math.sqrt(n); a++){
        if(n % a === 0){
            isPrime = false;
            break;
        }

    }
    if(isPrime) console.log (n)
}
*/

/*const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "BMW";

for (;cars[i];) {
  text += cars[i];
  i++;
}
*/

let grade = "C-";

switch (grade) {
    case "A+":
        console.log("100 - 95");
        break;
    case "A":
        console.log("90 - 94");
        break;
    case "A-":
        console.log("85 - 89");
        break;
    case "B+":
        console.log("80 - 84");
        break;
    case "B":
        console.log("75 - 79");
        break;
    case "B-":
        console.log("70 - 74");
        break;
    case "C+":
        console.log("65 - 69");
        break;
    case "C":
        console.log("60 - 64");
        break;
    case "C-":
        console.log("55 - 59");
        break;
    case "D+":
        console.log("50 - 54");
        break;
    case "F":
        console.log("0 - 49");
        break;
    default:
        console.log("Unknown grade");
}



/*function sayHi(){
    alert("Hi");
}
sayHi();
*/