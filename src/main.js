import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./plugins/vcharts"
import * as Echarts from 'echarts';
import ECharts from 'vue-echarts'
import "./style/index.css";

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

// register globally (or you can do it locally)
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
