<template>
  <div class="wrapper">
    <table-list :titleData="titleData" :tableData="tableData"></table-list>
  </div>
</template>

<script>
  import TableList from './table-list'
  export default {
    data () {
      return {
        titleData:['步骤','项目名称','开始时间','结束时间'],
        tableData:[
          {
            number:'1',
            name:'姓名',
            start:'2019-09-09',
            end:'2019-09-10'
          },
          {
            number:'1',
            name:'姓名',
            start:'2019-09-09',
            end:'2019-09-10'
          },
          {
            number:'1',
            name:'姓名',
            start:'',
            end:''
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
