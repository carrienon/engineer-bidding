<template>
  <div class="wrapper">
    <p class="top-title"><span>个人基本信息</span><a href="javascript:;">保存</a></p>
    <p class="avatar"><change-avatar :avataUrl="imgUrl"></change-avatar></p>
    <div class="container">
      <el-form :label-position="labelPosition" label-width="150px" :model="form1">
        <el-form-item label="用户名">
          <el-input v-model="form1.recommend" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input v-model="form1.recommend" placeholder="请输入用户ID"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱">
          <el-input v-model="form1.recommend" placeholder="请输入用户邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form1.recommend" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input v-model="form1.recommend" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="所在地">
          <el-input v-model="form1.recommend" placeholder="请输入所在地"></el-input>
        </el-form-item>
        <el-form-item label="个人身份证照片">
          <upload-file></upload-file>
          <a href="javascript:;" class="check-button">查看</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import UploadFile from '@/components/upload-file'
  import ChangeAvatar from './change-avatar'
  export default {
    data () {
      return {
        imgUrl:require('assets/logo.png'),
        labelPosition: 'left',
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
        }
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      UploadFile,
      ChangeAvatar
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
    .avatar
      text-align:center;
    .check-button
      color:#4CB4F7;
    .container
      margin:0 auto;
      width:500px;
      padding:38px 0;
</style>
