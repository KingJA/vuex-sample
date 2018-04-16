import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions: {},
  getters: {
    username: function (state) {
      return state.user.name;
    },
    isLogin: state => state.loginFrag
  },
  state: {
    user: {
      name: '游客',
      level: 0
    },
    loginFrag: false,
    count:1
  },

  mutations: {
    login: function (state, isLogin) {
      state.loginFrag = isLogin;
    }
  },
  strict: debug
})

