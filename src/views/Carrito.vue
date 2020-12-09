<template>
    <div class="row contenedor">
        <div class="col-sm-12 seccion">
            <div class="table-responsive">
                <table class="table table-hover table-striped table-dark" id="dataTableTG">
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
                        <tr class="">
                            <td><img src="../../img/1.jpg" alt="Producto 1"></td>
                            <td class="text">Camiseta vue</td>
                            <td class="text">Camiseta de algodon</td>
                            <td class="text">20.000</td>
                            <td class="text">1</td>
                            <td>
                                <button class="btn btn-danger btn-sm">
                                <span class="fas fa-trash-alt">+</span>
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                <span class="fas fa-pen">-</span>
                                </button>
                                
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                <span class="fas fa-pen">Remover</span>
                                </button>
                                
                            </td>
                        </tr>
                        <tr class="">
                            <td><img src="../../img/2.jpg" alt="Producto 1"></td>
                            <td class="text">Camiseta Angular</td>
                            <td class="text">Camiseta de algodon</td>
                            <td class="text">20.000</td>
                            <td class="text">2</td>
                            <td>
                                <button class="btn btn-danger btn-sm">
                                <span class="fas fa-trash-alt">+</span>
                                </button>
                                
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                <span class="fas fa-pen">-</span>
                                </button>
                                
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                <span class="fas fa-pen">Remover</span>
                                </button>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-comprar">Comprar</button>
            </div>
        </div>
    </div>
</template>

<script>

   /* Vue.component('p-carrito', {
        data: function(){
            return {
                products: [
                    {image: '../../img/1.jpg', name: 'Camiseta Vue', description: 'Camiseta de algodon', price: 20.000, cant: 1},
                    {image: '../../img/2.jpg', name: 'Camiseta Angular', description: 'Camiseta de algodon', price: 20.000, cant: 3},
                    {image: '../../img/2.jpg', name: 'Camiseta React', description: 'Camiseta de algodon', price: 20.000, cant: 2}
                ]
            }
        },
        template: `
            <tr>
                <p-carrito-list 
                v-for="(producto, index) in products"
                :key="index"
                :image="producto.image"
                :name="producto.name"
                :description="producto.description"
                :price="producto.price"
                :cant="producto.cant">
                </p-carrito-list>
            </tr>
        `
    })

    Vue.component('p-carrito-list', {
       props: {
           image: String,
           name: String,
           description: String,
           price: Number,
           cant: Number
       },
        template: `
            <td><img src="{{image}}" alt="Producto 1"></td>
            <td>{{name}}</td>
            <td>{{descripton}}</td>
            <td>{{price}}</td>
            <td>{{cant}}</td>
        `

    })*/

    /*Vue.component('boton-mas', {
        data: function() {
            return {
                cant: 1
            }
        },
         template: `
            <td>{{cant}}</td>
            <td><button v-on:click="cant++">+</button></td>            
         `         
    })*/

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

    button {
      background-color: #f78604;
      border: none;
      color: white;
      padding: 15px 20px;
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

    thead {
        border: 2px solid #f54a16;
    }

    .btn-comprar {
        padding: 15px 90px;
    }

</style>