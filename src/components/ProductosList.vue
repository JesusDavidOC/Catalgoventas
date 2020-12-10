<template>
		<tr>
			<td><img src="../../img/7.jpg" alt="Producto 1"></td>
			<td>{{name}}</td>
			<td>{{description}}</td>
			<td>{{price}}</td>
			<td>{{cant}}</td>
		</tr>
</template>

<script>
export default {
	name: 'p-list',
	props: {
		image: String,
		name: String,
		description: String,
		price: Number,
		cant: Number
	}
}
</script>

<style scoped>
	.text {
		padding: 10px 20px;
		margin: 0 auto;
	}

	img {
		max-width: 50%;
		padding: 0 0 0 0;
		margin: 0 auto;
	}
	button {
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
	  margin-top: 50px;
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

	td {
		padding: 20px;
	}

	*:focus {
      outline: none;
    }
</style>