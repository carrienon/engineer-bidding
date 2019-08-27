<template>
  <div class="upload">
    <div class="button" v-if="!fileName">
      <span><i class="iconfont iconshangchuan"></i>上传</span><span>大小不超过8M</span>
      <input class="input" type="file" ref="file"  @change="uploadFile">
    </div>
    <div class="file" v-else><span>{{fileName}}</span><i class="iconfont iconyuanxingdacha" @click="upLoadAgain"></i></div>
  </div>
</template>

<script>
export default {
  props:{
    
  },
  data () {
    return {
      fileName:''
    }
  },
  methods:{
    uploadFile(){
      this.fileName = this.$refs.file.files[0].name
    },
    upLoadAgain(){
      this.fileName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .button
    color:#767676;
    font-size:14px;
    position:relative;
    span 
      margin-right:50px;
      i 
        font-size:20px;
        font-weight:bold;
        color:#54B6F4;
        cursor:pointer;
        margin-right:13px;
    span:last-child
      color:#7ACAE4;
      font-size:12px;
    .input
      position:absolute;
      left:0;
      top:0;
      width:61px;
      height:100%;
      opacity:0;
      cursor:pointer;
  .file
    font-size:14px;
    color:#74C3F6;
    display:flex;
    align-items:center;
    i 
      font-size:20px;
      font-weight:bold;
      color:#F38775;
      margin-left:54px;
      cursor:pointer;
</style>
