import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions: {
    login(context) {
      setTimeout(() => {
        context.commit('login');
      }, 1000)
    }
  },
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
    count: 1
  },

  mutations: {
    login(state) {
      state.loginFrag = true;
      state.user.name = '安详地笑了';
    }
  },
  strict: debug
})

