<template>
  <div class="hello">
    <span>您好：{{ $store.state.user.name}}</span>
    <span>{{ isLogin?'':"未登录" }}</span>
    <input type="button" value="登录" v-if="!isLogin" @click="login"/>
    <input type="button" value="异步登录" v-if="!isLogin" @click="loginAsync"/>
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
      isLogin: function () {
        // return this.$store.state.username;
        return this.$store.getters.isLogin;
      }
    },
    methods: {
      login() {
        this.$store.commit('login');
      },
      loginAsync() {
        this.$store.dispatch('login');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
