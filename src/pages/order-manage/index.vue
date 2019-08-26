<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList"></tab-bar>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :totalData="totalData"
        :operation="operation"
      >
      </table-list>
      <bottom-pagination></bottom-pagination>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'
  import TableList from '@/components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'订单管理',
        imgurl:require('assets/logo.png'),
        stateList:['待发布订单','待审核订单','待确认投标方','待签订订单','进行中订单','已完成订单'],
        operation:true,
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
        titleData:['序号','任务名称','任务类型','任务状态','任务事项','计划完成时间'],
        totalData: [
          {
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'已完成',
            task:'任务事项',
            time:'2019-8-9',
            status:1
          },{
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'已完成',
            task:'任务事项',
            time:'2019-8-9',
            status:0
          },{
            number: '1',
            name: '王小虎',
            type: '任务类型',
            state:'状态',
            task:'任务事项',
            time:'2019-8-9',
            status:1
          }
        ]
      }
    },
    methods:{
      
    },
    components:{
      TitleBar,
      TabBar,
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
