<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <tab-bar 
        :stateList="stateList" 
        :showButton="showButton" 
        buttonName="添加工作经验" 
        @createNew="createNew"
        @changeState="changeState"></tab-bar>
      <div v-if="stateIndex==0">
        <section v-show="userRole==0">
          <person-info></person-info>
          <professional-info></professional-info>
          <experience @addWork="cancelAddwork"></experience>
          <tag @addTag="closeAddtag"></tag>
        </section>
        <section v-show="userRole==1">
          <invite-info></invite-info>
          <tag @addTag="closeAddtag"></tag>
        </section>
        <section v-show="userRole==2">
          <noinvite-info></noinvite-info>
        </section>
      </div>
      <div v-else>
        <table-list></table-list>
      </div>
    </div>
    <add-work :showAddwork="showAddwork" @cancelAddwork="cancelAddwork" @confirmAddwork="confirmAddwork"></add-work>
    <add-tag :showAddtag="showAddtag" @confirmAdd="confirmAdd" @closeAddtag="closeAddtag" @defineTag="defineTag"></add-tag>
    <define-tag :showDefine="showDefine" @closeDefine="defineTag"></define-tag>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TabBar from '@/components/tab-bar'

  import PersonInfo from './components/person-info'
  import ProfessionalInfo from './components/professional-info'
  import Experience from './components/experience'
  import Tag from './components/tag'
  import InviteInfo from './components/invite-info'
  import NoinviteInfo from './components/noinvite-info'
  import TableList from './components/table-list'

  import AddWork from './components/add-work'
  import AddTag from '@/components/add-tag'
  import DefineTag from './components/define-tag'

  export default {
    data () {
      return {
        title:'个人中心',
        imgurl:require('assets/image/title/ic_schedule.png'),
        labelPosition: 'left',
        stateList:['个人信息','主要经历'],
        stateIndex:0,
        showButton:false,
        showAddwork:false,
        showAddtag:false,
        showDefine:false,
        userRole:0//0是中都人员，1是平台注册邀请，2是平台注册非邀请
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      changeState(index){
        this.stateIndex = index
        if(index==1){
          this.showButton=true
        }else{
          this.showButton=false
        }
      },
      //添加项目经历
      createNew(){
        this.$router.push('./create-experience')
      },
      //添加工作经验
      cancelAddwork(){
        this.showAddwork = !this.showAddwork
      },
      confirmAddwork(){
        this.showAddwork = false
      },
      //添加标签
      confirmAdd(){
        this.showAddtag = false
      },
      closeAddtag(){
        this.showAddtag = !this.showAddtag
      },
      defineTag(){
        this.showDefine = !this.showDefine
        this.showAddtag = !this.showAddtag
      }
    },
    components:{
      TitleBar,
      TabBar,
      PersonInfo,
      ProfessionalInfo,
      Experience,
      Tag,
      InviteInfo,
      NoinviteInfo,
      TableList,
      AddWork,
      AddTag,
      DefineTag
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~assets/styles/mixins"
  .content>>>.el-form--label-left .el-form-item__label
    color:#333;
  .content>>>.el-input__inner,.content>>>.el-textarea__inner
    width:300px;
    border:none;
    background:#F7F6F7;
    font-family:'MicrosoftYaHei';
  .content>>>.el-input__inner::placeholder,.content>>>.el-textarea__inner::placeholder
    color:#999999;
    font-family:'MicrosoftYaHei';
  .content>>>.el-form-item__content
    display:flex;
  .content>>>.el-button
    background:#74B7F5;
    font-family:'MicrosoftYaHei';
    color:#fff;
    border:none;
  .content>>>.el-radio
    line-height:40px;
  .content
    boxstyle()
</style>
