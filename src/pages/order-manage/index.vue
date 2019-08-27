<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" @changeState="changeState" @createOrder="createOrder"></tab-bar>
      <search-box></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :operation="operation"
        :userRole="userRole"
        :orderState="orderState"
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
  import TableList from '@/components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'订单管理',
        imgurl:require('assets/logo.png'),
        userRole:2,//用户角色，1为中都方，2为平台方
        orderState:0,//订单状态
        operation:true,
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
        titleData:[]
      }
    },
    computed:{
      //中都方和平台方的订单状态
      stateList(){
        let stateList = []
        if(this.userRole===1){
          return stateList=['待发布订单','待审核订单','待确认投标方','待签订订单','进行中订单','已完成订单']
        }else{
          return stateList=['待发布订单','待确认订单','参与投标订单','待签订订单','进行中订单','已完成订单','待评价订单']
        }
      }
    },
    mounted(){
      if(this.userRole===1){
        this.titleData=['序号','订单编号','订单名称','订单所在地','订单状态','当前审核人','订单金额（人民币）','创建日期','订单创建人']
      }else{
        this.titleData=['序号','订单编号','订单名称','订单所在地','订单状态','订单金额（人民币）','发布日期']
        this.tableData=[
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            money:'2000',
            date:'2019-08-09'
          },
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            money:'2000',
            date:'2019-08-09'
          }
        ]
      }
    },
    methods:{
      changeState(index){
        this.orderState = index
        if(this.userRole===1&&index===4){
          this.operation = false
          this.titleData=['序号','订单编号','订单名称','订单所在地','订单状态','技术参与人','订单金额（人民币）','订单签订日期','订单创建人']
        }else if(this.userRole===1&&index===5){
          this.operation = false
          this.titleData=['序号','订单编号','订单名称','订单所在地','订单状态','技术参与人','订单金额（人民币）','订单完成时间','评价']
        }else if(this.userRole===1){
          this.operation = true
          this.titleData=['序号','订单编号','订单名称','订单所在地','订单状态','当前审核人','订单金额（人民币）','创建日期','订单创建人']
        }else if(this.userRole===2&&(index===4||index===5)){
          this.operation = false
        }else if(this.userRole===2){
          this.operation = true
        }
      },
      createOrder(){
        this.$router.push('./create-order')
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
