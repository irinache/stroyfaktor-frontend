<template>
  <div id="app">
     <router-view/>
     <CallMeBackModal /> 
     <AddToCartModal />
  </div>
</template>

<script>
import CallMeBackModal from "./components/CallMeBackModal.vue";
import AddToCartModal from "./components/AddToCartModal.vue";

export default {

  name: 'App',
  components: {
    CallMeBackModal,
    AddToCartModal,
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
