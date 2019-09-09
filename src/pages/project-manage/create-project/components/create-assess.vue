<template>
  <div class="wrapper" v-show="showAddassess">
    <div class="content">
      <p class="title">新增评估</p>
      <el-form ref="form" :model="form" label-width="115px" label-position="left">
        <el-form-item label="起始时间">
          <el-date-picker
            v-model="form.value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="form.name" placeholder="请输入负责人"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.name" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item label="完成度">
          <el-input v-model="form.name" placeholder="请输入完成度">
          <i
            slot="suffix">
          %</i></el-input>
        </el-form-item>
        <el-form-item label="评估备注">
          <el-input type="textarea" rows="3" v-model="form.desc" placeholder="请输入部门描述"></el-input>
        </el-form-item>
      </el-form>
      <p class="button"><a href="javascript:;" @click="cancelAdd">取消</a><a href="javascript:;" @click="confirmAdd">确认</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showAddassess:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      form:{
        name:'',
        desc:'',
        value1:''
      }
    }
  },
  methods:{
    cancelAdd(){
      this.$emit('cancelAdd')
    },
    confirmAdd(){
      this.$emit('confirmAdd')
    }
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
