<template>
  <div class="wrapper" v-show="showDate">
    <div class="content">
      <p class="title">{{title}}</p>
      <el-form ref="form" :model="form" label-width="115px" label-position="left">
        <el-form-item label="选择时间">
          <el-date-picker
            v-model="form.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
         <el-form-item label="计划内容" v-show="showContent">
          <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <p class="button"><a href="javascript:;" @click="cancelDate">取消</a><a href="javascript:;" @click="confirmDate">确认</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showDate:{
      type:Boolean,
      default:false
    },
    title:{
      type:String,
      default:''
    },
    showContent:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      form:{
        value1:'',
        desc:''
      }
    }
  },
  methods:{
    cancelDate(){
      this.$emit('cancelDate')
    },
    confirmDate(){
      this.$emit('confirmDate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper>>>.el-input
    width:277px;
  .wrapper>>>.el-input__inner::-webkit-input-placeholder,.wrapper>>>.el-textarea__inner::-webkit-input-placeholder
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
      width:488px;
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
