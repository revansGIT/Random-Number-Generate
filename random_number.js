const myBTN = document.getElementById("myBTN");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;

myBTN.onclick = function(){
    randomNUM = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNUM;
}