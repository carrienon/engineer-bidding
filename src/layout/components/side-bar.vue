<template>
  <div class="side-bar">
    <ul>
      <router-link tag="li" 
        class="menu-item" 
        v-for="(item,index) in menuData" 
        :key="index"
        :to="item.route"
      >
        <img class="menu-img" :src="item.imgurl" />
        <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'SideBar',
  data () {
    return {
      menuData:[
        {
          name:'工作台',
          imgurl:Logo,
          route:'/work-bench'
        },
        {
          name:'订单管理',
          imgurl:Logo,
          route:'/order-manage'
        },
        {
          name:'项目管理',
          imgurl:Logo,
          route:'/project-manage'
        },
        {
          name:'文档管理',
          imgurl:Logo,
          route:'/document-manage'
        },
        {
          name:'财务管理',
          imgurl:Logo,
          route:'/finance-manage'
        },
        {
          name:'报表管理',
          imgurl:Logo,
          route:'/report-manage'
        },
        {
          name:'个人中心',
          imgurl:Logo,
          route:'/user-center'
        }
      ]
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .side-bar
    width:100px;
    height:calc(100vh - 80px);
    position:fixed;
    top:80px;
    left:0;
    box-shadow:2px 0px 0px 0px rgba(116,116,116,0.07);
    overflow:scroll;
    background:#fff;
    z-index:1;
    .menu-item
      font-size:12px;
      width:100px;
      height:51px;
      display:flex;
      flex-direction:column;
      align-items :center;
      justify-content:space-between;
      padding:36px 0 13px 0;
      cursor:pointer;
      img
        width:20px;
        height:20px;
    .router-link-active
      color:rgba(78, 208, 228, 1);
      background:linear-gradient(90deg,rgba(78, 208, 228,0.22) 0%,rgba(46,101,253,0) 100%);
      border-left:4px solid rgba(78, 208, 228, 1);
  .side-bar::-webkit-scrollbar
    display:none;
</style>
