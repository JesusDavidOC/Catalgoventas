<template>
    <div>
        <Header link1="Tiendas" link2="Perfil" link3="Cerrar sesión"></Header>
        <div>        
            <div class="contenedor-tienda">
                <fieldset>  
                    <legend>Datos de la tienda</legend>  
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
                                    <TiendaUser name="Camisetas store" category="Moda" country="Manizales"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <router-link to="/ProductosUser" class="button">Ver Productos</router-link>
                </fieldset>        
            </div>
        </div>
        <div class="contenedor seccion contenido-centrado">

            <form action="">
                <fieldset>

                    <legend>Información del producto</legend>

                    <label for="name">Imágen:</label>
                    <div class="forma-contacto">
                        <div class="image"><input type="text" id="name" required="" v-model="producto.image"></div>
                        <button class="btn-seleccionar">Seleccionar</button>
                    </div>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" required="" v-model="producto.name">

                    <label for="desciption">Descripción:</label>
                    <input type="text" id="descrption" required="" v-model="producto.description">

                    <label for="price">Precio:</label>
                    <input type="Number" id="price" required="" v-model="producto.price">

                    <label for="amount">Cantidad disponible:</label>
                    <input type="Number" id="amount" required="" v-model="producto.amount">

                    <div class="">
                        <router-link class="a button" to="/Principal">Atrás</router-link>
                        <button class="btn btn-comprar" v-on:click="validar()">Añadir</button>
                    </div>

                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TiendaUser from '../components/TiendaUser'
import Header from '../components/Header'
export default {
    components: {
        Header,
        TiendaUser
    },
    data() {
        return {
            producto:{
                image: "",
                name: "",
                description: "",
                price: "",
                cant: ""
            }
        };
    },
    computed: {},
    methods: {

    validar() {
        if(this.producto.image==""){
            alert("Debe seleccionar una imágen");
        }
        if(this.producto.name==""){
            alert("El campo Nombre no debe estar vacío");
        }
        if(this.productousuario.description==""){
            alert("El campo Descripción no debe estar vacío");
        }
        if(this.producto.price==""){
            alert("El campo Precio no debe estar vacío");
        }else if(this.producto.price!=Number){
            alert("En el campo Precio debe ingresar un valor numérico");
        }
        if(this.producto.cant==""){
            alert("El campo Cantidad no debe estar vacío");
        }else if(this.producto.cant!=Number){
            alert("En el campo Cantidad debe ingresar un valor numérico");
        }
    },
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

    .contenedor legend, .contenedor label {
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

    form {
        margin-bottom: 20px;
        width: 100%;
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

    button, .button {
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

    .btn-seleccionar {
        padding: 10px 20px;
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

    .contenedor-tienda {        
        width: 85%;
        max-width: 120rem;
        /* = 1200px*/
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
    }

    .contenedor-tienda legend{
        text-align: left;
        font-size: 30px;
    }

</style>