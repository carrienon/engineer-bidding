<template>
  <div class="wrapper">
    <p class="top-title"><span>个人基本信息</span><a href="javascript:;">保存</a></p>
    <p class="avatar"><change-avatar :avataUrl="imgUrl"></change-avatar></p>
    <div class="container">
      <div class="left">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="姓名">
            <el-input v-model="form1.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form1.result">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="员工编号">
            <el-input v-model="form1.size" placeholder="请输入员工编号"></el-input>
          </el-form-item>
          <el-form-item label="固定电话">
            <el-input v-model="form1.address" placeholder="请输入固定电话"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址">
            <el-input v-model="form1.address" placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="form1.address" placeholder="请输入身份证号"></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-input v-model="form1.total" placeholder="请输入民族"></el-input>
          </el-form-item>
          <el-form-item label="所属分公司">
            <el-input v-model="form1.design" placeholder="请输入所属分公司"></el-input>
          </el-form-item>
          <el-form-item label="所在部门">
            <el-input v-model="form1.cost" placeholder="请输入所在部门"></el-input>
          </el-form-item>
          <el-form-item label="职务">
            <el-input v-model="form1.owner" placeholder="请输入职务"></el-input>
          </el-form-item>
          <el-form-item label="是否应届毕业生">
            <el-radio-group v-model="form1.result">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="参加工作时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form :label-position="labelPosition" label-width="150px" :model="form1">
          <el-form-item label="入职时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="专业属性">
            <el-input v-model="form1.recommend" placeholder="请输入专业属性"></el-input>
          </el-form-item>
          <el-form-item label="行业属性">
            <el-input v-model="form1.recommend" placeholder="请输入行业属性"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input v-model="form1.contactname" placeholder="请输入学历"></el-input>
          </el-form-item>
          <el-form-item label="毕业学校">
            <el-input v-model="form1.phone" placeholder="请输入毕业学校"></el-input>
          </el-form-item>
          <el-form-item label="证书编号">
            <el-input v-model="form1.phone" placeholder="请输入证书编号"></el-input>
          </el-form-item>
          <el-form-item label="毕业时间">
            <el-date-picker
              v-model="form1.value1"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="所学专业">
            <el-input v-model="form1.phone" placeholder="请输入所学专业"></el-input>
          </el-form-item>
          <el-form-item label="学习形式">
            <el-input v-model="form1.phone" placeholder="请输入学习形式"></el-input>
          </el-form-item>
          <el-form-item label="学位">
            <el-input v-model="form1.phone" placeholder="请输入学位"></el-input>
          </el-form-item>
          <el-form-item label="学历证书附件">
            <upload-file></upload-file>
            <a href="javascript:;" class="check-button">查看</a>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="form1.phone" placeholder="请输入状态"></el-input>
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
  .container
    display:flex;
    padding-bottom:38px;
    border-bottom:1px solid #EFEFEF;
    .left
      margin-left:68px;
    .right
      margin-left:165px;
</style>
