<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <h1>Registro de Usuario</h1>
      </div>
      <form id="frmRegistro" method="post" autocomplete="off">
        <input
          type="text"
          class="fadeIn second form-control"
          placeholder="Nombre"
          required=""
          v-model="usuario.name"
        />
        <input
          type="email"
          class="fadeIn second form-control"
          placeholder="Correo"
          required=""
          v-model="usuario.mail"
        />
        <input
          type="password"
          class="fadeIn third form-control"
          placeholder="Constraseña"
          required=""
          v-model="usuario.pass"
        />
        <input
          type="text"
          class="fadeIn third form-control"
          placeholder="Ciudad"
          required=""
          v-model="usuario.country"
        />
        <input
          type="text"
          class="fadeIn third form-control"
          placeholder="Teléfono"
          required=""
          v-model="usuario.phone"
        />

        <button class="fadeIn fourth" v-on:click.prevent="validar()">
          Registrar
        </button>
      </form>

      <div id="formFooter">
        <p>¿Ya estás registrado? Inicia sesión</p>
        <router-link class="underlineHover a" to="/Login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import store from "../store";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        name: "asdasdasd",
        mail: "asdaasdasdsd@gmail.com",
        pass: "12345678",
        country: "casa",
        phone: "12345678",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions(["login"]),
    validar() {
      if (this.usuario.name == "") {
        alert("El campo nombre no debe estar vacío");
      } else if (this.usuario.mail == "") {
        alert("El campo correo no debe estar vacío");
      } else if (this.usuario.pass == "") {
        alert("El campo contraseña no debe estar vacío");
      } else if (this.usuario.country == "") {
        alert("El campo ciudad no debe estar vacío");
      } else if (this.usuario.phone == "") {
        alert("El campo teléfono no debe estar vacío");
        if (isNaN(this.usuario.phone)) {
          alert("En el campo Teléfono debe ingresar un valor numérico");
        }
      } else {
        this.send();
      }
    },

    async send() {
      var data = JSON.stringify({
        name: this.usuario.name,
        count: { credit: 0 },
        mail: this.usuario.mail,
        pass: this.usuario.pass,
        country: this.usuario.country,
        phone: this.usuario.phone,
      });
      const passw = this.usuario.pass;
      var config = {
        method: "post",
        url: "http://localhost:8000/usuarios",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          response.data.user.pass = passw;
          store.dispatch("login", response.data.user);
          router.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* BASIC */

html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

.a {
  color: rgb(90, 88, 88);
  /*#92badd;*/
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #a5bdfa;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #d6dfec;
  border-top: 1px solid #dce8f1;
  padding: 15px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

button {
  background-color: #f78604;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
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

input[type="text"],
input[type="password"],
input[type="date"],
input[type="email"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="date"]:focus,
input[type="email"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder,
input[type="password"]:placeholder,
input[type="date"]:placeholder,
input[type="email"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  margin-top: 28px;
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */

.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #39d4e9;
  text-decoration: none;
}

.underlineHover:hover:after {
  width: 100%;
}

h1 {
  color: #fff;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 30%;
}
</style>