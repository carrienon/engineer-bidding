<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
          <!-- 订单管理平台方 -->
          <th v-if="userRole===2&&(orderState===3||orderState===4||orderState===5||orderState===6)">甲方信息</th>
          <th v-if="userRole===2&&(orderState===3||orderState===4||orderState===5||orderState===6)">乙方信息</th>
          <th v-if="operation">操作</th>
          <th v-if="userRole===2&&orderState===1">中标确认</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td v-for="(item,index) in items" :key="index"><div class="cell">{{item}}</div></td>
          <!-- 订单管理平台方 -->
          <td v-if="userRole===2&&(orderState===3||orderState===4||orderState===5||orderState===6)">
            <div class="button">
              <span class="check">查看</span>
            </div>
          </td>
          <td v-if="userRole===2&&(orderState===3||orderState===4||orderState===5||orderState===6)">
            <div class="button">
              <span class="check">查看</span>
            </div>
          </td>
          <td v-if="operation">
            <!-- 我的待办 -->
            <div class="button start" v-if="totalData.length>0&&totalData[sindex].status==1">开始</div>
            <div class="button end" v-if="totalData.length>0&&totalData[sindex].status==0">完成</div>
            <!-- 订单管理--中都方 -->
            <div class="button" v-if="userRole===1">
              <span class="edit" v-if="orderState===0">编辑</span>
              <span class="delete" v-if="orderState===0">删除</span>
              <span class="check" v-if="orderState===1">审核</span>
              <span class="transfer" v-if="orderState===1">转申</span>
              <span class="urge" v-if="orderState===1">催办</span>
              <span class="edit" v-if="orderState===2">选择中标方</span>
              <span class="check" v-if="orderState===3">创建合同/查看</span>
            </div>
            <!-- 订单管理平台方 -->
            <div class="button" v-if="userRole===2">
              <span class="edit" v-if="orderState===0">编辑</span>
              <span class="delete" v-if="orderState===0">删除</span>
              <span class="check" v-if="orderState===1">取消任务</span>
              <span class="transfer" v-if="orderState===1">重新报价</span>
              <span class="check" v-if="orderState===2">取消投标</span>
              <span class="delete" v-if="orderState===3">创建合同</span>
              <span class="transfer" v-if="orderState===6">评价</span>
            </div>
          </td>
          <!-- 订单管理平台方 -->
          <td v-if="userRole===2&&orderState===1">
            <div class="button">
              <span class="check">选择中标方</span>
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
      totalData:{
        type:Array,
        default:()=>{
          return []
        }
      },
      userRole:{
        type:Number,
        default:0
      },
      orderState:{
        type:Number,
        default:0
      }
    },
    data() {
      return {
        
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
        line-height:60px;
        height:60px;
        max-width:200px;
        ellipsis()
      tbody .cell
        color:#999;
      tbody tr:nth-child(odd)
        background:#FAFAFC;
      .button
        cursor:pointer;
      .start
        color:#45CB78;
      .end
        color:#52AAE8;
      .edit
        color:#21C79A;
        margin-right:20px;
      .delete
        color:#FEC53B;
      .check
        color:#74B7F5;
        margin-right:20px;
      .transfer
        color:#CC6AEC;
        margin-right:20px;
      .urge
        color:#FF7EAF;
</style>