<template>
  <div class="app-wrapper">
    <navbar class="navbar-container" />
    <div  class="main-container">
      <sidebar class="sidebar-container" />
      <app-main />
    </div>
  </div>
</template>

<script>
  import AppMain from './components/app-main'
  import Navbar from './components/nav-bar'
  import Sidebar from './components/side-bar'

  export default {
    name: 'Layout',
    components: {
      AppMain,
      Navbar,
      Sidebar
    },
    methods: {
      
    }
  }
</script>

<style lang="stylus" scoped>
  .app-wrapper
    width:100%;
    max-width:1920px;
    overflow-x:scroll;
    min-height:100vh;
    .main-container
      width:calc(100vw - 100px);
      min-height:calc(100vh - 80px);
      margin-top:80px;
</style>
