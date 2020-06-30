import Vue from 'vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// vue表格自适应插件
import AFTableColumn from 'af-table-column'
// 大屏插件
import dataV from '@jiaminghi/data-view'
// 引入e-charts
import echarts from 'echarts'

import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-task-node/dist/css/vnode.css'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(AFTableColumn);
Vue.use(dataV);

Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')