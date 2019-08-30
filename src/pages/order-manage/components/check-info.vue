<template>
  <div class="wrapper" v-show="showInfo">
    <div class="content">
      <p class="title">信息展示<i class="iconfont icondacha" @click="closeWindow"></i></p>
      <p class="info-title">入选任务</p>
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>项目名称</span><span>项目名称</span></p>
          <p class="info-item"><span>项目金额</span><span>10000.00元</span></p>
          <p class="info-item"><span>项目状态</span><span>待签定湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>项目所在地</span><span>湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉</span></p>
          <p class="info-item"><span>项目入选时间</span><span>2019-6-23</span></p>
          <p class="info-item"><span>项目完成时间</span><span>2019-12-12</span></p>
        </div>
      </div>
      <p class="info-title">基本信息</p>
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>甲方名称</span><span>项目名称</span></p>
          <p class="info-item"><span>累计成交金额</span><span>88888888.00元</span></p>
          <p class="info-item"><span>负责人邮箱</span><span>2019-6-23</span></p>
          <p class="info-item"><span>负责人信息介绍</span><span>负责人信息介绍负责人信息介绍负责人信息介绍负责人信息介绍</span></p>
          <p class="info-item"><span>经营资质</span><span class="check-btn"><a href="javascript:;">查看</a></span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>擅长专长</span><span>建筑设计</span></p>
          <p class="info-item"><span>所在地区</span><span>2019-6-23</span></p>
          <p class="info-item"><span>负责人手机</span><span>2019-12-12</span></p>
          <p class="info-item">
            <span>好评率</span>
            <span class="rate"><el-rate
              v-model="value"
              disabled
              text-color="#4ED0E4"
              score-template="{value}">
            </el-rate>
            </span></p>
        </div>
      </div>
      <p class="info-title">项目经验</p>
      <div class="info-wrapper">
        <div class="info-left">
          <p class="info-item"><span>项目名称</span><span>项目名称</span></p>
          <p class="info-item"><span>项目分类</span><span>艺术工程</span></p>
          <p class="info-item"><span>项目时间</span><span>12</span></p>
          <p class="info-item"><span>项目角色</span><span>12</span></p>
          <p class="info-item"><span>建成时间</span><span>12</span></p>
          <p class="info-item"><span>获奖名称信息</span><span>12</span></p>
        </div>
        <div class="info-right">
          <p class="info-item"><span>项目所在地</span><span>湖北武汉湖北武汉湖北武汉湖北武汉湖北武汉湖</span></p>
          <p class="info-item"><span>项目规模</span><span>2019-6-23</span></p>
          <p class="info-item"><span>主要方案设计师</span><span>2019-12-12</span></p>
          <p class="info-item"><span>设计时间</span><span>2019-12-12</span></p>
          <p class="info-item"><span>获奖类型</span><span>2019-12-12</span></p>
          <p class="info-item"><span>项目简介</span><span>2019-12-12</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showInfo:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      value:5
    }
  },
  methods:{
    closeWindow(){
      this.$emit('closeWindow')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    background:rgba(0,0,0,0.3);
    z-index:11;
    .content
      position:relative;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:1000px;
      max-height:700px;
      overflow-y:scroll;
      padding:40px;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      .title
        color:#666666;
        text-align:center;
        font-size:16px;
        font-weight:bold;
        margin-bottom:40px;
        i 
          position:absolute;
          right:30px;
          top:30px;
          color:#bbb;
          font-size:20px;
          cursor:pointer;
      .info-title
        color:#85C4CE;
        font-weight:bold;
        margin:10px 0;
        font-size:16px;
      .info-wrapper
        display:flex;
        border-bottom:1px solid #EFEFEF;
        padding:20px 0;
        margin-bottom:20px;
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
        padding-bottom:0;
    .content::-webkit-scrollbar
      display:none;
</style>
