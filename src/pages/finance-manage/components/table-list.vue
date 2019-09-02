<template>
  <div class="wrapper">
    <table width="500">
      <thead>
        <tr>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
          <th v-if="tabState===0"><div class="cell">操作</div></th>
          <th v-if="tabState===1||tabState===2"><div class="cell">邮寄信息</div></th>
          <th v-if="tabState===1||tabState===2"><div class="cell">是否缴税</div></th>
          <th v-if="tabState===1||tabState===2"><div class="cell">是否开票</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td v-for="(item,index) in items" :key="index">
            <div class="cell">{{item}}</div>
          </td>
          <td v-if="tabState===0">
            <div class="button">
              <span class="check">查看明细</span>
              <span class="gather">收款</span>
            </div>
          </td>
          <td v-if="tabState===1||tabState===2">
            <div class="button">
              <span class="check">查看/修改</span>
            </div>
          </td>
          <td v-if="tabState===1||tabState===2">
            <div class="button">
              <span class="left">是</span>
              <span class="right">否</span>
            </div>
          </td>
          <td v-if="tabState===1||tabState===2">
            <div class="button">
              <span class="left">是</span>
              <span class="right">否</span>
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
      userRole:{
        type:Number,
        default:0
      },
      tabState:{
        type:Number,
        default:0
      }
    },
    data() {
      return {
        
      }
    },
    methods:{
      
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
      .gather
        color:#7676D1;
      .left
        color:#CC6AEC;
        margin-right:20px;
      .right
        color:#FF7EAF;
</style>