import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(Router);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-2d3c2.firebaseio.com/';

Vue.filter('currency', (value) => {
	return `£${value.toLocaleString()}`;
});

const router = new Router({
	routes,
	mode: 'history'
});

new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
});
