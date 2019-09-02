<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" @changeState="changeState"></tab-bar>
      <search-box :showSelect="showSelect"  placeHolder="请输入关键词/编号/名称"></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :projectSate="projectSate"
      >
      </table-list>
      <bottom-pagination></bottom-pagination>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'
  import SearchBox from '@/components/search-box'
  import TableList from './components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'文档管理',
        imgurl:require('assets/logo.png'),
        userRole:1,//用户角色，1为中都方，2为平台方
        projectSate:0,
        showSelect:false,
        stateList:['合同管理','图纸管理'],
        tableData:[
          {
            number:'1',
            name:'项目名称',
            content:'项目介绍'
          },
          {
            number:'1',
            name:'项目名称',
            content:'项目介绍'
          },
          {
            number:'1',
            name:'项目名称',
            content:'项目介绍'
          }
        ],
        titleData:['序号','项目名称','项目介绍']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(index){
        
      }
    },
    components:{
      TitleBar,
      TabBar,
      SearchBox,
      TableList,
      BottomPagination
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .content
    boxstyle()
</style>
