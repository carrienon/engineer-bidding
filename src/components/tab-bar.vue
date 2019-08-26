<template>
  <div class="tabbar">
    <ul class="state-list">
      <li :class="activeIndex===index?'active':''" v-for="(item,index) in stateList" :key="index" @click="changeState(index)">{{item}}</li>
    </ul>
    <a href="javascript:;">
      <i class="iconfont iconxinjian"></i>创建订单
    </a>
  </div>
</template>

<script>
  export default {
    props:{
      stateList:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        activeIndex:0
      }
    },
    methods: {
      changeState(index){
        this.activeIndex = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/varibles"
  .tabbar
    margin:0 30px;
    padding-top:23px;
    box-sizing:border-box;
    color:#999;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #EFEFEF;
    font-size:16px;
    .state-list
      li
        display:inline-block;
        margin-right:79px;
        cursor:pointer;
        line-height:40px;
      .active
        font-weight:bold;
        border-bottom:2px solid $color-theme;
    a
      color:#999999;
      i 
        color:#52A5F3;
        margin-right:16px;
        font-size:20px;
</style>
