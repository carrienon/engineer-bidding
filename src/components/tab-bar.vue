<template>
  <div class="tabbar">
    <ul class="state-list">
      <li :class="activeIndex===index?'active':''" v-for="(item,index) in stateList" :key="index" @click="changeState(index)">{{item}}</li>
    </ul>
    <a href="javascript:;" @click="createOrder" v-show="showButton">
      <i class="iconfont iconxinjian"></i>创建订单
    </a>
    <a href="javascript:;" @click="createBill" v-show="showBill">
      <i class="iconfont iconxinjian"></i>申请发票
    </a>
  </div>
</template>

<script>
  export default {
    props:{
      stateList:{
        type:Array,
        default:[]
      },
      showButton:{
        type:Boolean,
        default:false
      },
      showBill:{
        type:Boolean,
        default:false
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
        this.$emit('changeState',index)
      },
      createOrder(){
        this.$emit('createOrder')
      },
      createBill(){
        this.$emit('createBill')
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
        color:#666;
    a
      color:#999999;
      i 
        color:#52A5F3;
        margin-right:16px;
        font-size:20px;
</style>
