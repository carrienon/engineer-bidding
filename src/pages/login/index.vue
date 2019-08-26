<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <login v-if="showLogin" @forgetPassword="forgetPassword"></login>
          <forget v-else @backtoLogin="forgetPassword"></forget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from './components/login'
  import Forget from './components/forget'
  export default {
    data () {
      return {
        showLogin:true
      }
    },
    mounted(){
      
    },
    methods:{
      forgetPassword(){
        this.showLogin=!this.showLogin
      }
    },
    components:{
      Login,
      Forget
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .wrapper
    width:100%;
    height:100vh;
    padding:90px 0;
    box-sizing:border-box
    .container
      width:100%;
      height:100%;
      background:linear-gradient(-30deg,rgba(132,237,241,1),rgba(102,175,232,1));
      opacity:0.78;
      .content
        display:flex;
        align-items:center;
        justify-content:center;
        height:100%;
        .left
          width:518px;
          height:550px;
          background:rgba(255,255,255,1);
          opacity:0.58;
          border-radius:14px 0px 0px 14px;
</style>
