<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" @changeState="changeState"></tab-bar>
      <p class="top-title"><span>个人基本信息</span><a href="javascript:;">保存</a></p>
      <div class="container">
        <div class="left">
          <el-form :label-position="labelPosition" label-width="115px" :model="form1">
            <el-form-item label="项目名称">
              <el-input v-model="form1.name" placeholder="请输入项目名称"></el-input>
            </el-form-item>
            <el-form-item label="项目规模">
              <el-input v-model="form1.size" placeholder="请输入项目规模"></el-input>
            </el-form-item>
            <el-form-item label="项目所在地">
              <el-input v-model="form1.address" placeholder="请输入项目所在地"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-select v-model="form1.type" placeholder="请选择项目类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目分类">
              <el-select v-model="form1.category" placeholder="请选择项目分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目总体费用">
              <el-input v-model="form1.total" placeholder="请输入总体费用"></el-input>
            </el-form-item>
            <el-form-item label="项目设计费用">
              <el-input v-model="form1.design" placeholder="请输入设计费用"></el-input>
            </el-form-item>
            <el-form-item label="项目费用">
              <el-input v-model="form1.cost" placeholder="请输入项目费用"></el-input>
            </el-form-item>
            <el-form-item label="业主单位名称">
              <el-input v-model="form1.owner" placeholder="请输入业主单位名称"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :label-position="labelPosition" label-width="115px" :model="form1">
            <el-form-item label="内部推荐人">
              <el-input v-model="form1.recommend" placeholder="请输入内部推荐人"></el-input>
            </el-form-item>
            <el-form-item label="项目委托人">
              <el-select v-model="form1.agent" placeholder="请选择项目分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支付分配方式">
              <el-select v-model="form1.payway" placeholder="请选择支付分配方式">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系人姓名">
              <el-input v-model="form1.contactname" placeholder="请输入联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话">
              <el-input v-model="form1.phone" placeholder="请输入联系人电话"></el-input>
            </el-form-item>
            <el-form-item label="是否自带成果">
              <el-radio-group v-model="form1.result">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项目描述">
              <el-input type="textarea" v-model="form1.desc" :rows="5"  placeholder="请输入描述内容"></el-input>
            </el-form-item>
            <el-form-item label="上传附件">
              <upload-file></upload-file>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <p class="top-title"><span>专业信息</span></p>
      <p class="top-title"><span>个人工作经历</span><a class="add" href="javascript:;">添加工作经历</a></p>
      <p class="top-title"><span>个人标签</span></p>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'
  import UploadFile from '@/components/upload-file'
  export default {
    data () {
      return {
        title:'个人中心',
        imgurl:require('assets/logo.png'),
        labelPosition: 'left',
        stateList:['个人信息','主要经历'],
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
          desc:''
        }
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(){

      }
    },
    components:{
      TitleBar,
      TabBar,
      UploadFile
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
  .right>>>.el-button
    background:#74B7F5;
    font-family:'MicrosoftYaHei';
    color:#fff;
    border:none;
  .right>>>.el-radio
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
    .container
      display:flex;
      padding:38px 0 63px 0;
      .left
        margin-left:68px;
      .right
        margin-left:165px;
</style>
