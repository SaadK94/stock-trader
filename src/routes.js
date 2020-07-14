import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

export const routes = [
	{ path: '', component: Home },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/stocks', component: Stocks }
];
