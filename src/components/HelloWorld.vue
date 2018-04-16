<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1>方式一：{{$store.state.count }}</h1>
    <h1>方式二：{{ isLogin }}</h1>
    <h1>方式三：{{ $store.state.user.name}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      isLogin:function () {
        // return this.$store.state.username;
        return this.$store.getters.isLogin;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
