import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        tieneTienda: false,
        carrito: []
    },
    mutations: {
        setToken(state, playload) {
            state.token = playload;
            localStorage.setItem('token', playload);

        },
        setTieneTienda(state, playload) {
            state.tieneTienda = playload
        },
        anadirItemCarrito(state, playload) {
            var bandera = -1;
            for (let index = 0; index < state.carrito.length; index++) {
                const element = state.carrito[index];
                if (playload.name == element.name && playload.tienda == element.tienda) {
                    bandera = index
                    break;
                }
            }
            if (bandera == -1) {
                state.carrito.push({ name: playload.name, tienda: playload.tienda, cantidad: 1 })
            } else {
                state.carrito[bandera].cantidad = state.carrito[bandera].cantidad + 1 
            }


        }
    },
    actions: {
        async login({ commit }, usuario) {
            var data = JSON.stringify({ mail: usuario.mail, pass: usuario.pass });
            console.log(usuario);
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
        },
        async tieneTienda({ commit }, token) {
            var data = "";

            var config = {
                method: 'get',
                url: 'http://localhost:8000/tiendas/' + token,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    if (response.data != '') {
                        commit('setTieneTienda', true)
                    } else {
                        commit('setTieneTienda', false)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        async getTienda(token) {
            var data = "";

            var config = {
                method: 'get',
                url: 'http://localhost:8000/tiendas/' + token,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        anadirCarrito({ commit }, producto) {
            commit('anadirItemCarrito', producto)
        }
    },


    modules: {

    },
})