<template>
  <b-container class="home">
    <b-row>
      <h1>Ruta protegida</h1>
      <b-row>
        <div class="col-sm-2">
          <b-button v-if="tieneTienda">Administra tu tienda</b-button>
          <b-button v-if="!tieneTienda">Crea tu tienda</b-button>
        </div>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["token", 'tieneTienda']),  
  },
  methods: {
    async datosProtegidos() {
      console.log(this.token);
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
