<template>
  <div id="app">
    <FormSubmit />
  </div>
</template>

<script>
import FormSubmit from './components/formSubmit.vue'

export default {
  name: 'App',
  components: {
    FormSubmit
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}
</style>
