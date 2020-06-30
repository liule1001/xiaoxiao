import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
// import modules from './modules.js'
import { TaskNode, TaskNodeStore } from 'vue-task-node'
// 调用vuex
Vue.use(TaskNode)
Vue.use(Vuex)
    // export default new Vuex.Store({
    //   state: {
    //   },
    //   mutations: {
    //   },
    //   actions: {
    //   },
    //   modules: {
    //   }
    // })
    // vuex 最核心的管理对象Store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        TaskNodeStore
    }
})