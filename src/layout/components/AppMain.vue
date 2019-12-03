<template>
    <section class="app-main" style="flex:1;overflow-y:auto;overflow-x:hidden;position:relative;">
      <transition name="fade-transform" mode="out-in">
          <router-view :key="key" v-if="isRouterAlive"/>   
      </transition>
    </section>
</template>

<script>

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500 })
export default {
    name: 'AppMain',
    provide() {
        return {
             reload:this.reload
        }
    },
    data(){
        return {
            isRouterAlive:true,
            key:Math.random()
        }
    },
    computed: {
        // key() {
        //     return Math.random();
        // }
    },
    mounted(){
      // console.log("走了")
    },
    methods:{
        reload(){
            this.isRouterAlive =false;
            NProgress.start();
            this.$nextTick(function(){
                  this.isRouterAlive=true;
                  this.key = Math.random();
                  NProgress.done();
            })
        }
    }
}
</script>

<style scoped>
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
 /*2、在样式表里设置：只要是有 v-cloak 属性的标签，我都让它隐藏。
    直到 Vue实例化完毕以后，v-cloak 会自动消失，那么对应的css样式就会失去作用，最终将span中的内容呈现给用户 */
  [v-cloak] {
    display: none;
  }
</style>