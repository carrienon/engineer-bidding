<template>
  <div class="wrapper" v-show="showAddtag">
    <div class="content">
      <p class="title"><span><img :src="imgUrl" />选择标签</span><i class="iconfont icondacha" @click="closeAddtag"></i></p>
      <ul class="tag-wrapper">
        <li 
          :class="{'active':item.choose}" 
          v-for="(item,index) in tagData" 
          :key="index"
          @click="chooseTag(index)">{{item.name}}</li>
      </ul>
      <p class="button"><a href="javascript:;" @click="confirmAdd">确认</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showAddtag:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      imgUrl:require('assets/image/ic_sortof.png'),
      tagData:[
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:true
        },
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:false
        },
        {
          name:'类别名称一',
          choose:false
        }
      ]
    }
  },
  methods:{
    chooseTag(index){
      this.$set(this.tagData[index],'choose',!this.tagData[index].choose)
    },
    confirmAdd(){
      this.$emit('confirmAdd')
    },
    closeAddtag(){
      this.$emit('closeAddtag')
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
      width:1060px;
      padding:0 35px 45px;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      .title
        widht:100%;
        line-height:66px;
        border-bottom:1px solid #EBEBEB;
        font-size:20px;
        display:flex;
        justify-content:space-between;
        img
          width:20px;
          height:20px;
          margin-right:20px;
      .tag-wrapper
        padding:25px 0;
        li
          display:inline-block;
          width:150px;
          line-height:42px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(229,229,229,1);
          border-radius:6px;
          color:#666;
          text-align:center;
          margin:0 15px 18px 0;
          cursor:pointer;
        li:nth-child(6n)
          margin-right:0;
        .active
          background:linear-gradient(-79deg,rgba(134,236,201,1),rgba(119,173,240,1));
          box-shadow:0px 1px 4px 0px rgba(184,220,219,0.77);
          color:#fff;
          border:none;
      .button
        text-align:center;
        a
          display:inline-block;
          button(#4ED0E4,140px,40px,14px,4px);
</style>
