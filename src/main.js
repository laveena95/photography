import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

//importing styles sheet
import './scss/main.scss';

//importing main pages
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

//routes
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/contact', component: Contact},
    { path: '*', component: NotFound}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
