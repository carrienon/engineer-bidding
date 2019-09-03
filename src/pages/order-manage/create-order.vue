<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="创建订单">
        <div slot="rightButton" class="right">
          <a href="javascript:;" class="save">存草稿</a>
          <a href="javascript:;" class="reset">重置</a>
          <a href="javascript:;" class="submit">提交</a>
        </div>
      </top-title>
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
    </div>
    <div class="content content-two">
      <top-title titleName="分解任务">
        <div slot="rightButton" class="right">
          <a href="javascript:;" class="reset" @click="addDomain">添加任务</a>
        </div>
      </top-title>
      <div class="container">
        <div class="left">
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="115px" class="demo-dynamic">
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'任务名称' + (index+1)"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
            >
              <el-input v-model="domain.value" placeholder="请输入任务名称"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="115px" class="demo-dynamic">
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'任务占比' + (index+1)"
              :key="domain.key"
              :prop="'domains.' + index + '.percent'"
            >
              <el-input v-model="domain.percent" placeholder="请输入任务占比"></el-input>
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import UploadFile from '@/components/upload-file'
  import TopTitle from './components/top-title'
  export default {
    data () {
      return {
        title:'订单管理',
        imgurl:require('assets/image/title/ic_order manage.png'),
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
          desc:''
        },
        dynamicValidateForm: {
          domains: [{
            value: '',
            percent:''
          }]
        }
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          percent:'',
          key: Date.now()
        })
      }
    },
    components:{
      TitleBar,
      UploadFile,
      TopTitle
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
    .container
      display:flex;
      padding:38px 0 63px 0;
      .left
        margin-left:68px;
      .right
        margin-left:165px;
  .content-two
    margin-top:8px;
    .container
      .right
        width:600px;
</style>
