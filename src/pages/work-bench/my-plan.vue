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
      <div class="button" @click="addPlan"><i class="iconfont iconuntitled44"></i>添加计划</div>
    </div>
    <choose-date :showDate="showDate" title="添加计划" :showContent="showContent" @cancelDate="addPlan" @confirmDate="confirmDate"></choose-date>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import ChooseDate from '@/components/choose-date'

  export default {
    data () {
      return {
        title:'我的计划',
        imgurl:require('assets/image/title/ic_myplan.png'),
        showDate:false,
        showContent:true
      }
    },
    mounted(){
      
    },
    methods:{
      addPlan(){
        this.showDate = !this.showDate
      },
      confirmDate(){
        this.showDate = !this.showDate
      }
    },
    components:{
      TitleBar,
      ChooseDate
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .content
    boxstyle()
    position:relative;
    .button
      position:absolute;
      right:20px;
      bottom:45px;
      width:110px;
      height:110px;
      text-align:center;
      background:rgba(123,205,217,1);
      box-shadow:2px 2px 3px 0px rgba(56,152,166,0.26);
      border-radius:50%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      i 
        font-size:20px;
        margin-bottom:10px;
</style>
