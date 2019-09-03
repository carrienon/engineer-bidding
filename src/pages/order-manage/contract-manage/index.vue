<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" @changeState="changeState"></tab-bar>
      <search-box placeHolder="请输入合同编号/名称"></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :operation="operation"
        :contractState="contractState"
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
  import TableList from './table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'合同管理',
        imgurl:require('assets/image/title/ic_order manage.png'),
        contractState:0,//合同菜单
        operation:true,
        stateList:['合同审批','合同归档'],
        tableData: [
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            auditor:'2019-8-9',
            money:'2000',
            date:'2019-08-09',
            founder:'朱俊成'
          },
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            auditor:'2019-8-9',
            money:'2000',
            date:'2019-08-09',
            founder:'朱俊成'
          }
        ],
        titleData:['序号','合同编号','合同名称','审批环节','当前审批人','创建日期','合同附件','合同','合同创建']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(index){
        this.contractState = index
        if(this.contractState===0){
          this.titleData=['序号','合同编号','合同名称','审批环节','当前审批人','创建日期','合同创建']
          this.tableData=[
            {
              number: '1',
              order: '王小虎',
              name: '任务类型',
              address:'已完成',
              state:'任务事项',
              auditor:'2019-8-9',
              money:'2000',
              date:'2019-08-09',
              founder:'朱俊成'
            },
            {
              number: '1',
              order: '王小虎',
              name: '任务类型',
              address:'已完成',
              state:'任务事项',
              auditor:'2019-8-9',
              money:'2000',
              date:'2019-08-09',
              founder:'朱俊成'
            }
          ]
        }else{
          this.titleData=['序号','合同编号','合同名称','创建日期','当前审批人']
          this.tableData=[
            {
              number: '1',
              order: '王小虎',
              name: '任务类型',
              address:'已完成',
              state:'任务事项'
            },
            {
              number: '1',
              order: '王小虎',
              name: '任务类型',
              address:'已完成',
              state:'任务事项'
            }
          ]
        }
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
