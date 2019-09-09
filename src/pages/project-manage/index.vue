<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar :stateList="stateList" :showButton="showButton" buttonName="创建项目"  @changeState="changeState"></tab-bar>
      <search-box :showSelect="showSelect"  placeHolder="请输入订单编号/名称" v-if="projectSate!=1"></search-box>
      <table-list 
        :titleData="titleData" 
        :tableData="tableData" 
        :operation="operation"
        :projectSate="projectSate"
        :userRole="userRole"
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
        title:'项目管理',
        imgurl:require('assets/image/title/ic_project.png'),
        userRole:1,//用户角色，1为中都方，2为平台方
        operation:true,
        projectSate:0,
        showSelect:false,
        showButton:true,
        tableData:[],
        tableDataone: [
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            process:[
              {
                title:'项目启动',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'成果上传',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'成果审核',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'项目签名',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'成果输出',
                time:'2019-8-1',
                complete:false
              },
              {
                title:'项目验收',
                time:'2019-8-1',
                complete:false
              },
              {
                title:'出版盖章/邮寄给业主',
                time:'2019-8-1',
                complete:false
              }
            ]
          },
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            process:[
              {
                title:'项目启动',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'成果上传',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'成果审核',
                time:'2019-8-1',
                complete:true
              },
              {
                title:'项目签名',
                time:'2019-8-1',
                complete:false
              },
              {
                title:'成果输出',
                time:'2019-8-1',
                complete:false
              },
              {
                title:'项目验收',
                time:'2019-8-1',
                complete:false
              },
              {
                title:'出版盖章/邮寄给业主',
                time:'2019-8-1',
                complete:false
              }
            ]
          }
        ],
        tableDatatwo: [
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            content:'任务事项'
          },
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            content:'任务事项'
          }
        ],
        titleData:['序号','项目编码','项目名称','项目经理']
      }
    },
    computed:{
      //中都方和平台方的订单状态
      stateList(){
        let stateList = []
        if(this.userRole===1){
          return stateList=['项目列表','待分配项目','变更项目']
        }else{
          return stateList=['项目列表','变更项目']
        }
      }
    },
    mounted(){
      this.tableData = this.tableDataone
      console.log()
    },
    methods:{
      changeState(index){
        this.projectSate = index
        this.showSelect = false
        if(index===0){
          this.titleData=['序号','项目编码','项目名称','项目经理']
          this.tableData = this.tableDataone
        }else if(index===1){
          this.titleData=['序号','订单编号','订单名称','分配状态','项目分配']
          this.tableData = this.tableDataone
        }else if(index===2){
          this.titleData=['项目编号','项目名称','项目经理','变更时间','变更发起人','变更内容']
          this.tableData = this.tableDatatwo
          this.showSelect = true
        }
        console.log(this.showSelect)
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
