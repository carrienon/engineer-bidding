<template>
  <div class="wrapper">
    <div class="left"><span>{{titleName}}</span></div>
    <div class="right">
      <slot name="rightButton"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      titleName:{
        type:String,
        default:''
      }
    },
    data () {
      return {
        
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "~assets/styles/mixins"
  .wrapper
    padding:18px 30px 12px 23px;
    box-sizing:border-box;
    border-bottom:1px solid #EFEFEF;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left
      color:#666;
      span 
        padding-left:20px;
        border-left:2px solid #4ED0E4;
    .right
      a
        display:inline-block;
        margin-left:18px;
      .save
        button(#9E98D1,100px,34px,12px,4px)
      .reset
        button(#4ADEBD,100px,34px,12px,4px)
      .submit
        button(#4ED0E4,100px,34px,12px,4px)
</style>
