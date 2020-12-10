<template>
  <div>
    <Header link4="Inicio" link1="Tiendas" link2="Perfil" link3="Cerrar sesión"></Header>
    <div class="row">
      <div class="col-sm-12">
        <router-link class="a button" to="/AñadirTienda">Vende tus productos</router-link>
      </div>
    </div>
    <div class="row">
      <div class="seccion contenedor">
        <h2 class="fw-300 centrar-texto">Productos</h2>

        <div class="contenedor-anuncios">
          <Tarjeta
            image="../../img/1.jpg"
            name="Camiseta Vue"
            description="Camiseta en algodon"
            :price="20.000"
            tienda="Camisetas Store"
          ></Tarjeta>
          <Tarjeta
            image="../../img/2.jpg"
            name="Camiseta Angular"
            description="Camiseta en algodon"
            :price="20.000"
            tienda="Tienda"
          ></Tarjeta>
          <Tarjeta
            image="../../img/3.jpg"
            name="Camiseta React"
            description="Camiseta en algodon"
            :price="20.000"
            tienda="Tienda 1"
          ></Tarjeta>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tarjeta from "../components/TarjetaProducto";
import { mapState } from "vuex";
import Header from "../components/Header";
export default {
  components: {
    Tarjeta,
    Header,
  },
  computed: {
    ...mapState(["tieneTienda"]),
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

div {
  font-family: "Lato", sans-serif;
}
.contenedor {
  width: 95%;
  max-width: 120rem;
  /* = 1200px*/
  margin: 0 auto;
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
  font-size: 2.6rem;
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

.d-block {
  display: block !important;
}

.contenido-centrado {
  max-width: 800px;
}

.button,
button {
  background-color: #f78604;
  border: none;
  color: white;
  padding: 15px 120px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 14px;
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

.button:hover,
button:hover {
  background-color: #f54a16;
}

.button:active,
button:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

@media (min-width: 768px) {
  .contenedor-anuncios {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* flex-wrap: wrap; */
  }
}

.anuncio {
  /* flex-grow felx-shrink flex-basis (orden)*/
  /* flex-shrink: 0;  Define si el contenido se debe hacer mas pequeño de ser posible, el default es 1 (si), se debe definir en 0 para que diga que no */
  /* flex-basis: calc(33.3% - 1rem); */
  background-color: #f5f5f5;
  border: 1px solid #b5b5b5;
  /* whidth style color */
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .anuncio {
    flex: 0 0 calc(33.3% - 1rem);
  }
}

.contenido-anuncio {
  padding: 2rem 4rem;
}

.contenido-anuncio h3 {
  margin: 0;
  font-size: 2rem;
}

.contenido-anuncio p {
  margin: 0;
  font-size: 15px;
}

.precio {
  color: #71b100;
  font-weight: 700;
}

*:focus {
  outline: none;
}
</style>