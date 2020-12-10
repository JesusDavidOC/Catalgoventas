<template>
  <section>
    <div class="anuncio card">
      <img src="../../img/icono_4.png" alt="" />
      <div class="contenido-anuncio">
        <h3>{{ tienda.name }}</h3>
        <p>{{ tienda.category.name }}</p>
        <p>{{ tienda.country }}</p>
        <p>{{ tienda.admin.mail }}</p>
        <button
          class="boton boton-amarillo d-block"
          v-on:click="changeStatus()"
        >
          Ver productos
        </button>
        <section v-if="status">
            <div v-for="item in tienda.productos">            
            <tproducto image="img" :name="item.name" :description="item.description" :price="item.price"/>
            </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import tproducto from "./TarjetaProducto";
export default {
  name: "Tarjeta",
  components: {
    tproducto,
  },
  props: {
    tienda: Object,
  },
  data() {
    return {
      status: false,
    };
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
      console.log(this.status);
    },
  },
};
</script>

<style scoped>
.button,
button {
  background-color: #f78604;
  border: none;
  color: white;
  padding: 15px 80px;
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

img {
  width: 20%;
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

.precio {
  color: #71b100;
  font-weight: 700;
}

*:focus {
  outline: none;
}

.card {
  border: 1px solid #e1e1e1;
  background-color: white;
  padding: 10px 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
  border: 1px solid var(--naranja);
  box-shadow: 0px 0px 50px #666;
}
</style>