let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
console.log(secondOnes)
let digits = [0,1,2,3,4,5,6,7,8,9]

tenSecTimer =(tens,ones) =>{
    secondTens.innerHTML = tens;
    secondOnes.innerHTML = ones;
    msHundreds.innerHTML = digits[0]
    msTens.innerHTML = digits[0]
}

tenSecTimer(3,2)