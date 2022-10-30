<template>
  <header>
    <div id="app" class="app">
      <nav class="navbar navbar-expand-lg shadow p-3 bg-light ">
        <div class="container-fluid text-center ">
          <div class="col ">
            <a class="navbar-brand" href="home">
              <img src="@/images/logo2.png" alt="logo hotelia">
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse offcanvas offcanvas-start text-bg-dark bg-opacity-75"
            data-bs-scroll="true" id="navbarSupportedContent">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkLabel">MENU</h5>
            </div>
            <div class="btn gap-2 d-flex flex-row ">
              <div >
              <button type="button" v-on:click="loadHome" class="btn btn-outline-primary text-uppercase">Inicio</button>
              </div>
              <div > <button type="button" v-if="!is_auth" v-on:click="loadLogIn"
                class="btn btn-outline-primary text-uppercase">Alojamientos</button>
                </div>

              <div > <button type="button" v-if="!is_auth" v-on:click="loadLogIn"
                class="btn btn-outline-primary text-uppercase">Sobre Nosotros</button>
                </div>

              <div > <button type="button" v-if="!is_auth" v-on:click="loadLogIn"
                class="btn btn-outline-primary text-uppercase">Ingresar</button>
                </div>

              <div > <button type="button" v-if="!is_auth" v-on:click="loadSignUp"
                class="btn btn-outline-primary text-uppercase">Registrarse</button>
                </div>

              <div > <button type="button" v-if="is_auth" v-on:click="loadPerfil"
                class="btn btn-outline-primary text-uppercase">Perfil</button>
                </div>

              <div > <button type="button" v-if="is_auth" v-on:click="logOut"
                class="btn btn-outline-primary text-uppercase">Cerrar Sesion</button>
                </div>

            </div>
          </div>
        </div>

      </nav>
      <div class="main-component">
        <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp">
        </router-view>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'App',
    data: function () {
      return {
        is_auth: false,
      }
    },
    methods: {
      loadHome: function () {
        this.$router.push({
          name: "Home"
        });
      },
      loadLogIn: function () {
        this.$router.push({
          name: "Login"
        })
      },
      loadSignUp: function () {
        this.$router.push({
          name: "SignUp"
        })
      },
    }
  }
</script>