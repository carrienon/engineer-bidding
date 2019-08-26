<template>
  <div class="wrapper">
    <title-bar :title="title" :imgurl="imgurl"></title-bar>
    <div class="content">
      <div class="top">
        <div class="left">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="任务名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="任务类型">
              <el-select v-model="form.region" placeholder="请选择任务类型">
                <el-option label="类型一" value="shanghai"></el-option>
                <el-option label="类型二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="经办人">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="计划开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="计划完成时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="优先级">
              <el-radio-group v-model="form.resource">
                <el-radio label="高"></el-radio>
                <el-radio label="中"></el-radio>
                <el-radio label="低"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否有交付件">
              <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="关联项目">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="bottom">
        <a href="#">取消</a>
        <a href="#">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/title-bar'

  export default {
    data () {
      return {
        title:'新建任务',
        imgurl:require('assets/logo.png'),
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
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
  .content
    boxstyle()
    .top
      display:flex;
      justify-content:space-around;
      padding:66px 0 148px 0;
    .bottom
      display:flex;
      justify-content:space-around;
      padding:0 579px 100px;
      box-sizing:border-box;
      a
        button(#66B3FB)
      a:last-child
        button(#7BCDD9)
</style>
