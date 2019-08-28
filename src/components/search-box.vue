<template>
  <div class="search">
    <span class="date">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="请选择日期">
      </el-date-picker>
    </span>
    <span class="keyword">
      <el-input
        :placeholder="placeHolder"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </span>
    <span class="button">搜索</span>
  </div>
</template>

<script>
export default {
  props:{
    placeHolder:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      value1: '',
      input21:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .search>>>.el-date-editor.el-input,.search>>>.el-input__inner
    font-family:'MicrosoftYaHei'; 
  .search>>>.el-date-editor.el-input
    width:140px;
  .search
    display:flex;
    padding:28px 20px 0px;
    box-sizing:border-box;
    align-items:center;
    span 
      margin-right:14px;
    .keyword
      width:230px;
    .button
      height:40px;
      button(#4ED0E4,60px,40px,12px,4px)
</style>
