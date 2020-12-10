<template>
    <div>
        <div>
            <Header link1="Tiendas" link2="Perfil" link3="Cerrar sesión"></Header>
        </div>

        <div>
            <div class="contador parallax">
                <div class="contenedor">
                    <ul class="resumen-evento clearfix">
                        <li>
                            <img src="../../img/etiqueta.svg" alt="" class="icono">
                            <p>Excelentes precios</p>
                        </li>
                        <li>
                            <img src="../../img/compras.svg" alt="" class="icono">
                            <p>Compras seguras</p>
                        </li>
                        <li>
                            <img src="../../img/camion-de-reparto (1).svg" alt="" class="icono">
                            <p>Envíos rápidos</p>
                        </li>
                    </ul>
                </div>
                <!--Contenedor contador-->
            </div>
            <!--Contador-->
        </div>

        <section class="invitados contenedor-categorias">
            <h2>Categorías</h2>
            <ul class="lista-invitados clearfix">
                <li>
                    <a> 
                        <div class="invitado">
                            <img src="../../img/moda.jpg" alt="Imagen Moda">
                            <p>Moda</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="invitado">
                            <img src="../../img/tecnologia.jpg" alt="Imagen Tecnología">
                            <p>Tecnología</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="invitado">
                            <img src="../../img/viveres.jpg" alt="Imagen Viveres">
                            <p>Viveres</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="invitado">
                            <img src="../../img/hogar.jpg" alt="Imagen Hogar">
                            <p>Hogar</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="invitado">
                            <img src="../../img/licores.jpg" alt="Imagen Hogar">
                            <p>Licores</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div class="invitado">
                            <img src="../../img/otros.jpg" alt="Imagen Otros">
                            <p>Otros</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import Tlist from '../components/TiendasList'
import Header from '../components/Header'
export default {
    components: {
        Header,
        Tlist
    }, 
    computed: {},
    methods: {
        
    },

};

</script>

<style scoped>

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
        font-family: 'Oswald', sans-serif;
        font-size: 2.4rem;
        text-transform: uppercase;
        text-align: center;
    }
    
    h2::after {
        content: '';
        margin: 0 auto;
        background-image: url("../../img/separador.png");
        height: 30px;
        width: 100px;
        display: block;
    }
    
    h3 {
        font-size: 1.8rem;
        color: #fe4918;
        font-family: 'PT Sans', sans-serif;
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
    
    @media only screen and (min-width:400px) {
        .contenedor-categorias {
            width: 95%;
        }
    }
    
    @media only screen and (min-width:768px) {
        .contenedor-categorias {
            width: 100%;
        }
    }
    
    @media only screen and (min-width:992px) {
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
        color: #71B100;
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
        -webkit-transition: all .5s ease-in-out;
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
        font-family: 'Oswald', sans-serif;
        -webkit-transition: all .5s ease-in-out;
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
        -webkit-filter: brightness(.8);
        filter: brightness(.8);
    }
    
    .contador {
        position: relative;
        height: auto;
    }
    
    .contador::before {
        background-image: url("../../img/fondo.jpg");
        content: '';
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

</style>