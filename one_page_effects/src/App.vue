<template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "App",
    components: {
      HelloWorld
    }
  };
</script>

<style>
  * {
    height: 100vh;
    width: 100vw;
    margin: 0;
    overflow: hidden;
  }
  #app::-webkit-scrollbar {
    display: none;
  }
</style>
