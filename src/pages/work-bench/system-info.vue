<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl">
      <a href="javascript:;" slot="right" class="all-btn">全部标记为已读</a>
    </title-bar>
    <div class="content">
      <div class="info-item" v-for="(item,index) in infoData" :key="index">
        <span class="item-left">
          <p><span>{{item.name}}</span><span>{{item.time}}</span></p>
          <p>{{item.content}}</p>
        </span>
        <a href="javascript:;" class="item-right"><i class="iconfont icondacha"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'
  import TableList from '@/components/table-list'
  import BottomPagination from '@/components/bottom-pagination'

  export default {
    data () {
      return {
        title:'我的消息',
        imgurl:require('assets/image/title/ic_newss.png'),
        infoData:[
          {
            name:'标题标题标题标题标题标题标题标题标题标题标题标题',
            content:'内容内容内容内容内容',
            time:'07月25日 13:34'
          },
          {
            name:'标题标题标题标题',
            content:'内容内容内容内容内容标题标题标题标题标题标题标题标题',
            time:'07月25日 13:34'
          },
          {
            name:'标题标题标题标题',
            content:'内容内容内容内容内容',
            time:'07月25日 13:34'
          }
        ]
      }
    },
    methods:{
      
    },
    components:{
      TitleBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~assets/styles/mixins"
  .all-btn
    color:#666666;
    font-size:18px;
  .content
    boxstyle()
    .info-item
      height:123px;
      border-bottom:1px solid #F2F2F2;
      padding:35px 40px;
      box-sizing:border-box;
      display:flex;
      justify-content:space-between;
      .item-left
        display:flex;
        flex-direction:column;
        color:#666;
        font-size:14px;
        p:first-child
          color:#7ACBD7;
          font-size:20px;
          margin-bottom:20px;
          span:first-child
            width:280px;
            height:20px;
            ellipsis()
            display:inline-block;
          span:last-child
            font-size:14px;
            color:#999;
            margin-left:60px;
      .item-right
        color:#C2C2C2;
        font-size:16px;
</style>
