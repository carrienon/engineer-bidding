<template>
  <div class="info-wrapper">
    <div class="info-left">
      <p class="info-item"><span>订单状态</span><span>待发布</span></p>
      <p class="info-item"><span>项目名称</span><span>10000.00元</span></p>
      <p class="info-item"><span>项目规模</span><span>354</span></p>
      <p class="info-item"><span>项目所在地</span><span>项目名称</span></p>
      <p class="info-item"><span>项目类型</span><span>10000.00元</span></p>
      <p class="info-item"><span>项目分类</span><span>项目名称</span></p>
      <p class="info-item"><span>项目费用</span><span>10000.00元</span></p>
      <p class="info-item"><span>项目总体费用</span><span>123</span></p>
      <p class="info-item"><span>项目设计费用</span><span>项目名称</span></p>
      <p class="info-item"><span>内部推荐人</span><span>10000.00元</span></p>
    </div>
    <div class="info-right">
      <p class="info-item"><span>支付支配方式</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
      <p class="info-item"><span>是否自带成果</span><span>2019-6-23</span></p>
      <p class="info-item"><span>业主单位名称</span><span>2019-12-12</span></p>
      <p class="info-item"><span>联系人姓名</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
      <p class="info-item"><span>联系人电话</span><span>2019-6-23</span></p>
      <p class="info-item"><span>项目描述</span><span>2019-12-12</span></p>
      <p class="info-item"><span>项目附件</span><span class="check-btn"><a href="javascript:;">查看</a></span></p>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import UploadFile from '@/components/upload-file'
  import TopTitle from './top-title'
  export default {
    data () {
      return {
        title:'订单管理',
        imgurl:require('assets/image/title/ic_order manage.png'),
        taskImg:require('assets/image/ic_task.png')
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      TitleBar,
      TopTitle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~assets/styles/mixins"
    .info-wrapper
      display:flex;
      border-bottom:1px solid #EFEFEF;
      padding:60px;
      margin-bottom:20px;
      flex-wrap:wrap;
      .task-item
        margin-bottom:20px;
        color:#666;
        .task-number
          margin-bottom:6px;
          display:flex;
          align-items:center;
          i 
            margin-right:10px;
            color:#71C9AF;
            font-size:20px;
        .task
          width:380px;
          height:100px;
          padding:20px 30px;
          box-sizing:border-box;
          margin-right:129px;
          background:rgba(249,252,252,1);
          box-shadow:0px 0px 6px 0px rgba(155,195,201,0.44);
          border-radius:0px 40px 40px 40px;
          p
            display:flex;
            span:first-child
              display:inline-block;
              width:56px;
              color:#999;
              margin-right:63px;
            span:last-child
              display:inline-block;
              width:196px;
              height:28px;
              overflow:hidden;
          p:first-child
            margin-bottom:12px;
      .info-right
        margin-left:80px;
      .info-item
        display:flex;
        span 
          display:inline-block;
          min-height:34px;
          line-height:34px;
        span:first-child
          width:100px;
          font-size:14px;
          color:#999999;
        span:last-child
          width:250px;
          max-width:250px;
          margin-left:30px;
          font-size:14px;
          color:#666;
        .rate
          margin-top:7px;
        .check-btn a
          color:#4CB4F7;
    .info-wrapper:last-child
      border:none;
  .content::-webkit-scrollbar
    display:none;
</style>
