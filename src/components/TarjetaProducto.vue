<template>
    <div class="anuncio">
           
            <div class="contenido-anuncio">
              <h3>{{name}}</h3>
              <p>{{description}}</p>
              <p class="precio">{{price}}</p>
              <button class="boton boton-amarillo d-block">
                Añadir al carrito
              </button>
            </div>
          </div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: {
        image: String,
        name: String,
        description: String,
        price: Number
    }
}
</script>