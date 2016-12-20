<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/user/system">User System</router-link>
    <router-link to="/user/app">User APP</router-link>
    <home></home>
    <!--<router-view></router-view>-->
  </div>
</template>
<script>
  import Home from './components/home/Home.vue';

  export default {
    data() {
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