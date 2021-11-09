import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
    return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((error) => {
                throw error;
            });
        }
    });
}

const app = new Vue({
    template: `#app`,
    
    data() {
        return {
            inputValue: '',
            meetupTitle: ''
        }
    },
    
    watch: {
        inputValue(newVal) {
            this.getTitle(newVal)
        }
    },
    
    methods: {
        getTitle(value) {
            fetchMeetupById(value).then(title => this.meetupTitle = title.title)
        }
    }
    
})

app.$mount('#app');
