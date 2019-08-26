<template>
  <div class="wrapper">
    <span class="left"><img :src="imgurl">{{title}}</span>
    <span class="middle"></span>
    <span class="right"><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props:{
    imgurl:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper
    margin:20px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left
      font-size:18px;
      color:#6D6F77;
      font-weight:bold;
      img 
        width:20px;
        height:18px;
        margin-right:14px;
</style>
