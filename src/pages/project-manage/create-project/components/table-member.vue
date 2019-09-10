<template>
  <div class="wrapper">
    <table width="500">
      <thead>
        <tr>
          <th></th>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td><el-checkbox v-model="checked"></el-checkbox></td>
          <td v-for="(item,index) in items" :key="index">
            <div class="cell">{{item}}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="button"><a href="javascript:;" @click="confirmChoose">确认</a></p>
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
      }
    },
    data() {
      return {
        checked:true
      }
    },
    methods:{
      confirmChoose(){
        this.$emit('confirmChoose')
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
        line-height:65px;
        height:65px;
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
  .button
    text-align:center
    a
      display:inline-block;
      button(#4ED0E4,140px,40px,14px,4px)
</style>