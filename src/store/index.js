import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, playload) { 
      console.log(state.token)   
      state.token = playload;
      localStorage.setItem('token', playload)      ;
      
    }
  },
  actions: {
    async login({ commit }, usuario) {
      var data = JSON.stringify({ mail: usuario.mail, pass: usuario.pass });

      var config = {
        method: "post",
        url: "http://localhost:8000/usuarios/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          commit('setToken', response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    }
  },
  modules: {
  },
})
