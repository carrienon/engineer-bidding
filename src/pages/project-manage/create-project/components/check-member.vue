<template>
  <div class="wrapper" v-show="showMember">
    <div class="content">
      <p class="title"><span>项目成员</span><i class="iconfont icondacha" @click="closeMember"></i></p>
      <div class="info-wrapper">
        <p><span>姓名</span><span>朱巨成</span></p>
        <p><span>联系方式</span><span>朱巨成</span></p>
        <p><span>职责</span><span>朱巨成</span></p>
        <p><span>职责部门</span><span>朱巨成</span></p>
        <p><span>状态</span><span>朱巨成</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showMember:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    closeMember(){
      this.$emit('closeMember')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    background:rgba(0,0,0,0.3);
    z-index:11;
    .content
      position:relative;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:500px;
      padding:0 35px 45px;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      .title
        width:100%;
        line-height:60px;
        text-align:center;
        font-size:20px;
        i 
          position:absolute;
          right:20px;
          top:0;
          cursor:pointer;
      .info-wrapper
        margin-top:20px;
        p
          line-height:30px;
          display:flex;
          justify-content:center;
          span
            width:150px;
            color:#999;
          span:last-child
            color:#666;
</style>
