// inputs
const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageSelect = document.querySelector('#package');
const optionList = packageSelect.querySelector('.select__dropdown');
const summaryListItem = document.querySelectorAll('.list__item');
const summaryItemCalc = document.querySelectorAll('.item__calc');
const summaryItemPrice = document.querySelectorAll('.item__price');
const inputNumber = document.querySelectorAll('[type=number]');

console.log(summaryItemCalc);
console.log(summaryItemPrice);


//------------------------------------------displaying select list

// function toggleOpen(element) {
//     element.classList.toggle('open');
// }

packageSelect.addEventListener('click', e => packageSelect.classList.toggle('open'));

//---------------------------------------------input events

// function checkInputNumber() {
//     inputNumber.forEach(inputs => {
//         if (!Number.isInteger(Number(this.value)) || Number(this.value <= 0)) {
//             alert('enter a positive integer')
//             this.value = '';
//             summaryListItem.forEach(list => this.classList.remove('open'));
//             return;
//         }
//
//         if (products.value.length === 0) {
//             summaryListItem.forEach(list => this.classList.remove('open'));
//         }
//     })
// }


products.addEventListener('input', e => {
    // summaryItemCalc.forEach(calc => calc.innerText = '');
    // summaryItemPrice.forEach(price => price.innerText = '');
    console.log(products.value);
    //summaryListItem[0].style.backgroundColor = '#55DFB4FF';

    if (!Number.isInteger(Number(products.value)) || Number(products.value <= 0)) {
        alert('enter a positive integer')
        // summaryItemCalc[0].innerText = 'enter a positive integer';
        // summaryListItem[0].style.backgroundColor = 'tomato';
        products.value = '';
        summaryListItem[0].classList.remove('open');
        return;
    }

    if (products.value.length === 0) {
        summaryListItem[0].classList.remove('open');
        //summaryListItem[0].style.backgroundColor = '#55DFB4FF';
    }

    summaryListItem[0].classList.add('open');
    summaryItemCalc[0].innerText = `${products.value} * $0.5`;
    summaryItemPrice[0].innerText = `${products.value * .5}`;
});

