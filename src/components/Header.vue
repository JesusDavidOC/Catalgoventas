<template>
  <div class="barra">
    <div class="contenedor clearfix">
      <div class="logo">
        <img src="../../img/logo.png" alt="Logo" />
      </div>

      <div class="menu-movil">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="navegacion-principal clearfix">
        <router-link class="underlineHover a" to="/Index">{{
          link4
        }}</router-link>
        <router-link class="underlineHover a" to="/Tiendas">{{
          link1
        }}</router-link>
        <router-link class="underlineHover a" to="/Perfil">{{
          link2
        }}</router-link>
        <router-link class="underlineHover a" to="/">{{ link3 }}</router-link>
        <router-link v-if="link5 != ''" class="underlineHover a" to="/AñadirTienda">{{ link5 }}</router-link>
        <router-link v-if="link6 != ''" class="underlineHover a" to="/Añadir">{{ link6 }}</router-link>
      </nav>
    </div>
    <!--Contenedor-->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    logo: String,
    link1: String,
    link2: String,
    link3: String,
    link4: String,
    link5: '',
    link6: ''
  },
};
</script>

<style scoped>
.barra {
  background-color: #353535;
  padding: 80px 0;
  align-items: center;
}

.logo {
  width: 80%;
  float: left;
}

.logo img {
  width: 85%;
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 33%;
  }
}
/** Navegación principal **/

.navegacion-principal {
  display: none;
}

.navegacion-principal a {
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: #ffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: 20px;
}

.navegacion-principal a:last-child {
  border: 2px solid#f78604;
  color: #f78604;
}

.navegacion-principal a:last-child:hover {
  color: #fff;
}

.navegacion-principal a:hover {
  background-color: #f78604;
}

@media only screen and (min-width: 768px) {
  .navegacion-principal {
    width: 67%;
    float: right;
    text-align: right;
    display: block;
  }
  .navegacion-principal a {
    margin-right: 10px;
    padding: 1rem 1rem;
    display: inline-block;
    width: auto;
    text-align: center;
    margin-bottom: 0 10px 0 0;
  }
}
/** Menú movil **/

.menu-movil {
  width: 60px;
  display: block;
  float: right;
  text-align: right;
  margin-top: 12px;
}

.menu-movil:hover {
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .menu-movil {
    display: none;
  }
}

.menu-movil span {
  height: 8px;
  margin-bottom: 6px;
  background-color: #fff;
  display: block;
}
</style>