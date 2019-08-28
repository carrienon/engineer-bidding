<template>
  <div class="wrapper" v-show="showBox">
    <div class="content">
      <p class="image"><i class="iconfont icongantanhao"></i></p>
      <p class="tip">{{tipInfo}}</p>
      <p class="button"><a href="javascript:;" @click="cancelDelete">取消</a><a href="javascript:;" @click="confirmDelete">确认</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tipInfo:{
      type:String,
      default:''
    },
    showBox:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    cancelDelete(){
      this.$emit('cancelDelete')
    },
    confirmDelete(){
      this.$emit('confirmDelete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    background:rgba(0,0,0,0.3);
    z-index:11;
    .content
      position:relative;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:460px;
      height:280px;
      padding:39px 0 45px 0;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      .image
        i
          color:#F8D169;
          font-size:48px;
      .tip
        color:#666;
      .button
        a
          display:inline-block;
          button(#4ED0E4,140px,40px,14px,4px)
        a:first-child
          background:rgba(218,246,250,1);
          border:1px solid rgba(78,208,228,1);
          color:#4ED0E4;
          margin-right:80px;
</style>
