<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="创建合同">
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
            <el-form-item label="项目地点">
              <el-input v-model="form1.address" placeholder="请输入项目地点"></el-input>
            </el-form-item>
            <el-form-item label="合同费用">
              <el-input v-model="form1.cost" placeholder="请输入合同费用"></el-input>
            </el-form-item>
            <el-form-item label="业主单位名称">
              <el-input v-model="form1.company" placeholder="请输入业主单位名称"></el-input>
            </el-form-item>
            <el-form-item label="合同模板选择">
              <el-select v-model="form1.model" placeholder="请选择合同模板">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="上传附件">
              <upload-file></upload-file>
            </el-form-item>
            <el-form-item label="标签选择">
              <ul class="tag">
                <li 
                  :class="activeTag===index?'active':''" 
                  v-for="(item,index) in tagData" 
                  :key="index"
                  @click="chooseTag(index)"
                >{{item}}</li>
              </ul>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :label-position="labelPosition" label-width="115px" :model="form1">
            <el-form-item label="合同签订日期">
               <el-date-picker type="date" placeholder="请选择合同签订日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="项目完成日期">
               <el-date-picker type="date" placeholder="请选择项目完成日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form1.desc" :rows="5"  placeholder="请输入备注"></el-input>
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
          address:'',
          cost:'',
          company:'',
          type:'',
          desc:'',
          date1:'',
          date2:''
        },
        activeTag:0,
        tagData:['标签一','标签二','标签一','标签一','标签一','标签一','标签一','标签一',]
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      chooseTag(index){
        this.activeTag = index
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
  .content
    boxstyle()
    .container
      display:flex;
      padding:38px 0 63px 0;
      .left
        margin-left:68px;
      .right
        margin-left:165px;
      .tag
        width:300px;
        word-wrap: break-word;
        li
          display:inline-block;
          width:67px;
          line-height:28px;
          background:rgba(248,250,251,1);
          border:1px solid rgba(229,229,229,1);
          border-radius:4px;
          color:#8A8A8A;
          font-size:12px;
          text-align:center;
          margin-right:10px;
          cursor:pointer;
        .active
          color:#5AC5F1;
          border:1px solid #5AC5F1;
</style>
