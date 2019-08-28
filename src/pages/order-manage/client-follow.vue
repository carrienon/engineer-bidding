<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <search-box></search-box>
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
  import SearchBox from '@/components/search-box'
  import TableList from '@/components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'客户跟踪',
        imgurl:require('assets/logo.png'),
        tableData: [
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            auditor:'2019-8-9',
            money:'2000',
            date:'2019-08-09'
          },
          {
            number: '1',
            order: '王小虎',
            name: '任务类型',
            address:'已完成',
            state:'任务事项',
            auditor:'2019-8-9',
            money:'2000',
            date:'2019-08-09'
          }
        ],
        titleData:['客户','客户编号','客户名称','地点','联络人姓名','联络人电话','创建日期','创建人']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      TitleBar,
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
