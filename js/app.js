// inputs
const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageSelect = document.querySelector('#package');
const optionList = packageSelect.querySelector('.select__dropdown');
const formInput = document.querySelectorAll('.form__input');

// summary
const summaryListItem = document.querySelectorAll('.list__item');
const summaryItemCalc = document.querySelectorAll('.item__calc');
const summaryItemPrice = document.querySelectorAll('.item__price');
const inputNumber = document.querySelectorAll('[type=number]');

// total price

const totalPrice = document.querySelector('#total-price');
const productsSum = '';
const ordersSum = '';


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

formInput.forEach(input => input.addEventListener('input', e => {

// validation inputs

        summaryListItem.forEach(el => el.style.backgroundColor = '#55DFB4FF');

        if (!Number.isInteger(Number(e.target.value)) || Number(e.target.value <= 0) || (e.target.value.length === 0)) {
            console.log('e.target.value', e.target.value);
            if (e.target === products) {
                errorText(summaryItemCalc[0]);
                changeBackgroundColor(summaryListItem[0], 'tomato');
               return;
            }

            if (e.target === orders) {
                errorText(summaryItemCalc[1]);
                changeBackgroundColor(summaryListItem[1], 'tomato');
                return;
            }
        }

       //if (products.value.length === 0) {
            //errorText(summaryListItem[0]);
            // removeOpen(summaryListItem[0]);
            //removeOpen(totalPrice);
       //}

       // if (orders.value.length === 0) {
            //errorText(summaryListItem[1]);
            // removeOpen(summaryListItem[1]);
            // removeOpen(totalPrice);
       // }

// displaying summary inputs

        if (e.target === products) {
            addOpen(summaryListItem[0]);
            addOpen(totalPrice);
            let productSum = products.value * .5;
            summaryItemCalc[0].innerText = `${products.value} * $0.5`;
            summaryItemPrice[0].innerText = `$${productSum}`;
            return productSum = productsSum;
        }

        if (e.target === orders) {
            addOpen(summaryListItem[1]);
            addOpen(totalPrice);
            let orderSum = orders.value * .25;
            summaryItemCalc[1].innerText = `${orders.value} * $0.25`;
            summaryItemPrice[1].innerText = `$${orderSum}`;
            return orderSum = ordersSum;
        }

    })
);
//console.log('productSum2', productSum);
//------------------------------------------displaying select list

const selectList = document.querySelectorAll('.select__dropdown li');
const selectInput = document.querySelector('.select__input');
let packagePrice = 0;

packageSelect.addEventListener('click', e => {
    packageSelect.classList.toggle('open');
    addOpen(summaryListItem[2]);
    addOpen(totalPrice);

    if (e.target === selectList[0]) {
        summaryItemCalc[2].innerText = `Basic`;
        summaryItemPrice[2].innerText = `$0`;
        selectInput.innerText = 'Basic';
        //return packagePrice = 0;
    }

    if (e.target === selectList[1]) {
        summaryItemCalc[2].innerText = `Professional`;
        summaryItemPrice[2].innerText = `$25`;
        selectInput.innerText = 'Professional';
        //return packagePrice = 25;
    }

    if (e.target === selectList[2]) {
        summaryItemCalc[2].innerText = `Premium`;
        summaryItemPrice[2].innerText = `$60`;
        selectInput.innerText = 'Premium';
        //return packagePrice = 60;
    }
});

//------------------------------------------- CHECKBOXES

const checkbox = document.querySelectorAll('.form__checkbox input');

checkbox.forEach(check => check.addEventListener('change', e => {

        if (e.target === checkbox[0]) {
            summaryListItem[3].classList.toggle('open');
            totalPrice.classList.add('open');
            summaryItemPrice[3].innerText = `$35`;
        }

        if (e.target === checkbox[1]) {
            summaryListItem[4].classList.toggle('open');
            totalPrice.classList.add('open');
            summaryItemPrice[4].innerText = `$5`;
        }
    })
)

//---------------------------------------- TOTAL


const totalSum = productsSum + ordersSum + packagePrice;
totalPrice.lastElementChild.innerText = `${totalSum}`;

