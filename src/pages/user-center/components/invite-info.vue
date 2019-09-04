<template>
  <div class="wrapper">
    <p class="top-title"><span>个人基本信息</span><a href="javascript:;">保存</a></p>
    <p class="avatar"><change-avatar :avataUrl="imgUrl"></change-avatar></p>
    <div class="container">
      <div class="left">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="用户名">
            <el-input v-model="form1.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input v-model="form1.size" placeholder="请输入用户ID"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form1.address" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="信用评价">
            <el-input v-model="form1.address" placeholder="请输入信用评价"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="form1.address" placeholder="请输入专业"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="认证职称">
            <el-input v-model="form1.recommend" placeholder="请输入认证职称"></el-input>
          </el-form-item>
          <el-form-item label="擅长领域">
            <el-input v-model="form1.recommend" placeholder="请输入擅长领域"></el-input>
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
    <p class="top-title"><span>企业基本信息</span><a href="javascript:;">保存</a></p>
    <div class="container">
      <div class="left">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="个人真实姓名">
            <el-input v-model="form1.name" placeholder="请输入个人真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码">
            <el-input v-model="form1.size" placeholder="请输入身份证号码"></el-input>
          </el-form-item>
          <el-form-item label="身份证照片">
            <upload-file></upload-file>
            <a href="javascript:;" class="check-button">查看</a>
          </el-form-item>
          <el-form-item label="企业名称">
            <el-input v-model="form1.address" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业电话">
            <el-input v-model="form1.address" placeholder="请输入企业电话"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="企业营业执照注册号">
            <el-input v-model="form1.recommend" placeholder="请输入企业营业执照注册号"></el-input>
          </el-form-item>
          <el-form-item label="营业执照">
            <upload-file></upload-file>
            <a href="javascript:;" class="check-button">查看</a>
          </el-form-item>
          <el-form-item label="所在地区">
            <el-input v-model="form1.recommend" placeholder="请输入所在地区"></el-input>
          </el-form-item>
          <el-form-item label="取得证书时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form1.recommend" placeholder="请输入地址"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
    margin-left:320px;
    margin-bottom:38px;
  .check-button
    color:#4CB4F7;
  .container
    display:flex;
    padding-bottom:38px;
    border-bottom:1px solid #EFEFEF;
    .left
      margin-left:68px;
    .right
      margin-left:165px;
</style>
