<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>


export default {
    name: 'app', 
    mounted(){
      const { language } = JSON.parse(localStorage.getItem("store")) || {};
      this.$i18n.locale = language || "zh";
    }
}
</script>

<style lang="less">
    
</style>
