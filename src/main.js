import Vue from 'vue';
import App from './App.vue';
import { store } from './store'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'



Vue.component('card-list', require('./components/CardList.vue').default);
Vue.component('card-item', require('./components/CardItem.vue').default);
Vue.component('my-header', require('./components/MyHeader.vue').default);
Vue.component('my-footer', require('./components/MyFooter.vue').default);
Vue.component('my-button', require('./components/UI/MyButton.vue').default);
Vue.component('my-modal', require('./components/UI/MyModal.vue').default);
Vue.component('fa', FontAwesomeIcon);
library.add(fas);


new Vue({
    el: '#app',
    store,
    render: h => h(App),
});