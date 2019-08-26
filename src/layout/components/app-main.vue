<template>
  <div class="app-main">
    <div class="content">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .app-main
    margin-left:100px;
    background:rgba(246, 247, 251, 1);
    padding:21px 34px 12px 34px;
    min-height:calc(100vh - 113px);
    width:1752px;
    overflow-x:scroll;
  .app-main::-webkit-scrollbar
    display:none;
</style>
