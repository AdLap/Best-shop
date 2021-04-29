// inputs
const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageSelect = document.querySelector('#package');
//const optionList = packageSelect.querySelector('.select__dropdown');
const formInput = document.querySelectorAll('.form__input');

// summary
const summaryListItem = document.querySelectorAll('.list__item');
const summaryItemCalc = document.querySelectorAll('.item__calc');
const summaryItemPrice = document.querySelectorAll('.item__price');
//const inputNumber = document.querySelectorAll('[type=number]');

// total price

const totalPrice = document.querySelector('#total-price');
let productsSum = 0;
let ordersSum = 0;
let packagePrice = 0;
let accountingPrice = 0;
let terminalPrice = 0;
let totalSum = productsSum + ordersSum + packagePrice + accountingPrice + terminalPrice;

// form validation functions

function removeOpen(element) {
    element.classList.remove('open');
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

function errorText(element) {
    element.innerText = 'enter a positive integer';
}

// form displaying summary functions

function addOpen(element) {
    element.classList.add('open');
}

const productsSummaryCalc = summaryItemCalc[0];
const productsList = summaryListItem[0];
const productsPrice = summaryItemPrice[0];
const ordersSummaryCalc = summaryItemCalc[1];
const ordersList = summaryListItem[1];
const ordersPrice = summaryItemPrice[1];

formInput.forEach(input => input.addEventListener('input', e => {

// validation inputs

        summaryListItem.forEach(el => el.style.backgroundColor = '#55DFB4FF');

        if (!Number.isInteger(Number(e.target.value)) || Number(e.target.value <= 0)) {

            if (e.target === products) {
                errorText(productsSummaryCalc);
                changeBackgroundColor(productsList, 'tomato');
            }

            if (e.target === orders) {
                errorText(ordersSummaryCalc);
                changeBackgroundColor(ordersList, 'tomato');
            }
            return;
        }

        if (products.value.length === 0) {
            removeOpen(productsList);
        }

        if (orders.value.length === 0) {
            removeOpen(ordersList);
        }

// displaying summary inputs

        if (e.target === products) {
            addOpen(productsList);
            addOpen(totalPrice);
            let prodSum = products.value * .5;
            productsSummaryCalc.innerText = `${products.value} * $0.5`;
            productsPrice.innerText = `$${prodSum}`;
            return productsSum = prodSum;
        }

        if (e.target === orders) {
            addOpen(ordersList);
            addOpen(totalPrice);
            let orderSum = orders.value * .25;
            ordersSummaryCalc.innerText = `${orders.value} * $0.25`;
            ordersPrice.innerText = `$${orderSum}`;
            return ordersSum = orderSum;
        }
    })
);

//------------------------------------------displaying select list

const selectList = document.querySelectorAll('.select__dropdown li');
const selectInput = document.querySelector('.select__input');
const packageList = summaryListItem[2];
const packageCalc = summaryItemCalc[2];
const packageItemPrice = summaryItemPrice[2];


packageSelect.addEventListener('click', e => {
    packageSelect.classList.toggle('open');

    if (e.target === selectList[0]) {
        packageCalc.innerText = `Basic`;
        packageItemPrice.innerText = `$0`;
        selectInput.innerText = 'Basic';
        addOpen(packageList);
        addOpen(totalPrice);
        return packagePrice = 0;
    }

    if (e.target === selectList[1]) {
        packageCalc.innerText = `Professional`;
        packageItemPrice.innerText = `$25`;
        selectInput.innerText = 'Professional';
        addOpen(packageList);
        addOpen(totalPrice);
        return packagePrice = 25;
    }

    if (e.target === selectList[2]) {
        packageCalc.innerText = `Premium`;
        packageItemPrice.innerText = `$60`;
        selectInput.innerText = 'Premium';
        addOpen(packageList);
        addOpen(totalPrice);
        return packagePrice = 60;
    }
});

//------------------------------------------- CHECKBOXES

const checkbox = document.querySelectorAll('.form__checkbox input');
const accountingSummaryType = summaryListItem[3];
const accountingSummaryPrice = summaryItemPrice[3];
const terminalSummaryType = summaryListItem[4];
const terminalSummaryPrice = summaryItemPrice[4];

checkbox.forEach(check => check.addEventListener('click', e => {

        if (e.target === checkbox[0]) {
            accountingSummaryType.classList.toggle('open');
            totalPrice.classList.add('open');
            let accPrice = 5;
            accountingSummaryPrice.innerText = `$${accPrice}`;
            return accountingPrice = accPrice;
        }


        if (e.target === checkbox[1]) {
            terminalSummaryType.classList.toggle('open');
            totalPrice.classList.add('open');
            let termPrice = 35;
            terminalSummaryPrice.innerText = `$${termPrice}`;
            return terminalPrice = termPrice;
        }
    })
)

//---------------------------------------- TOTAL

totalPrice.lastElementChild.innerText = `$${totalSum}`;

