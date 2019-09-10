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
          <project-member @checkMember="closeMember" @addMember="closeSearch"></project-member>
        </section>
        <section v-if="stateIndex===2">
          <mile-stone @setTime="setTime"></mile-stone>
        </section>
      </div>
    </div>
    <!-- 查看成员 -->
    <check-member :showMember="showMember" @closeMember="closeMember"></check-member>
    <!-- 新增成员 -->
    <search-member :showSearch="showSearch" @closeSearch="closeSearch" @confirmSearch="confirmSearch"></search-member>
    <choose-member :showChoose="showChoose" @closeChoose="closeChoose"></choose-member>
    <!-- 选择日期 -->
    <choose-date title="选择时间" :showDate="showDate" @cancelDate="cancelDate" @confirmDate="confirmDate"></choose-date>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TopTitle from './components/top-title'
  import TabBar from '@/components/tab-bar'
  import ChooseDate from '@/components/choose-date'

  import BasicInfo from './components/basic-info'
  import ProjectMember from './components/project-member'
  import MileStone from './components/mile-stone'

  import CheckMember from './components/check-member'
  import SearchMember from './components/search-member'
  import ChooseMember from './components/choose-member'

  export default {
    data () {
      return {
        title:'项目管理',
        imgurl:require('assets/image/title/ic_project.png'),
        stateIndex:0,
        stateList:['项目基本信息','项目成员','项目计划'],
        showButton:false,
        showAddassess:false,
        showChangepro:false,
        showMember:false,
        showSearch:false,
        showChoose:false,
        showDate:false
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
      },
      //查看成员
      closeMember(){
        this.showMember = !this.showMember
      },
      //新增成员
      closeSearch(){
        this.showSearch = !this.showSearch
      },
      confirmSearch(){
        this.showSearch = !this.showSearch
        this.showChoose = !this.showChoose
      },
      closeChoose(){
        this.showChoose = !this.showChoose
      },
      //选择计划日期
      setTime(){
        this.showDate = !this.showDate
      },
      cancelDate(){
        this.showDate = !this.showDate
      },
      confirmDate(){
        this.showDate = !this.showDate
      }
    },
    components:{
      TitleBar,
      TopTitle,
      TabBar,
      BasicInfo,
      ProjectMember,
      MileStone,
      CheckMember,
      SearchMember,
      ChooseMember,
      ChooseDate
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
