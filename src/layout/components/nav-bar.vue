<template>
  <div class="side-wrapper">
    <div class="left">
      <img :src="logoUrl" />
      <div class="middle" v-show="showRoute">
        <a href="javascript:;" @click="goBack"><i class="iconfont icon2fanhui"></i></a>
        <ul v-for="(item,index) in routeData" :key="index">
          <router-link tag="li" :to="item.route">{{item.name}}</router-link>
        </ul>
      </div>
    </div>
    <div class="right">
      <a href="javascript:;" @click="gotoModify"><i class="iconfont icontubiao01"></i></a>
      <a href="javascript:;" @click="gotoInfo"><i class="iconfont icontixing"></i></a>
      <a href="javascript:;" @click="gotoUser"><img :src="logoUrl" />朱俊成</a>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'NavBar',
  data () {
    return {
      logoUrl:Logo,
      showRoute:false,
      routeData:[
        {
          name:'订单管理',
          route:'./index'
        },
        {
          name:'合同管理',
          route:'./contract-manage'
        },
        {
          name:'客户跟踪',
          route:'./client-follow'
        }
      ]
    }
  },
  watch:{
    $route(to,from){
      let path = to.path
      if(path.indexOf('order-manage')>0){
        this.showRoute = true
      }else{
        this.showRoute = false
      }
    }
  },
  mounted(){
    let path = this.$route.path
    if(path.indexOf('order-manage')>0){
        this.showRoute = true
      }else{
        this.showRoute = false
      }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    gotoInfo(){
      this.$router.push('/work-bench/system-info')
    },
    gotoUser(){
      this.$router.push('/user-center/index')
    },
    gotoModify(){
      this.$router.push('/user-center/modify-password')
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
    .left
      display:flex;
      align-items:center;
      img 
        width:73px;
        height:20px;
      .middle
        display:flex;
        align-items:center;
        a
          margin:0 80px 0 123px;
          i
          font-size:16px;
          color:#fff;
        ul
          font-size:18px;
          color:#0097AD;
          li
            margin-right:62px;
            cursor:pointer;
          .router-link-active
            color:#fff;
    .right
      display:flex;
      align-items:center;
      a 
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
