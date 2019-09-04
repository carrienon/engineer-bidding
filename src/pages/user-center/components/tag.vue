<template>
  <div class="wrapper">
    <p class="top-title"><span>个人标签</span>
      <a class="edit" href="javascript:;" @click="editTag" v-if="!editSate">编辑</a>
      <a class="edit" href="javascript:;" @click="completeTag" v-else>完成</a>
    </p>
    <div class="container">
      <div class="tag-item">
        <div class="tag-left">职业技能</div>
        <div class="tag-right">
          <span v-for="(item,index) in skillTag" :key="index">{{item}}<i class="iconfont icondelete-s" v-show="editSate"></i></span>
          <span class="add-tag" v-show="editSate" @click="addTag"><i class="iconfont iconuntitled44"></i></span>
        </div>
      </div>
      <div class="tag-item">
        <div class="tag-left">工作技能</div>
        <div class="tag-right">
          <span v-for="(item,index) in workTag" :key="index">{{item}}<i class="iconfont icondelete-s" v-show="editSate"></i></span>
          <span class="add-tag" v-show="editSate" @click="addTag"><i class="iconfont iconuntitled44"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        editSate:false,
        labelPosition: 'left',
        skillTag:['标签一','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2'],
        workTag:['标签一','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2','标签名称2']
      }
    },
    computed:{
      
    },
    mounted(){
      
    },
    methods:{
      editTag(){
        this.editSate = true
      },
      completeTag(){
        this.editSate = false
      },
      addTag(){
        this.$emit('addTag')
      }
    },
    components:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
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
    .top-title
      padding:34px 30px 30px 68px;
      line-height:34px;
      box-sizing:border-box;
      width:100%;
      display:flex;
      justify-content:space-between;
      span 
        color:#85C4CE;
        font-weight:bold;
        font-size:16px;
      a
        button(#9E98D1,100px,34px,12px,4px)
      .add
        button(#4ADEBD,100px,34px,12px,4px)
      .edit
        button(#4ED0E4,100px,34px,12px,4px)
    .container
      display:flex;
      padding-bottom:38px;
      border-bottom:1px solid #EFEFEF;
      .left
        margin-left:68px;
      .right
        margin-left:165px;
    .tag-item
      margin-left:68px;
      display:flex;
      font-size:14px;
      color:#999;
      .tag-left
        width:120px;
      .tag-right
        span
          color:#fff;
          display:inline-block;
          margin-right:18px;
          padding:10px 20px;
          background:#94D2DB;
          border-radius:4px;
          margin-bottom:12px;
          position:relative;
          i
            position:absolute;
            right:-8px;
            top:-8px;
            color:#F96079;
            font-size:16px;
            cursor:pointer;
        .add-tag
          width:108px;
          line-height:31px;
          height:31px;
          padding:0;
          text-align:center;
          border:1px dashed #BFBFBF;
          background:#F6F7FB;
          cirsor:pointer;
          i
            position:static;
            color:#C6C6C6;
            font-size:15px;
</style>
