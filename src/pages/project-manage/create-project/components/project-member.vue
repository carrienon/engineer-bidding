<template>
  <div class="wrapper">
    <table-list :titleData="titleData" :tableData="tableData" stateIndex="1"></table-list>
  </div>
</template>

<script>
  import TableList from './table-list'
  export default {
    data () {
      return {
        titleData:['序号','分工类别','项目成员'],
        tableData:[
          {
            number:'1',
            type:'项目经理',
            member:'朱巨成'
          },
          {
            number:'1',
            type:'项目经理',
            member:'朱巨成'
          },
          {
            number:'1',
            type:'项目经理',
            member:'朱巨成'
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
