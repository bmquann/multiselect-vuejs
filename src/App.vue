<template>
  <div id="app">
    <MultiSelectMain />
  </div>
</template>

<script>
import MultiSelectMain from './components/MultiSelectMain.vue'

export default {
  name: 'App',
  components: {
    MultiSelectMain
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #E5E5E5;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
