<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar 
        :stateList="stateList" 
        buttonName="申请发票" 
        :showButton="showButton" 
        @changeState="changeState" 
        @createNew="createBill"
      ></tab-bar>
      <search-box :showSelect="showSelect"  :showDate="showDate" placeHolder="请输入关键词/编号/名称"></search-box>
      <p class="total" v-show="tabState===3">项目开票金额总计：8888880元</p>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :tabState="tabState"
        @checkDetail="checkDetail"
        @collection="collection"
        @modifyBill="modifyBill"
      >
      </table-list>
      <bottom-pagination></bottom-pagination>
    </div>
    <!-- 查看明细 -->
    <check-detail :showDetail="showDetail" @closeDetail="checkDetail"></check-detail>
    <!-- 收款 -->
    <collection :showCollection="showCollection" @closeCollection="collection"></collection>
    <!-- 查看修改 -->
    <modify :showModify="showModify" @closeModify="modifyBill"></modify>
    <!-- 申请发票 -->
    <choose :showChoose="showChoose" @cancelChoose="cancelChoose" @confirmChoose="confirmChoose"></choose>
    <bill-info :showBillinfo="showBillinfo" @closeCreate="closeCreate"></bill-info>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'
  import SearchBox from '@/components/search-box'
  import TableList from './components/table-list'
  import BottomPagination from '@/components/bottom-pagination'
  import CheckDetail from './components/check-detail'
  import Collection from './components/collection'
  import Modify from './components/modify'
  import Choose from './components/choose'
  import BillInfo from './components/bill-info'

  export default {
    data () {
      return {
        title:'财务管理',
        imgurl:require('assets/image/title/ic_order manage.png'),
        userRole:1,//用户角色，1为中都方，2为平台方
        tabState:0,
        showSelect:false,
        showDate:false,
        showButton:false,
        showDetail:false,//查看明细
        showCollection:false,//收款
        showModify:false,//查看修改
        showChoose:false,//申请发票-查找项目
        showBillinfo:false,//申请发票-发票信息
        stateList:['收支管理','中都发票管理','平台发票管理','我的金融'],
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
        titleData:['项目编号','项目名称','项目所在地','项目签订时间','项目当前状态','项目发布方式','项目收付款状态','应收款项','当前收款环节','项目收款合计']
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
          this.showButton=true
        }else{
          this.showButton=false
        }
      },
      //查看明细
      checkDetail(){
        this.showDetail = !this.showDetail
      },
      //收款
      collection(){
        this.showCollection = !this.showCollection
      },
      //查看修改
      modifyBill(){
        this.showModify = !this.showModify
      },
      //申请发票
      createBill(){
        this.showChoose = true
      },
      //选择项目
      cancelChoose(){
        this.showChoose = false
      },
      confirmChoose(){
        this.showChoose = false
        this.showBillinfo = true
      },
      //填写发票信息
      closeCreate(){
        this.showBillinfo = false
      }
    },
    components:{
      TitleBar,
      TabBar,
      SearchBox,
      TableList,
      BottomPagination,
      CheckDetail,
      Collection,
      Modify,
      Choose,
      BillInfo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .content
    boxstyle()
    .total
      color:#85C4CE;
      margin:20px;
      font-size:18px;
      font-weight:bold;
</style>
