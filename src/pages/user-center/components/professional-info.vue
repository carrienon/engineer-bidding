<template>
  <div class="wrapper">
    <p class="top-title"><span>专业信息</span><a href="javascript:;">保存</a></p>
    <div class="container">
      <div class="left">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="个人简介">
            <el-input v-model="form1.name" placeholder="请输入个人简介"></el-input>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="form1.name" placeholder="请输入个性签名"></el-input>
          </el-form-item>
          <el-form-item label="职业资格证名称">
            <el-input v-model="form1.size" placeholder="请输入职业资格证名称"></el-input>
          </el-form-item>
          <el-form-item label="专业技术职称名称">
            <el-input v-model="form1.address" placeholder="请输入专业技术职称名称"></el-input>
          </el-form-item>
          <el-form-item label="专业技术职称等级">
            <el-input v-model="form1.address" placeholder="请输入专业技术职称等级"></el-input>
          </el-form-item>
          <el-form-item label="资格证书编号">
            <el-input v-model="form1.address" placeholder="请输入资格证书编号"></el-input>
          </el-form-item>
          <el-form-item label="所属专业">
            <el-input v-model="form1.address" placeholder="请输入专业"></el-input>
          </el-form-item>
          <el-form-item label="取得资质证书时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="专业技术职称">
            <el-input v-model="form1.total" placeholder="请输入专业技术职称"></el-input>
          </el-form-item>
          <el-form-item label="专业技术职称等级">
            <el-input v-model="form1.address" placeholder="请输入专业技术职称等级"></el-input>
          </el-form-item>
          <el-form-item label="注册执行资格">
            <upload-file></upload-file>
            <a href="javascript:;" class="check-button">查看</a>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="职业资格证书">
            <upload-file></upload-file>
            <a href="javascript:;" class="check-button">查看</a>
          </el-form-item>
          <el-form-item label="资格证书编号">
            <el-input v-model="form1.recommend" placeholder="请输入资格证书编号"></el-input>
          </el-form-item>
          <el-form-item label="取得证书时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="证书到期时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="首次注册时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="主要论文著作名称">
            <el-input v-model="form1.recommend" placeholder="请输入主要论文著作名称"></el-input>
          </el-form-item>
          <el-form-item label="论文著作类型">
            <el-input v-model="form1.contactname" placeholder="请输入论文著作类型"></el-input>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="刊物名称">
            <el-input v-model="form1.phone" placeholder="请输入刊物名称"></el-input>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="form1.phone" placeholder="请输入出版社"></el-input>
          </el-form-item>
          <el-form-item label="注册执行资格">
            <el-input v-model="form1.phone" placeholder="请输入注册执行资格"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import UploadFile from '@/components/upload-file'
  export default {
    data () {
      return {
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
      UploadFile
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
