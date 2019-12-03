import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import getters from "./getters"
import setting from "./module/setting"
import tagView from "./module/tagView"
import tabs from "./module/tabs"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      layout,
      setting,
      tagView,
      tabs
    },
    getters
})
