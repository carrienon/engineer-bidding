<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" :showBill="showBill" @changeState="changeState"></tab-bar>
      <search-box :showSelect="showSelect"  :showDate="showDate" placeHolder="请输入关键词/编号/名称"></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :tabState="tabState"
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
        title:'报表管理',
        imgurl:require('assets/image/title/ic_project.png'),
        userRole:1,//用户角色，1为中都方，2为平台方
        tabState:0,
        showSelect:false,
        showDate:false,
        showBill:false,
        stateList:['订单数据报表','项目报表','收款状况报表'],
        tableData:[
          {
            number:'1333333333333',
            name:'项目名称',
            address:'项目介绍',
            time:'2019-09-09',
            state:'已收全款',
            way:'云谷平台',
            gather:'已收全款',
            receivables:'4555',
            current:'已收全款',
            total:'10000.00'
          },
          {
            number:'1333333333333',
            name:'项目名称',
            address:'项目介绍',
            time:'2019-09-09',
            state:'已收全款',
            way:'云谷平台',
            gather:'已收全款',
            receivables:'4555',
            current:'已收全款',
            total:'10000.00'
          }
        ],
        titleData:['序号','项目编号','项目名称','订单所在地','订单创建时间','订单签订时间','订单金额','订单发起人','订单完成时间','订单状态']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(index){
        this.tabState = index
        if(index===1){
          this.showBill=true
        }else{
          this.showBill=false
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
