<template>
  <div>
    <Header
      link4="Inicio"
      link1="Tiendas"
      link2="Perfil"
      link3="Cerrar sesión"
    ></Header>
    <div class="row contenedor">
      <div class="col-sm-12 seccion">
        <div class="table-responsive">
          <table
            class="table table-hover table-striped table-dark"
            id="dataTableTG"
          >
            <thead class="contenedor-Thead">
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Añadir</th>
                <th>Quitar</th>
                <th></th>
              </tr>
            </thead>
            <tbody class=" ">
              <Pcarrito
                v-for="(item, index) in productos"
                :producto="item"
                @suma="suma(index)"
                @resta="resta(index)"
              />
            </tbody>
          </table>
          <button class="btn btn-comprar" v-on:click="realizarCompra()">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Pcarrito from "../components/CarritoList";
import Header from "../components/Header";
export default {
  components: {
    Pcarrito,
    Header,
  },
  mutations: {},

  computed: {
    ...mapState(["carrito", "token"]),
  },
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    ...mapMutations(["getCantidad"]),

    async comprar(name1, namep1, cantidad1, token1, monto1) {
      var data = JSON.stringify({
        name: name1,
        venderProducto: true,
        namep: namep1,
        cantidad: Number(cantidad1),
        token: token1,
        monto: monto1,
      });
      var config = {
        method: "put",
        url: "http://localhost:8000/tiendas/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    realizarCompra() {
      for (let index = 0; index < this.carrito.length; index++) {
        const element = this.carrito[index];        
        this.comprar(
          element.tienda,
          element.name,
          element.cantidad,
          this.token,
          Number(this.productos[index].price)
        );
      }
    },
    async getProducto(producto, tienda) {
      var config = {
        method: "get",
        url: "http://localhost:8000/productos/" + tienda + "/" + producto,
        headers: {},
        data: "",
      };
      var vm = this;
      var cant = this.getCantidad(producto, tienda);
      axios(config)
        .then(function (response) {
          var respon = response.data;
          respon.cantidad = cant;
          console.log(respon);
          vm.productos.push(respon);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    suma(pos) {
      this.resta(pos);
      this.productos[pos].cantidad = this.productos[pos].cantidad + 2;
    },
    resta(pos) {
      this.productos[pos].cantidad = this.productos[pos].cantidad - 1;
    },
    getCantidad(producto, tienda) {
      for (let index = 0; index < this.carrito.length; index++) {
        const element = this.carrito[index];
        if (element.name == producto && element.tienda == tienda)
          return element.cantidad;
      }
    },
  },
  created() {
    for (let index = 0; index < this.carrito.length; index++) {
      const element = this.carrito[index];
      this.getProducto(element.name, element.tienda);
    }
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
.contenedor {
  width: 95%;
  max-width: 120rem;
  /* = 1200px*/
  margin: 0 auto;
  font-family: "Lato", sans-serif;
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

button {
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
  margin: 15px 18px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #f54a16;
}

button:active {
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

thead,
tr,
th {
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
</style>