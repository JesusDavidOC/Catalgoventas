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
        <div class="row">
            <div class="col-sm-12">
                <router-link class="a button" to="/AñadirTienda">Vende tus productos</router-link>
            </div>
        </div>
        <section class="contenedor-categorias">
            <div class="contenedor-anuncios row">
                <div class="col-sm-4" v-for="item in tiendas" >
                    <TTienda :tienda="item" />
                </div>        
            </div>
        </section>
    </div>
</template>

<script>
import TTienda from '../components/tarjetaTienda'
import Tlist from '../components/TiendasList' 
import Header from '../components/Header'
import { mapState } from "vuex";
export default {
    data() {
        return {
        tiendas: [],
        temp: [],
        };
    },
    components: {
        Header,
        Tlist,
        TTienda,
    },
    computed: {
        ...mapState(["token", "tieneTienda"]),
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
        async getTiendas() {
        var config = {
            method: "get",
            url: "http://localhost:8000/tiendas/",
            headers: {},
            data: "",
        };
        var vm = this;

        axios(config)
            .then(function (response) {
            vm.tiendas = response.data;
            })
            .catch(function (error) {
            console.log(error);
            });
        },
    },
    created() {
        this.getTiendas();
    },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
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
        font-family: 'Lato', sans-serif;
    }
     h1 {
        font-size: 3.8rem;
    }

    h2 {
        font-size: 3.0rem;
    }

    h3 {
        font-size: 2.0rem;
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

    button, .button {
      background-color: #f78604;
      border: none;
      color: white;
      padding: 15px 120px;
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

    button:hover, .button:hover {
        background-color: #f54a16;
    }

    button:active, .button:active {
        -moz-transform: scale(0.95);
        -webkit-transform: scale(0.95);
        -o-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }
    
    .text {
        padding: 10px 20px;
        margin: 0 auto;
    }

    img {
        max-width: 50%;
    }
    
    *:focus {
      outline: none;
    }

    thead, tr, th {
        border: 2px solid #d6d1d0;
    }

    th {
        padding: 10px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        -webkit-box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        -moz-box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        margin-bottom: 50px;
    }

    html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

a:hover {
  cursor: pointer;
}

h2 {
  font-family: "Oswald", sans-serif;
  font-size: 2.4rem;
  text-transform: uppercase;
  text-align: center;
}

h2::after {
  content: "";
  margin: 0 auto;
  background-image: url("../../img/separador.png");
  height: 30px;
  width: 100px;
  display: block;
}

h3 {
  font-size: 1.8rem;
  color: #fe4918;
  font-family: "PT Sans", sans-serif;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.logo img {
  width: 30%;
}

.contenedor-header {
  width: 95%;
  max-width: 120rem;
  /* = 1200px*/
  margin: 0 auto;
}

.contenedor-categorias {
  width: 98%;
  margin: 0 auto;
}

.seccion {
  padding: 30px 0;
}

.seccion p {
  text-align: center;
}

@media only screen and (min-width: 400px) {
  .contenedor-categorias {
    width: 95%;
  }
}

@media only screen and (min-width: 768px) {
  .contenedor-categorias {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .contenedor-categorias {
    width: 90%;
    max-width: 1100px;
  }
}

/* Navegación */

.navegacion a {
  color: white;
  text-decoration: none;
  font-size: 2.2rem;
  /* = 18px */
  display: block;
}

@media (min-width: 768px) {
  .navegacion a {
    display: inline-block;
    font-size: 1.8rem;
    margin-right: 2rem;
  }
  .navegacion a:last-of-type {
    margin-right: 0px;
  }
}

.navegacion a:hover {
  /* Hover = pseudoselector o pseudoclase */
  color: #71b100;
}

/** Mobile Menú **/

.mobile-menu img {
  width: 5rem;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.navegacion {
  display: none;
}

@media (min-width: 768px) {
  .navegacion {
    display: block;
  }
}

.navegacion:target {
  display: block;
}

.lista-invitados li {
  padding: 10px;
  float: left;
}

@media only screen and (min-width: 480px) {
  .lista-invitados li {
    width: 50%;
  }
}

@media only screen and (min-width: 768px) {
  .lista-invitados li {
    width: 30%;
  }
}

.invitado {
  position: relative;
  overflow: hidden;
}

.invitado img {
  max-width: 100%;
  filter: gray;
  -webkit-filter: grayscale(1);
  -webkit-transition: all 0.5s ease-in-out;
}

.invitado:hover img {
  -webkit-filter: grayscale(0);
  -webkit-transform: scale(1.1);
}

.invitado p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px 10px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.55);
  width: 100%;
  text-align: left;
  color: #fe4918;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  -webkit-transition: all 0.5s ease-in-out;
}

.invitado:hover p {
  bottom: -80px;
  opacity: 0;
}

.clearfix::before,
.clearfix::after {
  content: " ";
  display: table;
}

.clearfix::after {
  clear: both;
}

.parallax::before {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
}

.contador {
  position: relative;
  height: auto;
}

.contador::before {
  background-image: url("../../img/fondo.jpg");
  content: "";
}

.resumen-evento {
  position: relative;
  padding: 120px 0;
}

.resumen-evento li {
  width: 50%;
  float: left;
  text-align: center;
  color: #fe4918;
  text-transform: uppercase;
  font-family: var(--o);
  font-size: 24px;
}

@media only screen and (min-width: 768px) {
  .resumen-evento li {
    width: 33.3%;
  }
}

.icono {
  width: 50px;
}

.numero {
  font-family: var(--o);
  color: var(--naranja);
  font-size: 4rem;
  display: block;
  margin: 0 0 10px 0;
}

.anuncio {
    /* flex-grow felx-shrink flex-basis (orden)*/
    /* flex-shrink: 0;  Define si el contenido se debe hacer mas pequeño de ser posible, el default es 1 (si), se debe definir en 0 para que diga que no */
    /* flex-basis: calc(33.3% - 1rem); */
    background-color: #f5f5f5;
    border: 1px solid #b5b5b5;
    /* whidth style color */
    margin-bottom: 2rem;
    align-items: center;
}

@media (min-width: 768px) {
    .anuncio {
        flex: 0 0 calc(33.3% - 1rem);
    }
}

.contenido-anuncio {
  padding: 2rem 2rem;
}

.contenido-anuncio h3 {
  margin: 0;
  font-size: 2rem;
}

.contenido-anuncio p {
  margin: 0;
  font-size: 15px;
}

.card {
  border: 1px solid #e1e1e1;
  background-color: white;
  padding: 10px 0;
  text-align: center;
  transition: all .3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
  border: 1px solid  #fe4918;
  box-shadow: 0px 0px 50px #666;
}


@media (min-width: 768px) {
  .contenedor-anuncios {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* flex-wrap: wrap; */
  }
}
</style>