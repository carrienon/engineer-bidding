<template>
  <div class="wrapper">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper
    padding:30px 60px;
    width:100%;
    display:flex;
    justify-content:flex-end;
    box-sizing:border-box;
</style>
