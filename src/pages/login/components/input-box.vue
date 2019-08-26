<template>
  <p class="line-wrapper">
    <i :class="[defaultvalue,classname]"></i><input :type="type" :placeholder="placeholder" />
  </p>
</template>

<script>
export default {
  props:{
    classname:{
      type:String,
      default:''
    },
    placeholder:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  data () {
    return {
      defaultvalue:'iconfont'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
    .line-wrapper
      width:100%;
      height:73px;
      display:flex;
      align-items:center;
      border-bottom:1px solid #E1E1E1;
      i 
        font-size:18px;
        margin-right:29px;
        color:#828282;
      input
        flex-grow:2;
      input::-webkit-input-placeholder 
        font-family:'MicrosoftYaHei';
</style>
