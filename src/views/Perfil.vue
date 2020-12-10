<template>
    <div>
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
        </div>
        <b-container>
            <b-row>
                <b-col :sm="12">
                {{ usuario.nombreUsuario }}
                {{ usuario.correo }}
                {{ usuario.contrasena }}
                {{ usuario.ciudad }}
                {{ usuario.telefono }}
                </b-col>
            </b-row>
        </b-container>

        <div>        
            <div class="contenedor">
                <fieldset>  
                    <legend>Datos personales</legend>  
                    <div class="col-sm-12 seccion">
                        <div class="table-responsive">
                            <table class="table table-hover table-striped table-dark" id="dataTableTG">
                                <thead class="contenedor-Thead">
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Contraseña</th>
                                        <th>Ciudad</th>
                                        <th>Teléfono</th>
                                    </tr>
                                </thead>
                                <tbody class=" ">
                                    <DatosUser :name="usuario.nombreUsuario" :mail="usuario.correo" :pass="usuario.contrasena" :country="usuario.ciudad" :phone="usuario.telefono" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <router-link to="/Editar" class="button">Editar</router-link>
                </fieldset>        
            </div>
        </div>

        <div>
            <div class="contenedor">
                <fieldset>
                     <legend>Cuenta</legend>
                     <div class="col-sm-12 seccion">
                        <div class="table-responsive">
                            <table class="table table-hover table-striped table-dark" id="dataTableTG">
                                <thead class="contenedor-Thead">
                                    <tr>
                                        <th>Deuda</th>
                                    </tr>
                                </thead>
                                <tbody class=" ">
                                    <tr>
                                        <td>90.000</td>
                                        <td><button class="btn-abonar">Abonar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

        <div>        
            <div class="contenedor">
                <fieldset>  
                    <legend>Tienda</legend>  
                    <div class="col-sm-12 seccion">
                        <div class="table-responsive">
                            <table class="table table-hover table-striped table-dark" id="dataTableTG">
                                <thead class="contenedor-Thead">
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Categoría</th>
                                        <th>Ciudad</th>
                                    </tr>
                                </thead>
                                <tbody class=" ">
                                    <TiendaUser :name="tienda.nombreTienda" :category="tienda.categoria.name" :country="tienda.ciudad"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <router-link to="/ProductosUser" class="button">Ver Productos</router-link>
                </fieldset>        
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TiendaUser from '../components/TiendaUser'
import DatosUser from '../components/DatosUser' 
import Header from '../components/Header'
import { mapState } from "vuex";
export default {
    components: {
        TiendaUser,
        DatosUser,
        Header
    },
    data() {
        return {
            tienda: {
                nombreTienda: "",
                categoria: "",
                ciudad: "",
            },
            usuario: {
                nombreUsuario: "",
                correo: "",
                contrasena: "",
                ciudad: "",
                telefono: "",
            },
        };
    },
    computed: {
        ...mapState(["token", "tieneTienda"]),
    },
    methods: {
        getTienda() {
            var data = "";

            var config = {
                method: "get",
                url: "http://localhost:8000/tiendas/" + localStorage.getItem("token"),
                headers: {
                "Content-Type": "application/json",
                },
                data: data,
            };

            const vm = this;
            axios(config)
                .then(function (response) {          
                vm.tienda.nombreTienda = response.data.name;
                vm.tienda.categoria = response.data.category;
                vm.tienda.ciudad = response.data.country;
                })
                .catch(function (error) {
                console.log(error);
                });
        },
        
        getUser() {
            var data = "";

            var config = {
                method: "get",
                url: "http://localhost:8000/usuarios/" + localStorage.getItem("token"),
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            const vm = this;
            axios(config)
                .then(function (response) {          
                vm.usuario.nombreUsuario = response.data.nombre;
                vm.usuario.correo = response.data.correo;
                vm.usuario.contrasena = response.data.contrasena;
                vm.usuario.ciudad = response.data.ciudad;
                vm.usuario.telefono = response.data.telefono;
                })
                .catch(function (error) {
                console.log(error);
                });
        },
    },
    created() {
        this.getTienda();

        this.getUser();
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
    .contenedor legend{
        text-align: left;
        font-size: 30px;
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

    .button, button {
      background-color: #f78604;
      border: none;
      color: white;
      padding: 15px 90px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      text-transform: uppercase;
      font-size: 12px;
      -webkit-box-shadow: 0 10px 30px 0 rgba(231, 117, 10, 0.4);
      box-shadow: 0 10px 30px 0 rgba(240, 137, 3, 0.4);
      -webkit-border-radius: 5px 5px 5px 5px;
      border-radius: 5px 5px 5px 5px;
      margin: 5px 18px 20px 20px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .button:hover, button:hover {
        background-color: #f54a16;
    }

    .button:active, button:hover {
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
        border-collapse: collapse;
        -webkit-box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        -moz-box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        box-shadow: 17px 21px 5px -4px rgba(5, 5, 5, 0.616);
        margin-bottom: 50px;
    }
    fieldset {
        margin-top: 40px;
        margin-bottom: 50px;
    }

    table {
        width: 100%;
    }

    .btn-abonar {
        padding: 10px 20px;
    }
</style>