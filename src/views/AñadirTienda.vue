<template>
  <div>
    <Header link1="Tiendas" link2="Perfil" link3="Cerrar sesión"></Header>
    <div class="contenedor seccion contenido-centrado">
      <form action="">
        <fieldset>
          <legend>Información de la tienda</legend>

          <label for="name">Nombre:</label>
          <input type="text" id="name" required="" v-model="tienda.name" />

          <label for="desciption">Categoría:</label>
          <select id="opciones" required="" v-model="tienda.category">
            <option value="" disabled selected>-- Seccione --</option>
            <option value="Moda">Moda</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Viveres">Viveres</option>
            <option value="Hogar">Hogar</option>
            <option value="Licores">Licores</option>
            <option value="Otros">Otro</option>
          </select>

          <label for="country">Ciudad:</label>
          <input
            type="text"
            id="country"
            required=""
            v-model="tienda.country"
          />
        </fieldset>
      </form>
      <div class="">
        <router-link class="a button" to="/Principal">Atrás</router-link>
        <button v-on:click="validar()">Registrar tienda</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      tienda: {
        name: "",
        category: "",
        country: "",
      },
    };
  },
  computed: {},
  methods: {
    validar() {
      if (this.tienda.name == "") {
        alert("El campo Nombre no debe estar vacío");
      } else if (this.tienda.category == "") {
        alert("Debe seleccionar una categoría");
      } else if (this.tienda.country == "") {
        alert("El campo Ciudad no debe estar vacío");
      } else {
        this.añadir();
      }
    },
    añadir() {
      var data = JSON.stringify({
        name: this.tienda.name,
        productos: [],
        admin: {},
        category: { name: this.tienda.category },
        country: this.tienda.country,
      });

      var config = {
        method: "post",
        url: "http://localhost:8000/tiendas/" + localStorage.getItem("token"),
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          router.push("/AñadirProducto");
        })
        .catch(function (error) {
          console.log(error);
        });
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