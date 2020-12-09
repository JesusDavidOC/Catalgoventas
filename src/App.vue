<template>
  <div id="app">
    <div id="nav">    
      <router-link to="/">Home</router-link> |
      <router-link to="/Login">Login</router-link> |
<<<<<<< HEAD
      <router-link to="/Principal">Tienda</router-link> |
      <router-link to="/Carrito">Carrito</router-link>
=======
      <router-link to="/Principal">Store</router-link>|
      <router-link to="/Registro">Register</router-link> 
>>>>>>> e84c394a6e730c80bbb0f49ee60ef218ea90c639
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['getToken'])
  }, 
  created(){
    this.getToken();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
