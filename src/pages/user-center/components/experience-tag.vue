<template>
  <div class="wrapper">
    <p class="top-title"><span>个人工作经历</span><a class="add" href="javascript:;">添加工作经历</a></p>
    <div class="container work-wrapper">
      <div class="work-item" v-for="(item,index) in workData" :key="index">
        <div class="work-left">
          <span>2017.6.6</span><span>至</span><span>2017.6.6</span>
          <em v-if="index!=workData.length-1"></em>
        </div>
        <div class="work-right">
          <div>
            <p><span>工作所在地</span><span>{{item.address}}</span></p>
            <p><span>具体地区</span><span>{{item.detail}}</span></p>
            <p><span>工作单位名称</span><span>{{item.company}}</span></p>
            <p><span>工作时间</span><span>{{item.time}}</span></p>
          </div>
          <div>
            <p><span>职位</span><span>{{item.position}}</span></p>
            <p><span>部门</span><span>{{item.department}}</span></p>
            <p><span>部门描述</span><span>{{item.description}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <p class="top-title"><span>个人标签</span><a class="edit" href="javascript:;">编辑</a></p>
    <div class="container">
      <div class="tag-item">
        <div class="tag-left">职业技能</div>
        <div class="tag-right">
          <span v-for="(item,index) in skillTag" :key="index">{{item}}<i class="iconfont icondelete-s"></i></span>
          <span class="add-tag"><i class="iconfont iconuntitled44"></i></span>
        </div>
      </div>
      <div class="tag-item">
        <div class="tag-left">工作技能</div>
        <div class="tag-right">
          <span v-for="(item,index) in workTag" :key="index">{{item}}<i class="iconfont icondelete-s"></i></span>
          <span class="add-tag"><i class="iconfont iconuntitled44"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title:'个人中心',
        imgurl:require('assets/logo.png'),
        labelPosition: 'left',
        stateList:['个人信息','主要经历'],
        workData:[
          {
            address:'广东深圳',
            detail:'车公庙劲松大厦',
            company:'深圳源动信息技术有限公司',
            time:'2018.06-2019.09',
            position:'职位名称',
            department:'部门',
            description:'具体内容'
          },
          {
            address:'广东深圳',
            detail:'车公庙劲松大厦',
            company:'深圳源动信息技术有限公司',
            time:'2018.06-2019.09',
            position:'职位名称',
            department:'部门',
            description:'具体内容'
          }
        ],
        skillTag:['标签一','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2'],
        workTag:['标签一','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~assets/styles/mixins"
  .content>>>.el-form--label-left .el-form-item__label
    color:#333;
  .content>>>.el-input__inner,.content>>>.el-textarea__inner
    width:300px;
    border:none;
    background:#F7F6F7;
    font-family:'MicrosoftYaHei';
  .content>>>.el-input__inner::placeholder,.content>>>.el-textarea__inner::placeholder
    color:#999999;
    font-family:'MicrosoftYaHei';
  .content>>>.el-form-item__content
    display:flex;
  .content>>>.el-button
    background:#74B7F5;
    font-family:'MicrosoftYaHei';
    color:#fff;
    border:none;
  .content>>>.el-radio
    line-height:40px;
  .content
    boxstyle()
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
        button(#9E98D1,100px,34px,12px,4px)
      .add
        button(#4ADEBD,100px,34px,12px,4px)
      .edit
        button(#4ED0E4,100px,34px,12px,4px)
    .container
      display:flex;
      padding-bottom:38px;
      border-bottom:1px solid #EFEFEF;
      .left
        margin-left:68px;
      .right
        margin-left:165px;
    .work-wrapper
      flex-direction:column;
      margin-left:68px;
      padding-bottom:0;
      .work-item
        display:flex;
        margin-bottom:76px;
        .work-left
          position:relative;
          margin-right:49px;
          width:116px;
          height:116px;
          border-radius:50%;
          border:1px dashed #61D3E4;
          font-size:14px;
          color:#3DD1CC;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          align-items:center;
          padding:32px 0;
          box-sizing:border-box;
          font-weight:bold;
          em
            left:56px;
            top:118px;
            position:absolute;
            width:1px;
            height:89px;
            background:rgba(97,211,228,1);
        .work-right
          display:flex;
          div
            p
              margin-bottom:26px;
              margin-right:50px;
              font-size:14px;
              span
                display:inline-block;
              span:first-child
                color:#999;
                width:133px;
              span:last-child
                color:#666;
                width:300px;
            p:last-child
              margin-bottom:0;
    .tag-item
      margin-left:68px;
      display:flex;
      font-size:14px;
      color:#999;
      .tag-left
        width:120px;
      .tag-right
        span
          color:#fff;
          display:inline-block;
          margin-right:18px;
          padding:10px 20px;
          background:#94D2DB;
          border-radius:4px;
          margin-bottom:12px;
          position:relative;
          i
            position:absolute;
            right:-8px;
            top:-8px;
            color:#F96079;
            font-size:16px;
            cursor:pointer;
        .add-tag
          width:108px;
          line-height:31px;
          height:31px;
          padding:0;
          text-align:center;
          border:1px dashed #BFBFBF;
          background:#F6F7FB;
          cirsor:pointer;
          i
            position:static;
            color:#C6C6C6;
            font-size:15px;
</style>
