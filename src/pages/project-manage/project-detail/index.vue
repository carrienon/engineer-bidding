<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="项目详情">
        <div slot="rightButton" class="right">
          <a href="javascript:;" class="reset">项目变更</a>
        </div>
      </top-title>
      <tab-bar :stateList="stateList" @changeState="changeState" :showButton="showButton" buttonName="新增评估" @createNew="createAssess"></tab-bar>
      <div class="container">
        <section v-if="stateIndex===0">
          <basic-info></basic-info>
        </section>
        <section v-if="stateIndex===1">
          <project-member></project-member>
        </section>
        <section v-if="stateIndex===2">
          <mile-stone></mile-stone>
        </section>
        <section v-if="stateIndex===3">
          <project-assess></project-assess>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TopTitle from './components/top-title'
  import TabBar from '@/components/tab-bar'

  import BasicInfo from './components/basic-info'
  import ProjectMember from './components/project-member'
  import MileStone from './components/mile-stone'
  import ProjectAssess from './components/project-assess'
  export default {
    data () {
      return {
        title:'项目管理',
        imgurl:require('assets/image/title/ic_project.png'),
        stateIndex:0,
        stateList:['项目基本信息','项目成员','项目计划里程碑','项目评估'],
        showButton:false
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(index){
        this.stateIndex = index
        this.showButton = index===3?true:false
      },
      createAssess(){

      }
    },
    components:{
      TitleBar,
      TopTitle,
      TabBar,
      BasicInfo,
      ProjectMember,
      MileStone,
      ProjectAssess
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~assets/styles/mixins"
  .wrapper>>>.tabbar
    border:none;
  .content
    boxstyle()
    .container
      padding:20px 0;
</style>
