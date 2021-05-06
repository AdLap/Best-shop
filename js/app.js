//AdLap

//-------------------------------------------------------------------------- Functions

function addClassOpen() {
    this.summaryElement.classList.add('open');
}

//-------- number inputs

function valuePrice() {

    if ((!Number.isInteger(Number(this.choiceElement.value))) || (Number(this.choiceElement.value < 0))) {
        this.calcTextElement.innerText = 'Enter a positive integer';
        this.summaryElement.style.backgroundColor = 'tomato';
        return;
    }

    this.summaryElement.style.backgroundColor = '#55DFB4FF';
    this.calcTextElement.innerText = `${this.choiceElement.value} * $ ${this.factor}`;
    this.priceTextElement.innerText = `$ ${this.choiceElement.value * this.factor}`;
    return Number(this.choiceElement.value) * this.factor;
}

//----------- package

function addPrice() {
    if (this.summaryElement.classList.contains('open')) return this.cost;
}

function packagePrice() {
    package.calcTextElement.innerText = `${this.name}`;
    package.priceTextElement.innerText = `$ ${this.cost}`;
    package.inputText.innerText = `${this.name}`;
    return package.cost = this.cost;
}

//------------ checkbox

function addCheckPrice() {
    this.choiceElement.checked ? this.cost = this.factor : this.cost = 0;
    this.priceTextElement.innerText = `$ ${this.cost}`;
}

function checkShowSummary() {
    this.summaryElement.classList.toggle('open');
}

//----------- totalPrice

function generalPrice() {
    totalPrice.cost = products.cost() + orders.cost() + package.cost + accounting.cost + terminal.cost;
    totalPrice.priceTextElement.innerText = `$ ${totalPrice.cost}`;
}

//------------------------------------------------------------------------ Elements

const summaryOutputItems = document.querySelectorAll('.list__item');

const products = {
    choiceElement: document.querySelector('#products'),
    summaryElement: summaryOutputItems[0],
    calcTextElement: summaryOutputItems[0].children[1],
    priceTextElement: summaryOutputItems[0].lastElementChild,
    factor: .5,
    cost: valuePrice,
    showSummary: addClassOpen
}

const orders = {
    choiceElement: document.querySelector('#orders'),
    summaryElement: summaryOutputItems[1],
    calcTextElement: summaryOutputItems[1].children[1],
    priceTextElement: summaryOutputItems[1].lastElementChild,
    factor: .25,
    cost: valuePrice,
    showSummary: addClassOpen
}

const package = {
    choiceElement: document.querySelector('#package'),
    inputText: document.querySelector('.select__input'),
    summaryElement: summaryOutputItems[2],
    calcTextElement: summaryOutputItems[2].children[1],
    priceTextElement: summaryOutputItems[2].lastElementChild,
    cost: 0,
    optionInput: document.querySelector('.select__dropdown'),
    options: {
        basic: {
            choiceElement: document.querySelector('.select__dropdown').firstElementChild,
            cost: 0,
            name: 'Basic',
            elementPrice: packagePrice
        },
        professional: {
            choiceElement: document.querySelector('.select__dropdown').children[1],
            cost: 25,
            name: 'Professional',
            elementPrice: packagePrice
        },
        premium: {
            choiceElement: document.querySelector('.select__dropdown').lastElementChild,
            cost: 60,
            name: 'Premium',
            elementPrice: packagePrice
        }
    },
    showSummary: addClassOpen,
    elementPrice: addPrice,
    showOption: () => package.choiceElement.classList.toggle('open')
}

const accounting = {
    choiceElement: document.querySelector('#accounting'),
    summaryElement: summaryOutputItems[3],
    calcTextElement: '',
    priceTextElement: summaryOutputItems[3].lastElementChild,
    factor: 5,
    cost: 0,
    showSummary: checkShowSummary,
    elementPrice: addCheckPrice
}

const terminal = {
    choiceElement: document.querySelector('#terminal'),
    summaryElement: summaryOutputItems[4],
    calcTextElement: '',
    priceTextElement: summaryOutputItems[4].lastElementChild,
    factor: 35,
    cost: 0,
    showSummary: checkShowSummary,
    elementPrice: addCheckPrice
}

const totalPrice = {
    choiceElement: '',
    summaryElement: document.querySelector('#total-price'),
    calcTextElement: '',
    priceTextElement: document.querySelector('#total-price').lastElementChild,
    cost: 0,
    showSummary: addClassOpen,
    elementPrice: generalPrice
}

//-------------------------------------------------------------------------------------- Events

products.choiceElement.addEventListener('input', e => {
        products.showSummary();
        totalPrice.showSummary();
        totalPrice.elementPrice();
    }
)

orders.choiceElement.addEventListener('input', e => {
        orders.showSummary();
        totalPrice.showSummary();
        totalPrice.elementPrice();
    }
)

package.choiceElement.addEventListener('click', e => {

        switch (e.target) {
            case package.options.basic.choiceElement:
                package.showSummary();
                package.options.basic.elementPrice();
                totalPrice.showSummary();
                totalPrice.elementPrice();
                break;

            case package.options.professional.choiceElement:
                package.showSummary();
                package.options.professional.elementPrice();
                totalPrice.showSummary();
                totalPrice.elementPrice();
                break;

            case package.options.premium.choiceElement:
                package.showSummary();
                package.options.premium.elementPrice();
                totalPrice.showSummary();
                totalPrice.elementPrice();
                break;
        }
        package.showOption();
    }
)

accounting.choiceElement.addEventListener('change', e => {
    accounting.showSummary();
    accounting.elementPrice();
    totalPrice.showSummary();
    totalPrice.elementPrice();
})

terminal.choiceElement.addEventListener('change', e => {
    terminal.showSummary();
    terminal.elementPrice();
    totalPrice.showSummary();
    totalPrice.elementPrice();
})
