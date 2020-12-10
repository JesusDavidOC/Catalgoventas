<template>
    <div>
        <div>
            
        </div>

        <div>
            <Header link1="Tiendas" link2="Perfil" link3="Cerrar sesión"></Header>
        </div>

        <section class="invitados contenedor-categorias">
            <h2>Categorías</h2>
            <ul class="lista-invitados clearfix">
                <li>
                    <div class="invitado">
                        <img src="../../img/moda.jpg" alt="Imagen Invitado 1">
                        <p>Moda</p>
                    </div>
                </li>
                <li>
                    <div class="invitado">
                        <img src="../../img/tecnologia.jpg" alt="Imagen Invitado 1">
                        <p>Tecnología</p>
                    </div>
                </li>
                <li>
                    <div class="invitado">
                        <img src="../../img/viveres.jpg" alt="Imagen Invitado 1">
                        <p>Viveres</p>
                    </div>
                </li>
                <li>
                    <div class="invitado">
                        <img src="../../img/hogar.jpg" alt="Imagen Invitado 1">
                        <p>Hogar</p>
                    </div>
                </li>
                <li>
                    <div class="invitado">
                        <img src="../../img/licores.jpg" alt="Imagen Invitado 1">
                        <p>Licores</p>
                    </div>
                </li>
                <li>
                    <div class="invitado">
                        <img src="../../img/otros.jpg" alt="Imagen Invitado 1">
                        <p>Otro</p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components: {
        Header
    }
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

</style>