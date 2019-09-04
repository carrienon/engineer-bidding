<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="添加项目经验">
        <a href="javascript:;" class="save" slot="rightButton">保存</a>
      </top-title>
      <div class="container">
        <div class="left">
          <el-form :label-position="labelPosition" label-width="115px" :model="form1">
            <el-form-item label="项目所在地">
              <el-input v-model="form1.name" placeholder="请输入项目所在地"></el-input>
            </el-form-item>
            <el-form-item label="单位名称">
              <el-input v-model="form1.size" placeholder="请输入单位名称"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-input v-model="form1.address" placeholder="请输入项目类型"></el-input>
            </el-form-item>
            <el-form-item label="设计内容">
              <el-input v-model="form1.address" placeholder="请输入设计内容"></el-input>
            </el-form-item>
            <el-form-item label="设计费用">
              <el-input v-model="form1.total" placeholder="请输入设计费用"></el-input>
            </el-form-item>
            <el-form-item label="总造价">
              <el-input v-model="form1.design" placeholder="请输入总造价"></el-input>
            </el-form-item>
            <el-form-item label="项目规模">
              <el-input v-model="form1.cost" placeholder="请输入项目规模"></el-input>
            </el-form-item>
            <el-form-item label="设计周期">
              <el-input v-model="form1.owner" placeholder="请输入设计周期"></el-input>
            </el-form-item>
            <el-form-item label="担任角色">
              <el-input v-model="form1.owner" placeholder="请输入担任角色"></el-input>
            </el-form-item>
            <el-form-item label="项目参与状况">
              <el-input v-model="form1.owner" placeholder="请输入项目参与状况"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form :label-position="labelPosition" label-width="115px" :model="form1">
            <el-form-item label="项目描述">
              <el-input type="textarea" v-model="form1.desc" :rows="5"  placeholder="请输入描述内容"></el-input>
            </el-form-item>
            <el-form-item label="工作标签">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item label="获得奖项">
              <el-input v-model="form1.recommend" placeholder="请输入获得奖项"></el-input>
            </el-form-item>
            <el-form-item label="获得日期">
              <el-date-picker
                v-model="form1.value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="获得证书上传">
              <upload-file></upload-file>
            </el-form-item>
            <el-form-item label="项目图片上传">
              <upload-file></upload-file>
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
        title:'个人中心',
        imgurl:require('assets/image/title/ic_schedule.png'),
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
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
       handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
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
    width:300px;
    flex-wrap:wrap;
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
        .el-tag
          margin-right: 10px;
          height:40px;
          line-height:40px;
          margin-bottom:10px;
        .button-new-tag
          margin-right: 10px;
          height: 40px;
          line-height: 40px;
          padding-top: 0;
          padding-bottom: 0;
        .input-new-tag
          width: 90px;
          margin-right: 10px;
          margin-bottom:10px;
          vertical-align: bottom;
</style>
