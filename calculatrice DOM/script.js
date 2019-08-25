const number = Array.from(document.querySelectorAll('.number'))
const oper = Array.from(document.querySelectorAll(".op"))
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')
const revert = document.querySelector('#revert')
const calc = document.querySelector(".calc")

let operator = ""
let op = false
let somme = 0;
let changeop = true

reset.addEventListener('click', () => { result.innerHTML = 0; somme = 0; })
revert.addEventListener('click', () => { result.innerHTML = result.innerHTML.slice(0, -1) })

number.map(el => el.addEventListener('click', () => {
    if (op) {
        result.innerHTML = 0
        result.innerHTML = +(result.innerHTML + el.innerHTML)
        op = false
    }
    else {
        result.innerHTML = +(result.innerHTML + el.innerHTML)
    }

}))

oper.map(el => el.addEventListener('click', () => {
    if (!op) { call() }
    switch (el.innerHTML) {
        case "x": {
            somme = +result.innerHTML;
            operator = "mult";
            return op = true
        };
        case "÷": {
            somme = +result.innerHTML;
            operator = "div";
            return op = true
        };
        case "-": {
            somme = +result.innerHTML;
            operator = "minus";
            return op = true
        };;
        case "+": {

            somme = +result.innerHTML;
            operator = "plus";
            op = true
        };
        default: return;

    }
}
))

calc.addEventListener('click', () => {
    call()
})

const call = () => {
    if (operator === "plus") {
        result.innerHTML = +result.innerHTML + +somme; operator = ""; op = true;
    }
    else if (operator === "mult") { result.innerHTML = +result.innerHTML * +somme; operator = ""; op = true; }
    else if (operator === "minus") { result.innerHTML = +somme - +result.innerHTML; operator = ""; op = true; }
    else if (operator === "div") { result.innerHTML = +somme / +result.innerHTML; operator = ""; op = true; }
}




