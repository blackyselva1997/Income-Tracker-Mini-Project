let form = document.querySelector("#form");
let name1 = document.querySelector("#name");
let amount1 = document.querySelector("#number");
let btn = document.querySelector("#submit");
let totalBalance = document.getElementById("total");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let history = document.getElementById("History");



// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     if (!/^[a-zA-Z]+$/.test(name1.value)) {
//         alert("letter input");
//     }
//     if (!/^[0-9]+$/.test(amount1.value)) {
//         alert("Number input");
//     }
// });

let Translate = [];

function add(name, amount) {
    Translate.push({name, amount});
    read();
    update();
}

function read() {
    let list = document.createElement("li");
    history.appendChild(list);
    list.classList.add(amount1.value > 0 ? "green" : "red");
    list.innerHTML = `<button id="icon" onClick="close()">X</button>${name1.value}: $${amount1.value}`;
}

function update() {
    let total = Translate.reduce((a,b) => a + b.amount,0);
    totalBalance.textContent = `$${total}`;

    let incomes = Translate.filter((a) => a.amount > 0);
    let totalIncomes = incomes.reduce((a,b) => a + b.amount, 0);
    income.textContent = `$${totalIncomes}`;

    let expenses = Translate.filter((a) => a.amount < 0);
    let totalExpense = expenses.reduce((a,b) => a + b.amount, 0);
    expense.textContent = `$${totalExpense}`;
}

let btn1 = history.querySelector("#icon");


function close() {
    btn1.remove(list.innerHTML);
    console.log("hi");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = name1.value;
    let amount = parseInt(amount1.value);
    add(name, amount);
    name1.value = "";
    amount1.value = "";
});

btn.disabled = true;
form.addEventListener("input", () => {
  btn.disabled = !name1.value || !amount1.value;
});