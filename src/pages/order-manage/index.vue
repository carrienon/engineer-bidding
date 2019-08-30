<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :showButton="showButton" :stateList="stateList" @changeState="changeState" @createOrder="createOrder"></tab-bar>
      <search-box  placeHolder="请输入订单编号/名称"></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :operation="operation"
        :userRole="userRole"
        :orderState="orderState"
        @deleteTask="deleteTask"
        @cancelTask="cancelTask"
        @refreshOffer="refreshOffer"
        @chooseBidding="chooseBidding"
        @checkInfo="closeWindow"
        @judgeOrder="judgeOrder"
        @urgeDo="closeTip"
        @transfer="transfer"
      >
      </table-list>
      <bottom-pagination></bottom-pagination>
    </div>
    <!-- 删除提示框 -->
    <message-box 
      :showBox="showBox" 
      :tipInfo="tipInfo"
      @cancelDelete="cancelDelete"
      @confirmDelete="confirmDelete"
    ></message-box>
    <!-- 重新报价 -->
    <refresh-offer 
      :showOffer="showOffer"
      @cancelOffer="cancelOffer"
      @confirmOffer="confirmOffer"
    ></refresh-offer>
    <!-- 转申 -->
    <transfer 
      :showTransfer="showTransfer"
      @cancelTransfer="cancelTransfer"
      @confirmTransfer="confirmTransfer"
    ></transfer>
    <!-- 选择中标方 -->
    <choose-bidding 
      :showChoose="showChoose"
      @cancelChoose="cancelChoose"
      @confirmChoose="confirmChoose"
    ></choose-bidding>
    <!-- 查看甲方乙方信息 -->
    <check-info :showInfo="showInfo" @closeWindow="closeWindow"></check-info>
    <!-- 评价 -->
    <Judge :showJudge="showJudge" @cancelJudge="cancelJudge" @confirmJudge="cancelJudge"></Judge>
    <!-- 催办成功 -->
    <tip-box 
      :showTip="showTip" 
      tipInfo="催办成功！"
      @closeTip="closeTip"
    ></tip-box>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'
  import SearchBox from '@/components/search-box'
  import TableList from './components/table-list'
  import BottomPagination from '@/components/bottom-pagination'
  import MessageBox from '@/components/message-box'
  import TipBox from '@/components/tip-box'
  import RefreshOffer from './components/refresh-offer'
  import ChooseBidding from './components/choose-bidding'
  import CheckInfo from './components/check-info'
  import Judge from './components/judge'
  import Transfer from './components/transfer'

  export default {
    data () {
      return {
        title:'订单管理',
        imgurl:require('assets/logo.png'),
        showButton:true,
        userRole:1,//用户角色，1为中都方，2为平台方
        orderState:0,//订单状态
        tipInfo:'',
        showBox:false,//删除提示信息框
        showOffer:false,//重新报价
        showChoose:false,//选择中标方
        showInfo:false,//查看甲方乙方信息
        showJudge:false,//评价
        showTip:false,//催办成功
        showTransfer:false,//转申
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
      },
      // 删除订单
      deleteTask(){
        this.tipInfo = '确认删除此订单？'
        this.showBox = true
      },
      confirmDelete(){
        this.showBox = false
      },
      cancelDelete(){
        this.showBox = false
      },
      // 取消投标
      cancelTask(){
        this.tipInfo = '确认撤销投标？'
        this.showBox = true
      },
      // 重新报价
      refreshOffer(){
        this.showOffer = true
      },
      cancelOffer(){
        this.showOffer = false
      },
      confirmOffer(){
        this.showOffer = false
      },
      // 选择中标方
      chooseBidding(){
        this.showChoose = true
      },
      cancelChoose(){
        this.showChoose = false
      },
      confirmChoose(){
        this.showChoose = false
      },
      //查看甲方乙方信息
      closeWindow(){
        this.showInfo = !this.showInfo
      },
      // 评价
      judgeOrder(){
        this.showJudge = true
      },
      cancelJudge(){
        this.showJudge = false
      },
      closeTip(){
        this.showTip = !this.showTip
      },
      //转申
      transfer(){
        this.showTransfer = !this.showTransfer
      },
      cancelTransfer(){
        this.showTransfer = !this.showTransfer
      },
      confirmTransfer(){
        this.showTransfer = !this.showTransfer
      }
    },
    components:{
      TitleBar,
      TabBar,
      SearchBox,
      TableList,
      BottomPagination,
      MessageBox,
      RefreshOffer,
      ChooseBidding,
      CheckInfo,
      Judge,
      TipBox,
      Transfer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .content
    boxstyle()
</style>
