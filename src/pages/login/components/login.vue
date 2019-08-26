<template>
  <div class="wrapper">
    <p class="title">中都云谷管理平台</p>
    <input-box classname="iconshouji" placeholder="请输入您的账号"></input-box>
    <input-box classname="iconmima1" type="password" placeholder="请输入您的密码"></input-box>
    <p class="forget">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <a href="javascript:;" @click="forgetPassword">忘记密码</a
    ></p>
    <router-link tag="p" class="button" to="/">登录</router-link>
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
      forgetPassword(){
        this.$emit('forgetPassword')
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
    padding:100px;
    box-sizing:border-box;
    .title
      color:#111111;
      font-size:26px;
      text-align:center;
      margin-bottom:23px;
    .forget
      margin:24px 0;
      display:flex;
      justify-content:space-between;
    .button
      button(#519DDD,100%,50px,22px,7px)
</style>
