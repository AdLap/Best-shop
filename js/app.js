//AdLap

//-------------------------------------------------------------------------- Functions

function showSummary() {
    this.output.classList.add('open');
}

function textCalc() {
    this.text.innerText = `$${this.input.value} * ${this.cost}`;
}

function textPrice() {
    this.sum.innerText = `$${Number(this.input.value) * this.cost}`
}

function valuePrice() {
    return Number(this.input.value) * this.cost;
}

function price() {
    return this.cost;
}

function packagePrice() {
    return package.cost = this.cost;
}

function packageCalcText() {
    package.text.innerText = `${this.name}`;
}

function packagePriceText() {
    package.sum.innerText = `$${this.cost}`;
}

function packageSelectText() {
    package.inputText.innerText = `${this.name}`;
}

function checkPriceText() {
    this.sum.innerText = `$${this.cost}`;
}

function checkShowSummary() {
    this.output.classList.toggle('open');
}

function generalPrice() {
    //totalPrice.cost = this.getPrice();
    totalPrice.sum.innerText = totalPrice.cost;
    //return products.getPrice() + orders.getPrice() + package.getPrice() + accounting.getPrice() + terminal.getPrice();
}

//------------------------------------------------------------------------ Elements

const summaryOutputItems = document.querySelectorAll('.list__item');

const products = {
    input: document.querySelector('#products'),
    output: summaryOutputItems[0],
    text: summaryOutputItems[0].children[1],
    sum: summaryOutputItems[0].lastElementChild,
    cost: .5,
    summary: showSummary,
    calc: textCalc,
    price: textPrice,
    getPrice: valuePrice,
    //suma: generalPrice
}

const orders = {
    input: document.querySelector('#orders'),
    output: summaryOutputItems[1],
    text: summaryOutputItems[1].children[1],
    sum: summaryOutputItems[1].lastElementChild,
    cost: .25,
    summary: showSummary,
    calc: textCalc,
    price: textPrice,
    getPrice: valuePrice
}

const package = {
    input: document.querySelector('#package'),
    inputText: document.querySelector('.select__input'),
    output: summaryOutputItems[2],
    text: summaryOutputItems[2].children[1],
    sum: summaryOutputItems[2].lastElementChild,
    cost: '',
    optionInput: document.querySelector('.select__dropdown'),
    options: {
        basic: {
            input: document.querySelector('.select__dropdown').firstElementChild,
            cost: 0,
            name: 'Basic',
            calc: packageCalcText,
            price: packagePriceText,
            getPrice: packagePrice,
            selectText: packageSelectText
        },
        professional: {
            input: document.querySelector('.select__dropdown').children[1],
            cost: 25,
            name: 'Professional',
            calc: packageCalcText,
            price: packagePriceText,
            getPrice: packagePrice,
            selectText: packageSelectText
        },
        premium: {
            input: document.querySelector('.select__dropdown').lastElementChild,
            cost: 60,
            name: 'Premium',
            calc: packageCalcText,
            price: packagePriceText,
            getPrice: packagePrice,
            selectText: packageSelectText
        }
    },
    summary: showSummary,
    getPrice: price,
    showOption: () => package.input.classList.toggle('open')
}

const accounting = {
    input: document.querySelector('#accounting'),
    output: summaryOutputItems[3],
    text: '',
    sum: summaryOutputItems[3].lastElementChild,
    cost: 5,
    summary: checkShowSummary,
    price: checkPriceText,
    getPrice: price
}

const terminal = {
    input: document.querySelector('#terminal'),
    output: summaryOutputItems[4],
    text: '',
    sum: summaryOutputItems[4].lastElementChild,
    cost: 35,
    summary: checkShowSummary,
    price: checkPriceText,
    getPrice: price
}

const totalPrice = {
    input: '',
    output: document.querySelector('#total-price'),
    text: '',
    sum: document.querySelector('#total-price').lastElementChild,
    cost: '',
    summary: showSummary,
    getPrice: generalPrice
}

//-------------------------------------------------------------------------------------- Events

products.input.addEventListener('input', e => {
        products.summary();
        products.calc();
        products.price();
        products.getPrice();
        totalPrice.summary();
        //products.suma();
    }
)

orders.input.addEventListener('input', e => {
        orders.summary();
        orders.calc();
        orders.price();
        orders.getPrice();
        totalPrice.summary();
    }
)

package.input.addEventListener('click', e => {

        switch (e.target) {
            case package.options.basic.input:
                package.summary();
                package.options.basic.calc();
                package.options.basic.price();
                package.options.basic.getPrice();
                package.options.basic.selectText();
                totalPrice.summary();
                break;

            case package.options.professional.input:
                package.summary();
                package.options.professional.calc();
                package.options.professional.price();
                package.options.professional.getPrice();
                package.options.professional.selectText();
                totalPrice.summary();
                break;

            case package.options.premium.input:
                package.summary();
                package.options.premium.calc();
                package.options.premium.price();
                package.options.premium.getPrice();
                package.options.premium.selectText();
                totalPrice.summary();
                break;
        }
        package.showOption();
    }
)

accounting.input.addEventListener('click', e => {
    accounting.summary();
    accounting.price();
    accounting.getPrice();
    totalPrice.summary();
})

terminal.input.addEventListener('click', e => {
    terminal.summary();
    terminal.price();
    terminal.getPrice();
    totalPrice.summary();
})

totalPrice.getPrice();





// formInput.forEach(input => input.addEventListener('input', e => {
//
// // validation inputs
//
//         summaryListItem.forEach(el => el.style.backgroundColor = '#55DFB4FF');
//
//         if (!Number.isInteger(Number(e.target.value)) || Number(e.target.value <= 0)) {
//
//             if (e.target === products) {
//                 errorText(productsSummaryCalc);
//                 changeBackgroundColor(productsList, 'tomato');
//             }
//
//             if (e.target === orders) {
//                 errorText(ordersSummaryCalc);
//                 changeBackgroundColor(ordersList, 'tomato');
//             }
//             return;
//         }
//
//         if (products.value.length === 0) {
//             removeOpen(productsList);
//         }
//
//         if (orders.value.length === 0) {
//             removeOpen(ordersList);
//         }
//}