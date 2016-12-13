import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});