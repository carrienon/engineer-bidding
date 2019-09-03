<template>
  <div class="wrapper">
    <div class="search">
      <span class="keyword">
        <el-input
          placeholder="请输入项目名称"
          prefix-icon="el-icon-search"
          v-model="input21">
        </el-input>
      </span>
      <span class="button">搜索</span>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in titleData" :key="index"><div class="cell">{{item}}</div></th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,sindex) in tableData" :key="sindex">
          <td v-for="(item,index) in items" :key="index"><div class="cell">{{item}}</div></td>
          <td>
            <div class="button">
              <span class="check">查看</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import SearchBox from '@/components/search-box'
  export default {
    data() {
      return {
        input21:'',
        titleData:['序号','项目类型','单位名称','项目所在地'],
        tableData:[
          {
            number:'1',
            type:'项目类型',
            name:'单位名称',
            address:'项目所在地'
          },
          {
            number:'1',
            type:'项目类型',
            name:'单位名称',
            address:'项目所在地'
          },
          {
            number:'1',
            type:'项目类型',
            name:'单位名称',
            address:'项目所在地'
          }
        ]
      }
    },
    methods:{
     
    },
    components:{
      SearchBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~assets/styles/mixins"
  .wrapper
    width:100%;
    .search
      margin:30px;
      span 
        margin-right:14px;
        display:inline-block;
      .keyword
        width:300px;
      .button
        height:40px;
        button(#4ED0E4,60px,40px,12px,4px)
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
      .check
        color:#74B7F5;
</style>