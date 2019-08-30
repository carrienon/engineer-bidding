<template>
  <div class="wrapper" v-show="showTip">
    <div class="content">
      <p class="image"><i class="iconfont iconxuanzhong"></i></p>
      <p class="tip">{{tipInfo}}</p>
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
    showTip:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      
    }
  },
  watch:{
    showTip(val){
      if(val){
        setTimeout(()=>{
          this.$emit('closeTip')
        },1000)
      }
    }
  },
  mounted(){
    
  },
  methods:{
    
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
          color:#4ADEBD;
          font-size:60px;
      .tip
        color:#666;
        font-size:25px;
</style>
