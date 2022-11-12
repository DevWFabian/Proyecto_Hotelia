<template>
  <header>
    <div id="app" class="app">
      <nav class="navbar navbar-expand-lg shadow-lg p-3 bg-info bg-opacity-50 ">
        <div class="container-fluid text-center ">
          <div class="col ">
            <router-link class="navbar-brand" to="/home">
              <img src="@/images/logo2.png" alt="logo hotelia">
            </router-link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse offcanvas offcanvas-start d-flex flex-column align-items-stretch text-bg-dark bg-opacity-75"
            data-bs-scroll="true" id="navbarSupportedContent">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title " id="offcanvasDarkLabel">MENU</h5>
              <button type="button" class="btn-close btn-close-white " data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <ul class="navbar-nav  gap-2 d-flex align-items-stretch justify-content-end">
              <button type="button" v-on:click="loadHome" class="btn btn-outline-dark text-uppercase">Inicio</button>
              <button type="button" v-on:click="loadHoteles"
                class="btn btn-outline-dark text-uppercase">Hoteles</button>
              <button type="button" v-on:click="loadNosotros"
                class="btn btn-outline-dark text-uppercase">Nosotros</button>
              <button type="button" v-if="!is_auth" v-on:click="loadLogIn"
                class="btn btn-outline-dark text-uppercase">Ingresar</button>
              <button type="button" v-if="!is_auth" v-on:click="loadSignUp"
                class="btn btn-outline-dark text-uppercase">Registrarse</button>
              <div class="dropdown-center" v-if="is_auth">
                <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  MENU
                </button>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <li><button v-if="is_auth" v-on:click="loadPerfil"
                      class="dropdown-item text-uppercase">Perfil</button></li>
                  <li><button v-if="is_auth" v-on:click="loadReserva"
                      class="dropdown-item text-uppercase">Reservas</button></li>
                  <li><button v-if="is_auth" v-on:click="logOut" 
                  class="dropdown-item text-uppercase">Cerrar Sesion</button></li>
                </ul>
              </div>
            </ul>



          </div>
        </div>

      </nav>
      <div class="main-component">
        <router-view v-on:completedLogin="completedLogin" v-on:completedSignUp="completedSignUp">
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
      verifyAuth: function () {
        this.is_auth = localStorage.getItem('isAuth') || false
        if (this.is_auth == false)
          this.$router.push({
            name: 'Home'
          })
        else
          this.$router.push({
            name: 'Home'
          })
      },
      logOut: function () {
        localStorage.clear();
        this.verifyAuth();
      },
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
      loadHoteles: function () {
        this.$router.push({
          name: "Hoteles"
        })
      },
      loadNosotros: function () {
        this.$router.push({
          name: "Nosotros"
        })
      },
      completedLogin: function (data) {
        localStorage.setItem('isAuth', true);
        localStorage.setItem('username', data.username);
        localStorage.setItem('token_access',data.token_access);
        localStorage.setItem('token_refresh',data.token_refresh);
        alert('Autenticacion Exitosa')
        this.verifyAuth();
      },
      completedSignUp: function(data){
        alert('Registro exitoso')
        this.completedLogin(data)
      }
    }
  }
</script>