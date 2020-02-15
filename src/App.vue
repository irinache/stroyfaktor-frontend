<template>
  <div id="app">
     <router-view/>
     <CallMeBackModal /> 
  </div>
</template>

<script>
import CallMeBackModal from "./components/CallMeBackModal.vue";
export default {

  name: 'App',
  components: {
    CallMeBackModal
  },
  
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;  
}
</style>
