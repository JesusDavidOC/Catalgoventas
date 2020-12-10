<template>
  <b-container class="home">
    <b-row>      
      <b-row>
        <div class="col-sm-2"  v-if="tieneTienda">
          <b-button>Administra tu tienda</b-button>        
        </div>
        <div class="col-sm-2"  v-if="!tieneTienda">
          <b-button>Vende tus productos</b-button>        
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
