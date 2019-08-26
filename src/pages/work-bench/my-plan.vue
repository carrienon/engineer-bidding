<template>
  <div class="wrapper">
    <full-calendar :events="fcEvents" locale="en"></full-calendar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fcEvents : demoEvents
    }
  },
  components : {
	'full-calendar': require('vue-fullcalendar')	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
