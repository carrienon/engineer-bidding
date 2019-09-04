<template>
  <span class="wrapper">
    <img v-if="imgUrl" :src="imgUrl" />
    <input type="file"  accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg">
  </span>
</template>

<script>
  export default {
    props:{
      avataUrl:{
        type:String,
        default:''
      }
    },
    data () {
      return {
        imgUrl:''
      }
    },
    computed:{
      
    },
    mounted(){
      this.imgUrl=this.avataUrl?this.avataUrl:''
    },
    methods:{
      uploadImg(val){
        this.imgUrl = window.webkitURL.createObjectURL(val.target.files[0])
      }
    },
    components:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .wrapper
    display:inline-block;
    width:80px;
    height:80px;
    border-radius:50%;
    background:#E8E8E8;
    position:relative;
    margin-bottom:38px;
    img   
      width:80px;
      height:80px;
      border-radius:50%;
    input 
      width:80px;
      height:80px;
      border-radius:50%;
      cursor:pointer;
      position:absolute;
      top:0;
      left:0;
      opacity:0;
</style>
