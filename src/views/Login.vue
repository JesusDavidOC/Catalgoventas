<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="usuario" />
    <input type="text" v-model="pass" />
    <button v-on:click="send()">hola</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: "palasque123sea@gmail1.com",
      pass: "palas",
    };
  },
  computed: {},
  methods: {
    send() {
      var data = JSON.stringify({ mail:this.usuario, pass: this.pass });

      var config = {
        method: "post",
        url: "http://localhost:8000/usuarios/login",
        headers: {
          "Content-Type": "application/json",
        },
        data:data        
      };

      axios(config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>