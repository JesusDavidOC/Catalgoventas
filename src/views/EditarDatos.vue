<template>
  <div>
    <div v-if="tieneTienda">
      <Header
          link4="Inicio"
          link1="Tiendas"
          link2="Perfil"
          link3="Cerrar sesión"
          link6="Administra tu tienda"
      ></Header>
      </div>
      <div v-if="!tieneTienda">
      <Header
          link4="Inicio"
          link1="Tiendas"
          link2="Perfil"
          link3="Cerrar sesión"
          link5="Vende tus productos"
      ></Header>
  </div>
    <div class="contenedor seccion contenido-centrado">
      <form action="">
        <fieldset>
            <legend>Datos</legend>

            <label for="name">Nombre:</label>
            <input 
                type="text" 
                id="name" 
                required=""
                :value="usuario.name"
            />

            <label for="mail">Mail:</label>
            <input 
                type="email" 
                id="mail" 
                required=""
                :value="usuario.mail"
            />

            <label for="pass">Contraseña:</label>
            <input 
                type="password" 
                id="pass" 
                required=""
                :value="usuario.pass"
            />

            <label for="country">Ciudad:</label>
            <input
                type="text"
                id="country"
                required=""
                :value="usuario.country"
            />
        </fieldset>
      </form>
      <div class="">
        <router-link class="a button" to="/Perfil">Atrás</router-link>
        <button v-on:click="validar()">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Header from "../components/Header";
import { mapState } from "vuex";
export default {
  components: {
    Header,
  },
  data() {
    return {
      usuario: {
        name: "",
        mail: "",
        pass: "",
        country: "",
        phone: "",
      },
    };
  },
  computed: {
    ...mapState(["tieneTienda"]),
  },
  methods: {
    validar() {
      if (this.usuario.name == "") {
        alert("El campo nombre no debe estar vacío");
      } else if (this.usuario.mail == "") {
        alert("El campo correo no debe estar vacío");
      } else if (this.usuario.pass == "") {
        alert("El campo contraseña no debe estar vacío");
      } else if (this.usuario.country == "") {
        alert("El campo ciudad no debe estar vacío");
      } else if (this.usuario.phone == "") {
        alert("El campo teléfono no debe estar vacío");
        if (isNaN(this.usuario.phone)) {
          alert("En el campo Teléfono debe ingresar un valor numérico");
        }
      } else {
        this.send();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap");
*,
*:before,
*:after {
  box-sizing: inherit;
}

.contenedor {
  width: 95%;
  max-width: 120rem;
  /* = 1200px*/
  margin: 0 auto;
  font-family: "Lato", sans-serif;
}

.contenedor legend,
.contenedor label {
  text-align: left;
}

.a {
  text-decoration: none;
  color: white;
}

h1 {
  font-size: 3.8rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 2rem;
}

.seccion {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.fw-300 {
  font-weight: 300;
}

.centrar-texto {
  text-align: center;
}

.contenido-centrado {
  max-width: 800px;
}

form {
  margin-bottom: 20px;
}

form p {
  font-size: 1.5rem;
  color: #4f4f4f;
  margin: 2rem 0 2rem 0;
}

legend {
  font-size: 2rem;
  color: #4f4f4f;
}

label {
  font-weight: 700;
  display: block;
  /* Toma todo el espacio disponible */
}

input:not([type="submit"]),
textarea,
select {
  padding: 1rem;
  display: block;
  width: 95%;
  background-color: #e1e1e1;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
}

input[type="radio"] {
  width: auto;
  margin: 0;
}

.image {
  width: 80%;
}

select {
  -webkit-appearance: none;
  /*Prefijo*/
  appearance: none;
}

textarea {
  height: 20rem;
}

.forma-contacto {
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button,
.button {
  background-color: #f78604;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(231, 117, 10, 0.4);
  box-shadow: 0 10px 30px 0 rgba(240, 137, 3, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 15px 18px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button:hover,
.button:hover {
  background-color: #f54a16;
}

button:active,
.button:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

.btn-seleccionar {
  padding: 10px 20px;
}

*:focus {
  outline: none;
}
</style>