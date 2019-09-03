<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
      >
      </table-list>
      <bottom-pagination></bottom-pagination>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TableList from '@/components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'我的已办',
        imgurl:require('assets/image/title/ic_myalready.png'),
        tableData: [
          {
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'已完成',
            task:'任务事项',
            time:'2019-8-9'
          },{
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'已完成',
            task:'任务事项',
            time:'2019-8-9'
          },{
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'状态',
            task:'任务事项',
            time:'2019-8-9'
          }
        ],
        titleData:['序号','任务名称','任务类型','任务等级','任务事项','计划完成时间']
      }
    },
    methods:{
      
    },
    components:{
      TitleBar,
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
