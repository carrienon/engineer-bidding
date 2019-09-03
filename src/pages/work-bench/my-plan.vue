<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <el-calendar>
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p>
            {{ data.day.split('-').slice(1).join('-') }}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'

  export default {
    data () {
      return {
        title:'我的计划',
        imgurl:require('assets/image/title/ic_myplan.png')
      }
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      TitleBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .content
    boxstyle()
</style>
