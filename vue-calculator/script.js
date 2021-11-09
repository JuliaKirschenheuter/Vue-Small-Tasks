import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';
const app = new Vue({
    template: `#app`,
    
    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            // resultValue: 0,
            valueRadioButton: '',
        }
    },
    
    computed: {
        resultValue() {
            this.firstNumber = Number(this.firstNumber);
            this.secondNumber = Number(this.secondNumber);
            if (this.valueRadioButton === 'sum') {
                return this.firstNumber + this.secondNumber
            } else if (this.valueRadioButton === 'subtract') {
                return this.firstNumber - this.secondNumber;
            } else if (this.valueRadioButton === 'multiply') {
                return this.firstNumber * this.secondNumber
            } else if (this.valueRadioButton === 'divide') {
                return this.firstNumber / this.secondNumber;
            }
            return 0
        }
    }
    // watch: {
    //     valueRadioButton: function(newVal) {
    //         this.valueRadioButton = newVal;
    //         this.calculateValue(this.firstNumber, this.secondNumber)
    //     },
    //     firstNumber: function(newVal) {
    //         this.firstNumber = newVal;
    //         this.calculateValue(this.firstNumber, this.secondNumber)
    //     },
    //     secondNumber: function(newVal) {
    //         this.secondNumber = newVal;
    //         this.calculateValue(this.firstNumber, this.secondNumber)
    //     }
    // },
    // methods: {
    //     calculateValue(a, b) {
    //         a = Number(a);
    //         b = Number(b);
    //         if (this.valueRadioButton === 'sum') {
    //             this.resultValue = a + b;
    //         } else if (this.valueRadioButton === 'subtract') {
    //             this.resultValue = a - b;
    //         } else if (this.valueRadioButton === 'multiply') {
    //             this.resultValue = a * b;
    //         } else if (this.valueRadioButton === 'divide') {
    //             this.resultValue = a / b;
    //         }
    //     }
    // }
})

app.$mount('#app');
