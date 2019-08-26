<template>
  <div class="wrapper">
    <p class="title"><i class="iconfont iconfanhui" @click="backtoLogin"></i>忘记密码</p>
    <input-box classname="iconshouji" placeholder="请输入您的账号"></input-box>
    <input-box classname="iconyanzhengma2" placeholder="输入验证码"></input-box>
    <input-box classname="iconmima1" type="password" placeholder="输入新设置密码"></input-box>
    <input-box classname="iconmima1" type="password" placeholder="再次确认密码"></input-box>
    <p class="button">确定</p>
  </div>
</template>

<script>
  import InputBox from './input-box'
  export default {
    data () {
      return {
        checked:false
      }
    },
    methods:{
      backtoLogin(){
        this.$emit('backtoLogin')
      }
    },
    components:{
      InputBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .wrapper
    width:632px;
    height:550px;
    border-radius:0 14px 14px 0;
    background:#fff;
    padding:50px 100px;
    box-sizing:border-box;
    .title
      color:#111111;
      font-size:26px;
      text-align:center;
      margin-bottom:23px;
      position:relative;
      i 
        position:absolute;
        left:0;
        font-size:20px;
        color:#828282;
        cursor:pointer;
    .button
      button(#519DDD,100%,50px,22px,7px)
      margin-top:40px;
</style>
