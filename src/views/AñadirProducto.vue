<template>
     <main class="contenedor seccion contenido-centrado">
        <h2 class="fw-300 centrar-texto">Llena el Formulario</h2>

        <form action="">
            <fieldset>

                <legend>Información del producto</legend>

                <lable for="name">Nombre:</lable>
                <input type="text" id="name" required>

                <lable for="desciption">Descripción:</lable>
                <input type="text" id="name" required>

                <lable for="price">Precio:</lable>
                <input type="Number" id="price" required>

                <lable for="amount">Cantidad disponible:</lable>
                <input type="Number" id="amount" required>

            </fieldset>
            <div class="col-sm-12">
                <button class="btn btn-comprar">Añadir</button>
                <router-link class="a button" to="/Principal">Atrás</router-link>
            </div>
        </form>
    </main>
</template>

<script>
export default {
    
}
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

    select {
        -webkit-appearance: none;
        /*Prefijo*/
        appearance: none;
    }

    textarea {
        height: 20rem;
    }

    .forma-contacto {
        max-width: 70rem;
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

    *:focus {
      outline: none;
    }
</style>