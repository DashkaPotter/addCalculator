const input1 = document.querySelector('.number1')
const input2 = document.querySelector('.number2')
const btn = document.querySelector('.btn');
const btnTwo = document.querySelector('.btn2');


btn.addEventListener('click', calculateAmount);

function calculateAmount(e){
    e.preventDefault()
    let sum = Number(input1.value) + Number (input2.value);
    const par = document.querySelector('.result').textContent = sum
}
