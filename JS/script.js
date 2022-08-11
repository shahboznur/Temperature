let reverse = document.getElementById('reverse');
let convert = document.getElementById('convert');
let firstNumber = document.getElementById('firstNumber');
let result = document.getElementById('result');

clic = 1;

reverse.addEventListener('click', () => {
    clic ++;
    console.log(clic);

    if (clic % 2===0) {
        actualiser();
        firstNumber.setAttribute("placeholder","Fahrenheit");
        result.setAttribute("placeholder","Celsius");
        convert.onclick = function (){fToc()};
    }
    else{
        actualiser();
        firstNumber.setAttribute("placeholder","Celsius");
        result.setAttribute("placeholder","Fahrenheit");
        convert.onclick = function (){ctoF()};
    }
})

function ctoF() {
    var cTemp = Number (firstNumber.value);
    var cToFahr = cTemp * 9 / 5 + 32;
    result.value = cToFahr + " F";
}

function fToc() {
    var fTemp = Number (firstNumber.value);
    var fToCel = ((fTemp - 32) * 5 / 9).toFixed(2);
    result.value = fToCel +" C\°" ;
}

function actualiser() {
    firstNumber.value = "";
    result.value = "";
}