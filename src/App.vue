<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/home/Home.vue';

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
 components: {
   Home
 },
  methods: {
    
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: Helvetica, sans-serif;
  background: #f1f1f1;
}
</style>
