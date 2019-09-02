<template>
  <div class="search">
    <div v-if="!showSelect" class="left">
      <span class="date" v-if="showDate">
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
    <div v-else>
      <el-select v-model="value" placeholder="请选择变更类型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    placeHolder:{
      type:String,
      default:''
    },
    showSelect:{
      type:Boolean,
      default:false
    },
    showDate:{
      type:Boolean,
      default:true
    }
  },
  data () {
    return {
      value1: '',
      input21:'',
      options: [{
          value: '选项1',
          label: '项目变更'
        }, {
          value: '选项2',
          label: '设计变更'
        }],
      value: ''
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
    .left
      display:flex;
      span 
        margin-right:14px;
      .keyword
        width:230px;
      .button
        height:40px;
        button(#4ED0E4,60px,40px,12px,4px)
</style>
