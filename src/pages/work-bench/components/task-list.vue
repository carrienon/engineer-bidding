<template>
  <ul class="wrapper">
    <router-link tag="li" class="list-item" v-for="(item,index) in listData" :key="index" :to="item.route">
      <span class="item-left">
        <em>{{item.number}}</em>
        <em>{{item.name}}</em>
      </span>
      <span class="item-right"><img :src="item.imgurl" /></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      listData:[
        {
          number:16,
          name:'我的待办',
          imgurl:require('@/assets/image/workbench/ic_backlog.png'),
          route:'./index'
        },{
          number:16,
          name:'我的已办',
          imgurl:require('@/assets/image/workbench/ic_already backlog.png'),
          route:'./work-done'
        },{
          number:16,
          name:'我的计划',
          imgurl:require('@/assets/image/workbench/ic_plan.png'),
          route:'./my-plan'
        },{
          number:16,
          name:'任务指派',
          imgurl:require('@/assets/image/workbench/ic_taskassignment.png'),
          route:'./task-assign'
        },{
          number:16,
          name:'系统消息',
          imgurl:require('@/assets/image/workbench/ic_new.png'),
          route:'./system-info'
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
  .wrapper
    display:flex;
    justify-content:space-between;
    .list-item
      cursor:pointer;
      width:328px;
      height:146px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 27px 0px rgba(210,210,212,0.59);
      padding:38px 13px 38px 49px;
      box-sizing:border-box;
      display:flex;
      justify-content:space-between;
      .item-left
        font-family:'SourceHanSansCN-Normal';
        em
          display:block;
          font-size:20px;
        em:first-child
          font-size:48px;
          margin-bottom:10px;
          font-family:'Calibri';
      .item-right>img
        width:114px;
        height:60px;
</style>
