<template>
  <div class="wrapper">
    <div class="process">
      <div class="cell-item"  v-for="(itemd,dindex) in process" :key="dindex">
        <p :class="['circle',{'no-active':!itemd.complete}]"><span><em></em></span><span></span></p>
        <p :class="['title',{'nonactive':!itemd.complete}]">{{itemd.title}}</p>
        <p class="time">{{itemd.time}}</p>
      </div>
    </div>
    <p class="top-title"><span>成果上传</span><a href="javascript:;">上传成果</a></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>负责人</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
        </div>
      </div>
    </div>
    <p class="top-title"><span>审核</span></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>负责人</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
          <p class="info-item"><span>审核资料</span><span class="check-btn"><a href="javascript:;">下载</a></span></p>
        </div>
      </div>
      <table-list :titleData="checkTitle" :tableData="checkData" state="1" @checkProject="checkProject"></table-list>
    </div>
    <p class="top-title"><span>签名</span></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
          <p class="info-item"><span>附件</span><span class="check-btn"><a href="javascript:;">下载</a></span></p>
        </div>
      </div>
      <table-list :titleData="signTitle" :tableData="signData" state="2"></table-list>
    </div>
    <p class="top-title"><span>成果输出</span><a href="javascript:;">下载成果</a></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
          <p class="info-item"><span>负责人</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
        </div>
      </div>
    </div>
    <p class="top-title"><span>验收</span><span><a href="javascript:;">通过</a><a href="javascript:;" class="add">不通过</a></span></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>负责人</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
        </div>
      </div>
    </div>
    <p class="top-title"><span>邮寄</span><a href="javascript:;">确认邮寄</a></p>
    <div class="section">
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>开始时间</span><span>2019-06-25</span></p>
          <p class="info-item"><span>结束时间</span><span>2019-06-25</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>负责人</span><span>湖北武汉湖北武汉湖北武汉湖北</span></p>
          <p class="info-item"><span>备注</span><span>2019-6-23</span></p>
        </div>
      </div>
    </div>
    <check-opinion :showCheck="showCheck" @cancelCheck="checkProject" @confirmCheck="confirmCheck"></check-opinion>
  </div>
</template>

<script>
  import UploadFile from '@/components/upload-file'
  import TableList from './table-list'
  import CheckOpinion from './check-opinion'
  export default {
    data () {
      return {
        imgUrl:require('assets/logo.png'),
        labelPosition: 'left',
        showCheck:false,
        form1: {
          name:'',
          size:'',
          address:'',
          type:'',
          category:'',
          total:'',
          design:'',
          cost:'',
          owner:'',
          recommend:'',
          agent:'',
          payway:'',
          contactname:'',
          placeholder:'',
          result:'',
          desc:'',
          value1:''
        },
        process:[
          {
            title:'项目启动',
            time:'2019-8-1',
            complete:true
          },
          {
            title:'成果上传',
            time:'2019-8-1',
            complete:true
          },
          {
            title:'成果审核',
            time:'2019-8-1',
            complete:true
          },
          {
            title:'项目签名',
            time:'2019-8-1',
            complete:true
          },
          {
            title:'成果输出',
            time:'2019-8-1',
            complete:false
          },
          {
            title:'项目验收',
            time:'2019-8-1',
            complete:false
          },
          {
            title:'出版盖章/邮寄给业主',
            time:'2019-8-1',
            complete:false
          }
        ],
        checkTitle:['任务名称','负责人','状态','操作时间'],
        checkData:[
          {
            name:'照明工程',
            people:'朱巨成',
            state:'未审核',
            time:'2019-09-09'
          },
          {
            name:'照明工程',
            people:'朱巨成',
            state:'未审核',
            time:'2019-09-09'
          }
        ],
        signTitle:['任务名称','负责人','时间','签名状态'],
        signData:[
          {
            name:'照明工程',
            people:'朱巨成',
            state:'未审核',
            time:'2019-09-09'
          },
          {
            name:'照明工程',
            people:'朱巨成',
            state:'未审核',
            time:'2019-09-09'
          }
        ]
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      //审核
      confirmCheck(){
        this.showCheck = !this.showCheck
      },
      checkProject(){
        this.showCheck = !this.showCheck
      }
    },
    components:{
      UploadFile,
      TableList,
      CheckOpinion
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .process
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px 0;
    .cell-item
      display:inline-block;
      .circle
        line-height:24px;
        display:flex;
        align-items:center;
        span:first-child
          display:inline-block;
          width:24px;
          height:24px;
          border:1px solid #7AD2B0;
          border-radius:50%;
          text-align:center;
          em  
            display:inline-block;
            width:14px;
            height:14px;
            border:5px solid #fff;
            border-radius:50%;
            background:#7AD2B0;
        span:last-child
          display:inline-block;
          width:80px;
          height:1px;
          background:#7AD2B0;
      .no-active
        span:first-child
          border:1px solid #BCBCBC;
          em 
            background:#BCBCBC;
        span:last-child
          background:#BCBCBC;
    .cell-item:last-child .circle span:last-child
        width:0;
      .title
        color:#7AD2B0;
        font-size:14px;
        line-height:14px;
        margin-top:15px;
      .nonactive
        color:#989898;
      .time
        color:#939393;
        font-size:10px;
        line-height:10px;
        margin-top:10px;
  .top-title
    padding:34px 30px 30px 68px;
    line-height:34px;
    box-sizing:border-box;
    width:100%;
    display:flex;
    justify-content:space-between;
    span 
      color:#85C4CE;
      font-weight:bold;
      font-size:16px;
    a
      display:inline-block;
      button(#9E98D1,100px,34px,12px,4px)
    .add
      button(#4ADEBD,100px,34px,12px,4px)
      margin-left:10px;
  .section
    border-bottom:1px solid #EFEFEF;
    padding:0 60px 60px;
    margin-bottom:20px;
    .info-wrapper
      display:flex;
      flex-wrap:wrap;
      margin-bottom:20px;
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
</style>
