<template>
  <div class="wrapper" v-show="showChangepro">
    <div class="content">
      <p class="title">项目变更</p>
      <el-form ref="form" :model="form" label-width="115px" label-position="left">
        <el-form-item label="变更内容">
          <el-radio v-model="form.radio" label="1">合同变更</el-radio>
          <el-radio v-model="form.radio" label="2">设计变更</el-radio>
        </el-form-item>
        <el-form-item label="变更时间">
          <el-date-picker
            v-model="form.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="变更发起人">
          <el-input v-model="form.name" placeholder="请输入变更发起人"></el-input>
        </el-form-item>
        <el-form-item v-if="form.radio==1" label="合同附件">
          <upload-file></upload-file>
        </el-form-item>
      </el-form>
      <el-form v-if="form.radio==2" ref="form" :model="form" label-width="115px" label-position="left">
        <el-form-item label="变更任务">
          <el-input v-model="form.name" placeholder="请输入变更任务"></el-input>
        </el-form-item>
        <el-form-item label="对任务范围影响">
          <el-input v-model="form.name" placeholder="请输入对任务范围影响"></el-input>
        </el-form-item>
        <el-form-item label="影响百分比">
          <el-input v-model="form.name" placeholder="请输入影响百分比">
            <i slot="suffix">%</i>
          </el-input>
        </el-form-item>
        <el-form-item label="变更内容描述">
          <el-input type="textarea" rows="3" v-model="form.desc" placeholder="请输入变更内容描述"></el-input>
        </el-form-item>
      </el-form>
      <p class="button"><a href="javascript:;" @click="cancelChange">取消</a><a href="javascript:;" @click="confirmChange">确认</a></p>
    </div>
  </div>
</template>

<script>
import UploadFile from '@/components/upload-file'
export default {
  props:{
    showChangepro:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      form:{
        name:'',
        desc:'',
        value1:'',
        radio:'1'
      }
    }
  },
  methods:{
    cancelChange(){
      this.$emit('cancelChange')
    },
    confirmChange(){
      this.$emit('confirmChange')
    }
  },
  components:{
    UploadFile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper>>>.el-input
    width:350px;
  .wrapper>>>.el-input__inner::-webkit-input-placeholder,.wrapper>>>.el-textarea__inner::-webkit-input-placeholder,.wrapper>>>.el-range-input
    font-family:'MicrosoftYaHei';
    color:#ccc;
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
      width:600px;
      padding:39px 0 45px 0;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      .title
        color:#666666;
        margin-bottom:42px;
        font-size:16px;
      .button
        a
          display:inline-block;
          button(#4ED0E4,140px,40px,14px,4px)
        a:first-child
          background:rgba(218,246,250,1);
          border:1px solid rgba(78,208,228,1);
          color:#4ED0E4;
          margin-right:80px;
</style>
