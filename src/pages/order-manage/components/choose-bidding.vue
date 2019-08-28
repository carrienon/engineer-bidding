<template>
  <div class="wrapper" v-show="showChoose">
    <div class="content">
      <p class="title">选择中标方</p>
      <div class="item-list">
        <div :class="[{ active: item.check }, 'item']"  v-for="(item,index) in infoData" :key="index">
          <p class="item-wrapper"><span>招标公司</span><span>{{item.company}}</span></p>
          <p class="item-wrapper"><span>投标时间</span><span>{{item.time}}</span></p>
          <p class="item-wrapper"><span>投标金额</span><span>{{item.money}}</span></p>
          <p class="item-wrapper"><span>附件</span><span><i class="iconfont iconxiazai"></i>下载</span></p>
          <p class="item-check" @click="chooseCompany(index)"><i v-show="!item.check" class="iconfont iconweixuanzhong"></i><i v-show="item.check" class="iconfont iconxuanzhong"></i></p>
        </div>
      </div>
      <p class="button"><a href="javascript:;" @click="cancelChoose">取消</a><a href="javascript:;" @click="confirmChoose">确认</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showChoose:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      infoData:[
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        },
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        },
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        },
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        },
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        },
        {
          company:'深圳源动信息技术有限公司',
          time:'2019-08-09',
          money:'10000.00元',
          check:false
        }
      ]
    }
  },
  methods:{
    chooseCompany(index){
      this.infoData.forEach((item,sindex)=>{
        if(index==sindex){
          this.$set(this.infoData[sindex],"check",true)
        }else{
          this.$set(this.infoData[sindex],"check",false)
        }
      })
    },
    cancelChoose(){
      this.$emit('cancelChoose')
    },
    confirmChoose(){
      this.$emit('confirmChoose')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper>>>.el-input
    width:277px;
  .wrapper>>>.el-input__inner::-webkit-input-placeholder,.wrapper>>>.el-textarea__inner::-webkit-input-placeholder
    font-family:'MicrosoftYaHei';
    color:#ccc;
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
      width:809px;
      padding:39px 0 45px 0;
      box-sizing:border-box;
      background:rgba(255,255,255,1);
      border-radius:4px;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      .title
        color:#666666;
        margin-bottom:42px;
        font-size:16px;
      .button
        a
          display:inline-block;
          button(#4ED0E4,140px,40px,14px,4px)
        a:first-child
          background:rgba(218,246,250,1);
          border:1px solid rgba(78,208,228,1);
          color:#4ED0E4;
          margin-right:80px;
      .item-list
        padding:0 27px 14px;
        .item
          display:inline-block;
          width:231px;
          height:140px;
          padding:18px 17px 26px;
          box-sizing:border-box;
          border:1px solid rgba(237,237,237,1);
          border-radius:4px;
          margin:0 9px 16px 9px;
          font-size:12px;
          position:relative;
          .item-wrapper
            margin-bottom:15px;
            display:flex;
            span:first-child
              color:#999999;
              display:inline-block;
              width:65px;
            span:last-child
              display:inline-block;
              width:129px;
              color:#666666;
              ellipsis()
            i 
              color:#4ED0E4;
              font-size:10px;
              margin-right:7px;
              cursor:pointer;
          .item-check
            position:absolute;
            right:17px;
            bottom:9px;
            cursor:pointer;
            i:first-child
              color:#C5C5C5;
            i:last-child
              color:#5AC5F1;
        .active
          border:1px solid #5AC5F1;
</style>
