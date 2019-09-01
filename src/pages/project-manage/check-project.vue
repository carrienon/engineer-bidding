<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="项目名称">
        <div slot="rightButton" class="right">
          <a href="javascript:;" class="save">存草稿</a>
          <a href="javascript:;" class="reset">创建项目</a>
        </div>
      </top-title>
      <p class="info-title"><span>项目基本信息</span><span>我的任务</span></p>
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
        <div class="info-middle">
          <p class="info-item"><span>支付支配方式</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
          <p class="info-item"><span>是否自带成果</span><span>2019-6-23</span></p>
          <p class="info-item"><span>业主单位名称</span><span>2019-12-12</span></p>
          <p class="info-item"><span>联系人姓名</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
          <p class="info-item"><span>联系人电话</span><span>2019-6-23</span></p>
          <p class="info-item"><span>项目描述</span><span>2019-12-12</span></p>
          <p class="info-item"><span>项目附件</span><span class="check-btn"><a href="javascript:;">查看</a></span></p>
          <p class="info-item"><span>项目创建人</span><span>2019-6-23</span></p>
          <p class="info-item"><span>项目创建时间</span><span>2019-12-12</span></p>
        </div>
        <div class="info-right">
          <div class="task">
            <p><span>任务名称</span><span>任务名称</span></p>
            <p><span>任务占比</span><span>20%</span></p>
            <p class="operation"><span>操作</span><span><a href="javascript:;">接受</a><a href="javascript:;">不接受</a></span></p>
            <p class="state"><span>状态</span><span><a href="javascript:;">已接受</a><a href="javascript:;">已拒绝</a></span></p>
          </div>
        </div>
      </div>
      <p class="info-title">分解任务</p>
      <div class="info-wrapper">
        <div class="task-item" v-for="(item,index) in taskData" :key="index">
          <p class="task-number"><i class="iconfont icontag"></i>任务{{index+1}}</p>
          <div class="task">
            <p><span>任务名称</span><span>{{item.name}}</span></p>
            <p><span>任务占比</span><span>{{item.rate}}</span></p>
          </div>
        </div>
      </div>
      <p class="info-title">分配任务<a href="javascript:;" @click="createTask">添加任务</a></p>
      <div class="info-wrapper">
        <table-list 
          :titleData="titleData" 
          :tableData="tableData"
        >
        </table-list>
      </div>
      <create-task :showCreate="showCreate" @cancelTask="cancelTask" @confirmTask="confirmTask"></create-task>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TableList from '@/components/table-list'
  import TopTitle from './components/top-title'
  import CreateTask from './components/create-task'
  export default {
    data () {
      return {
        title:'项目管理',
        imgurl:require('assets/logo.png'),
        showCreate:false,
        taskData:[
          {
            name:'任务名称任务名称',
            rate:'20%'
          },
          {
            name:'任务名称任务名称任务名称任务任务名称任务名称任务名称任务',
            rate:'20%'
          },
          {
            name:'任务名称任务名称',
            rate:'20%'
          },
          {
            name:'任务名称任务名称',
            rate:'20%'
          }
        ],
        titleData:['序号','任务内容','百分占比','人员信息','人员确认状态'],
        tableData:[
          {
            number:'1',
            content:'任务内容',
            rate:'10%',
            info:'朱巨成',
            state:'已确认'
          },{
            number:'1',
            content:'任务内容',
            rate:'10%',
            info:'朱巨成',
            state:'已确认'
          },{
            number:'1',
            content:'任务内容',
            rate:'10%',
            info:'朱巨成',
            state:'已确认'
          }
        ]
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      createTask(){
        this.showCreate = true
      },
      cancelTask(){
        this.showCreate = false
      },
      confirmTask(){
        this.showCreate = false
      }
    },
    components:{
      TitleBar,
      TableList,
      TopTitle,
      CreateTask
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~assets/styles/mixins"
  .content
    boxstyle()
    .info-title
      color:#85C4CE;
      font-weight:bold;
      margin:30px 60px;
      font-size:16px;
      position:relative;
      span:first-child
        margin-right:789px;
      a
        position:absolute;
        top:15px;
        right:30px;
        button(#4ADEBD,100px,34px,12px,4px)
    .info-wrapper
      display:flex;
      border-bottom:1px solid #EFEFEF;
      padding:0 60px 30px;
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
      .info-right
        margin-left:125px;
        .task
          width:380px;
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
          .operation
            a:first-child
              color:#34C086;
              margin-right:33px;
            a:last-child
              color:#E86B89;
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
