<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <top-title titleName="创建项目">
        <div slot="rightButton" class="right">
          <a href="javascript:;" class="reset" @click="changePro">项目变更</a>
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
      </div>
    </div>
    <create-assess :showAddassess="showAddassess" @cancelAdd="cancelAdd" @confirmAdd="confirmAdd"></create-assess>
    <project-change :showChangepro="showChangepro" @cancelChange="changePro" @confirmChange="changePro"></project-change>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TopTitle from './components/top-title'
  import TabBar from '@/components/tab-bar'

  import BasicInfo from './components/basic-info'
  import ProjectMember from './components/project-member'
  import MileStone from './components/mile-stone'

  import CreateAssess from './components/create-assess'
  import ProjectChange from './components/project-change'

  export default {
    data () {
      return {
        title:'项目管理',
        imgurl:require('assets/image/title/ic_project.png'),
        stateIndex:0,
        stateList:['项目基本信息','项目成员','项目计划'],
        showButton:false,
        showAddassess:false,
        showChangepro:false
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
      //新增评估
      createAssess(){
        this.showAddassess = true
      },
      cancelAdd(){
        this.showAddassess = false
      },
      confirmAdd(){
        this.showAddassess = false
      },
      //项目变更
      changePro(){
        this.showChangepro = !this.showChangepro
      }
    },
    components:{
      TitleBar,
      TopTitle,
      TabBar,
      BasicInfo,
      ProjectMember,
      MileStone,
      CreateAssess,
      ProjectChange
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
