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

//---------------------------------------------input events

const calcForm = document.querySelector('.calc__form');

formInput.forEach(input => input.addEventListener('input', e => {

// validation inputs

        if (!Number.isInteger(Number(e.target.value)) || Number(e.target.value <= 0)) {
            alert('enter a positive integer')
            e.target.value = '';
            summaryListItem.forEach(el => el.classList.remove('open'));
            totalPrice.classList.remove('open');
            return;
        }

        if (e.target.value.length === 0) {
            summaryListItem.forEach(el => el.classList.remove('open'));
            totalPrice.classList.remove('open');
        }

// displaying summary inputs

        if (e.target === products) {
            summaryListItem[0].classList.add('open');
            totalPrice.classList.add('open');
            const productSum = products.value * .5;
            summaryItemCalc[0].innerText = `${products.value} * $0.5`;
            summaryItemPrice[0].innerText = `$${productSum}`;
            // summaryItemCalc[0].innerText = `${products.value} * $0.5`;
            // summaryItemPrice[0].innerText = `$${products.value * .5}`;
        }

        if (e.target === orders) {
            summaryListItem[1].classList.add('open');
            totalPrice.classList.add('open');
            summaryItemCalc[1].innerText = `${orders.value} * $0.25`;
            summaryItemPrice[1].innerText = `$${orders.value * .25}`;
        }
    })
);

//------------------------------------------displaying select list

const selectList = document.querySelectorAll('.select__dropdown li');
const selectInput = document.querySelector('.select__input');

packageSelect.addEventListener('click', e => {
    packageSelect.classList.toggle('open');

    if (e.target === selectList[0]) {
        summaryListItem[2].classList.add('open');
        totalPrice.classList.add('open');
        summaryItemCalc[2].innerText = `Basic`;
        summaryItemPrice[2].innerText = `$0`;
        selectInput.innerText = 'Basic';
    }

    if (e.target === selectList[1]) {
        summaryListItem[2].classList.add('open');
        totalPrice.classList.add('open');
        summaryItemCalc[2].innerText = `Professional`;
        summaryItemPrice[2].innerText = `$25`;
        selectInput.innerText = 'Professional';
    }

    if (e.target === selectList[2]) {
        summaryListItem[2].classList.add('open');
        totalPrice.classList.add('open');
        summaryItemCalc[2].innerText = `Premium`;
        summaryItemPrice[2].innerText = `$60`;
        selectInput.innerText = 'Premium';
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

const totalSum = (products.value * .5) + (orders.value * .25);
totalPrice.lastElementChild.innerText = `$${totalSum}`;

// function checkInputNumber() {
//     inputNumber.forEach(inputs => {
//         if (!Number.isInteger(Number(this.value)) || Number(this.value <= 0)) {
//             alert('enter a positive integer')
//             this.value = '';
//             summaryListItem.forEach(list => list.classList.remove('open'));
//             return;
//         }
//
//         if (products.value.length === 0) {
//             summaryListItem.forEach(list => list.classList.remove('open'));
//         }
//     })
// }


// products.addEventListener('input', e => {
//     // summaryItemCalc.forEach(calc => calc.innerText = '');
//     // summaryItemPrice.forEach(price => price.innerText = '');
//    console.log(products.value);
//     //summaryListItem[0].style.backgroundColor = '#55DFB4FF';
//
//     if (!Number.isInteger(Number(products.value)) || Number(products.value <= 0)) {
//         alert('enter a positive integer')
//         products.value = '';
//         // summaryItemCalc[0].innerText = 'enter a positive integer';
//         // summaryListItem[0].style.backgroundColor = 'tomato';
//         // summaryListItem[0].classList.remove('open');
//         summaryListItem.forEach(list => list.classList.remove('open'));
//         return;
//     }
//
//     if (products.value.length === 0) {
//         //summaryListItem[0].classList.remove('open');
//         //summaryListItem[0].style.backgroundColor = '#55DFB4FF';
//         summaryListItem.forEach(list => list.classList.remove('open'));
//     }
//
//     summaryListItem[0].classList.add('open');
//     summaryItemCalc[0].innerText = `${products.value} * $0.5`;
//     summaryItemPrice[0].innerText = `${products.value * .5}`;
// });