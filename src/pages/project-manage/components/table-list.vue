<template>
  <div class="wrapper">
    <table width="500">
      <thead>
        <tr>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
          <th v-if="projectSate===0"><div class="cell">里程碑情况</div></th>
          <th v-if="operation"><div class="cell">操作</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td v-for="(item,index) in items" :key="index">
            <div class="cell another" v-if="item.length===7">
              <div class="cell-item"  v-for="(itemd,dindex) in item" :key="dindex">
                <p :class="['circle',{'no-active':!itemd.complete}]"><span><em></em></span><span></span></p>
                <p :class="['title',{'nonactive':!itemd.complete}]">{{itemd.title}}</p>
                <p class="time">{{itemd.time}}</p>
              </div>
            </div>
            <div class="cell" v-else>{{item}}</div>
          </td>
          <td v-if="operation">
            <div class="button">
              <span class="check" v-if="projectSate===0">查看</span>
              <span class="check" v-if="projectSate===1" @click="distribute">分配/查看</span>
              <span class="check" v-if="projectSate===2">查看</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props:{
      titleData:{
        type:Array,
        default:[]
      },
      tableData:{
        type:Array,
        default:[]
      },
      operation:{
        type:Boolean,
        default:false
      },//是否有操作按钮
      userRole:{
        type:Number,
        default:0
      },
      projectSate:{
        type:Number,
        default:0
      }
    },
    data() {
      return {
        
      }
    },
    methods:{
      distribute(){
        this.$router.push('./check-project')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper
    width:100%;
    table
      width:100%;
      thead tr th:first-child .cell,tbody tr td:first-child .cell
        padding:0 20px;
        text-align:center;
      thead th .cell
        line-height:65px;
        height:65px;
        color:#6D6F77;
      .cell
        line-height:100px;
        height:100px;
        ellipsis()
      tbody .cell
        color:#999;
      tbody tr:nth-child(odd)
        background:#FAFAFC;
      tbody td
        max-width:360px;
      .another
        display:flex;
        align-items:center;
      .cell-item
        display:inline-block;
        .circle
          line-height:24px;
          display:flex;
          align-items:center;
          span:first-child
            display:inline-block;
            width:24px;
            height:24px;
            border:1px solid #7AD2B0;
            border-radius:50%;
            text-align:center;
            em  
              display:inline-block;
              width:14px;
              height:14px;
              border:5px solid #fff;
              border-radius:50%;
              background:#7AD2B0;
          span:last-child
            display:inline-block;
            width:80px;
            height:1px;
            background:#7AD2B0;
        .no-active
          span:first-child
            border:1px solid #BCBCBC;
            em 
              background:#BCBCBC;
          span:last-child
            background:#BCBCBC;
      .cell-item:last-child .circle span:last-child
          width:0;
        .title
          color:#7AD2B0;
          font-size:14px;
          line-height:14px;
          margin-top:15px;
        .nonactive
          color:#989898;
        .time
          color:#939393;
          font-size:10px;
          line-height:10px;
          margin-top:10px;
      .button
        cursor:pointer;
      .check
        color:#74B7F5;
        margin-right:20px;
</style>