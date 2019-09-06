<template>
  <div class="container" v-show="showDetail">
    <div class="content">
      <p class="title"><span>项目参与人</span><i class="iconfont icondacha" @click="closeDetail"></i></p>
      <div class="table-wrapper">
        <table-list :titleData="titleData" :tableData="tableData"></table-list>
      </div>
    </div>
  </div>
</template>

<script>
import TableList from '@/components/table-list'
export default {
  props:{
    showDetail:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      titleData:['序号','姓名','联系方式','职责','职能部门','状态'],
      tableData:[
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        },
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        },
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        },
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        },
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        },
        {
          number:'1',
          name:'朱巨成',
          contact:'13233333333',
          duty:'协调项目运作',
          department:'技术部',
          state:'正常'
        }
      ]
    }
  },
  methods:{
    closeDetail(){
      this.$emit('closeDetail')
    }
  },
  components:{
    TableList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .container
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
      width:1060px;
      padding:0 35px 45px;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      .title
        width:100%;
        line-height:66px;
        border-bottom:1px solid #EBEBEB;
        font-size:20px;
        display:flex;
        justify-content:space-between;
      .table-wrapper
        max-height:360px;
        overflow-y:scroll;
      .table-wrapper::-webkit-scrollbar
        width: 12px;
      .table-wrapper::-webkit-scrollbar-track
        background:#F2F2F5;
        border-radius: 5px;
      .table-wrapper::-webkit-scrollbar-thumb
        background:#DEDEE0;
        border-radius: 5px;
</style>
