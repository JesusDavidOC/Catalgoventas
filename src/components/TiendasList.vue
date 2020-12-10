<template>
<div>
		<tr>
			<td>{{tienda.name}}</td>
			<td>{{tienda.category.name}}</td>
			<td>{{tienda.admin.name}}</td>
			<td>{{tienda.country}}</td>
			<td>
               <button
                class="boton boton-amarillo d-block"
                v-on:click="changeStatus()"
                >
                Ver productos
                </button>
			</td>
		</tr>
        <div class="">
            <div class="contenido-anuncio">
                <section v-if="status">
                    <div v-for="item in tienda.productos">            
                        <tproducto image="img" :name="item.name" :description="item.description" :price="item.price"/>
                    </div>
                </section>
            </div>
        </div>
</div>
</template>

<script>
import tproducto from "./TarjetaProducto";
export default {
    name: 't-list',
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
}
</script>

<style scoped>
	.text {
		padding: 10px 20px;
		margin: 0 auto;
	}

	button, .button {
      background-color: #f78604;
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      text-transform: uppercase;
      font-size: 12px;
      -webkit-box-shadow: 0 5px 15px 0 rgba(231, 117, 10, 0.4);
      box-shadow: 0 5px 15px 0 rgba(240, 137, 3, 0.4);
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

	td {
		padding: 20px;
	}

	*:focus {
      outline: none;
    }
</style>