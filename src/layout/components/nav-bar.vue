<template>
  <div class="side-wrapper">
    <div class="left">
      <img :src="logoUrl" />
    </div>
    <div class="right">
      <span><i class="iconfont icontubiao01"></i></span>
      <span><i class="iconfont icontixing"></i></span>
      <span><img :src="logoUrl" />朱俊成</span>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'NavBar',
  data () {
    return {
      logoUrl:Logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .side-wrapper
    display:flex;
    justify-content:space-between;
    width:100%;
    height:80px;
    line-height:80px;
    padding:0 30px;
    box-sizing:border-box;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    background:linear-gradient(-6deg,rgba(167,216,223,1),rgba(123,205,217,1));
    box-shadow:3px 0px 9px 0px rgba(172,200,219,0.46);
    .left>img
      width:74px;
    .right
      display:flex;
      align-items:center;
      span 
        color:#18ACC3;
        margin-left:30px;
        font-size:14px;
        i 
          font-size:29px;
          color:#fff;
        img 
          width:32px;
          height:32px;
          border-radius:50%;
          margin-right:10px;
</style>
