<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
          <th><div class="cell">操作</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td v-for="(item,index) in items" :key="index"><div class="cell">{{item}}</div></td>
          <td v-if="state==1"><a href="javascript:;" class="check" @click="checkProject">审核</a></td>
          <td v-if="state==2"><a href="javascript:;" class="check">上传</a></td>
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
      state:{
        type:String,
        default:"1"
      }
    },
    data() {
      return {
        
      }
    },
    methods:{
      checkProject(){
        this.$emit('checkProject')
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