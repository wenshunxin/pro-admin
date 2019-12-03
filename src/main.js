import Vue from 'vue'
import App from './App.vue'

import store from './store'
import './registerServiceWorker'
import "./icons/iconfont/iconfont.css"
import './plugins/theme.js'
import './plugins/element.js'
import "./style/index.less"
import i18n from '@/lang/index.js'
import loading from 'vue-nice-loading'
Vue.use(loading);
Vue.config.productionTip = false;
const {layoutColor } = JSON.parse(localStorage.getItem("store")) || {};

import theme from "./utils/theme";
theme.handleSetTheme(layoutColor||"#409EFF", true);


import rawDisplayer from "@/components/infra/raw-displayer.vue";
Vue.component("rawDisplayer", rawDisplayer);

import router from './router/router'
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
