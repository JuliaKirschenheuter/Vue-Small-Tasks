import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
    
    name: 'ListView',
    template: `
    <ul>
      <li v-for="item in items">
        <slot name="item" :item="item">
            {{ item }}
        </slot>
      </li>
    </ul>`,
    
    props: {
        items: Array,
    }
    
};

const App = {
    template: `
    <div>
      <list-view :items="list">
        <template #item="{ item }">
          <a href="#">{{ item.name }}</a>
        </template>
      </list-view>
    </div>`,
    
    components: {
        ListView,
    },
    
    data() {
        return {
            list: [{name: "Cat"}, {name: 'Bob'}, 2, 3, 4],
        };
    },
};

const app = new Vue(App).$mount('#app');
