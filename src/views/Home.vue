<template>
  <div class="home">
    <h1>Ruta protegida</h1>
    <button v-on:click="datosProtegidos()">data</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    async datosProtegidos() {
      console.log(this.token)
      var config = {
        method: "get",
        url: "http://localhost:8000/usuarios/" + this.token,
        headers: {},
        data: "",
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
