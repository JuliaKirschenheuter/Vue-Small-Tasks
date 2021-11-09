import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

const buttons = [
    {
        value: 'sum',
        symbol: '➕'
    },
    {
        value: 'subtract',
        symbol: '➖'
    },
    {
        value: 'multiply',
        symbol: '✖'
    },
    {
        value: 'divide',
        symbol: '➗'
    }
];

const app = new Vue({
    template: `#app`,
    
    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            // resultValue: 0,
            operation: 'sum'
        }
    },
    
    computed: {
        buttons() {
            return buttons.map((button, i) => ({
                ...button,
                key: `keyFor_${i}`
            }))
        },
        firstNumberAsNumber() {
            return Number(this.firstNumber);
        },
        secondNumberAsNumber() {
            return Number(this.secondNumber);
        },
        result() {
            if (this.operation === 'sum') {
                return this.firstNumberAsNumber + this.secondNumberAsNumber
            } else if (this.operation === 'subtract') {
                return this.firstNumberAsNumber - this.secondNumberAsNumber;
            } else if (this.operation === 'multiply') {
                return this.firstNumberAsNumber * this.secondNumberAsNumber
            } else if (this.operation === 'divide') {
                return this.firstNumberAsNumber / this.secondNumberAsNumber;
            }
            return 0
        }
    }

})

app.$mount('#app');
