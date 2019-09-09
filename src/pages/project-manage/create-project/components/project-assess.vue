<template>
  <div class="wrapper">
    <table-list :titleData="titleData" :tableData="tableData"></table-list>
  </div>
</template>

<script>
  import TableList from '@/components/table-list'
  export default {
    data () {
      return {
        titleData:['序号','开始时间','结束时间','负责人','备注','完成度','评估备注','评估时间'],
        tableData:[
          {
            number:'1',
            name:'姓名',
            contact:'13222222222',
            type:'照明',
            duty:'职责',
            department:'项目总负责人',
            state:'正常',
            time:'2019-09-09'
          },
          {
            number:'1',
            name:'姓名',
            contact:'13222222222',
            type:'照明',
            duty:'职责',
            department:'项目总负责人',
            state:'正常',
            time:'2019-09-09'
          },
          {
            number:'1',
            name:'姓名',
            contact:'13222222222',
            type:'照明',
            duty:'职责',
            department:'项目总负责人',
            state:'正常',
            time:'2019-09-09'
          }
        ]
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      TableList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
