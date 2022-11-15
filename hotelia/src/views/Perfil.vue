<template>
  <div class="container-fluid p-5">
    <div class="card shadow">
      <div class="row">

        <div class="col-md-3 align-self-center">
          <div class="card-body p-5">
            <img src="@/images/LogoSolo.png" class="img-fluid" width="300" alt="foto_perfil">
          </div>
        </div>
        <div class="col-sm-8 align-self-center">
          <div class="card-body">
            <h1 class="card-title">{{user.account.Nombre }} {{ user.account.Apellido}}</h1>
            <hr>
            <div class="row ">
              <div class="col-lg-4">
                <h5>Correo Electronico</h5>
                <p><strong>{{user.account.Correo}}</strong></p>
              </div>
              <div class="col-lg-4">
                <h5>Telefono</h5>
                <p><strong>{{user.account.Telefono}}</strong></p>
              </div>
              <div class="col-lg-4">
                <h5>Ciudad</h5>
                <p><strong>{{user.account.Ciudad}}</strong></p>
              </div>
            </div>
            <hr>
            <div class="row justify-content-end ">
              <div class="col-lg-5">
                <button class="btn btn-outline-dark text-uppercase" type="button" id="button-addon2">editar</button>
              </div>
              <div class="col-lg-5 ">
                <button class="btn btn-outline-dark text-uppercase" type="button" id="button-addon2">ver mas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>

    <div class="row">
      <div class="col align-self-center">
        <div class="card shadow text-center p-2">
          <ul class="nav nav-tabs shadow-sm" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link text-dark active" id="paciente-tab" data-bs-toggle="tab"
                data-bs-target="#paciente-tab-pane" type="button" role="tab" aria-controls="paciente-tab-pane"
                aria-selected="true">Paciente</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-dark" id="Hotel-tab" data-bs-toggle="tab" data-bs-target="#Hotel-tab-pane"
                type="button" role="tab" aria-controls="Hotel-tab-pane" aria-selected="false">Hoteles</button>
            </li>
          </ul>
          <div class="tab-content shadow-sm" id="myTabContent">
            <div class="tab-pane fade" id="Hotel-tab-pane" role="tabpanel" aria-labelledby="Hotel-tab" tabindex="0">
              <div class="card m-3 shadow-sm" v-for="hotel in hoteles" :key="hotel.id">
                <div class="row justify-content-between">
                  <div class="col-md-2 align-self-center">
                    <div class="card-body p-3">
                      <img src="@/images/LogoSolo.png" class="img-fluid" width="100" alt="foto_perfil">
                    </div>
                  </div>
                  <div class="col-sm-10 align-self-center">
                    <div class="card-body">
                      <div class="row  ">
                        <div class="col-lg-4">
                          <h5 class="card-title text-uppercase">{{hotel.nombre_hotel }}</h5>
                        </div>
                        <div class="col-lg-8 align-self-center">
                          <div class="row gap-2 justify-content-lg-end">
                            <div class="col-lg-2 ">
                              <button class="btn btn-outline-dark text-uppercase" type="button">editar</button></div>
                            <div class="col-lg-3 ">
                              <button class="btn btn-outline-dark text-uppercase" type="button">Habitaciones</button></div>
                            <div class="col-lg-2 ">
                              <button class="btn btn-outline-dark text-uppercase" v-on:click="loadPerfilHotel(hotel.id,hotel.nombre_hotel)" type="button">ver</button></div>
                            <div class="col-lg-3 ">
                              <button class="btn btn-outline-dark text-uppercase" type="button">Desactivar</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import jwt_decode from "jwt-decode"
  import axios from 'axios'
  export default {
    name: 'Perfil',
    data: function () {
      return {
        hoteles:[],
        user: {
          username: "",
          account: {
            Nombre: "",
            Apellido: "",
            Telefono: "",
            Genero: "",
            TipoDocumento: "",
            NumeroDocumento: "",
            Direccion: "",
            Ciudad: "",
            FechaNacimiento: "",
            Correo: "",
          }
        }
      }
    },
    methods: {
      getDataUser: async function () {
        if (localStorage.getItem('token_access') === null || localStorage.getItem('token_refresh') === null) {
          this.$emit('logOut');
          return;
        }
        await this.verifyToken();
        let token = localStorage.getItem('token_access');
        let userId = jwt_decode(token).user_id.toString();
        axios.get(`https://back-end-hotelia.herokuapp.com/user/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then((result) => {
            this.user.account.Nombre = result.data.account.Nombre
            this.user.account.Apellido = result.data.account.Apellido
            this.user.account.Telefono = result.data.account.Telefono
            this.user.account.Genero = result.data.account.Genero
            this.user.account.TipoDocumento = result.data.account.TipoDocumento
            this.user.account.NumeroDocumento = result.data.account.NumeroDocumento
            this.user.account.Direccion = result.data.account.Direccion
            this.user.account.Ciudad = result.data.account.Ciudad
            this.user.account.FechaNacimiento = result.data.account.FechaNacimiento
            this.user.account.Correo = result.data.account.Correo
          })
          .catch(() => {
            this.$emit('logOut');
          })
      },
      getDataHotelAdmin: async function(){
        let token = localStorage.getItem('token_access');
        let userId = jwt_decode(token).user_id.toString();
        axios.get(`https://back-end-hotelia.herokuapp.com/hotel/user/${userId}`)
        .then((response)=>{
          this.hoteles=response.data
        })
        .catch(() => {
            this.$emit('logOut');
        });
        },
      loadPerfilHotel: function(idHotel,nomHotel){
        localStorage.setItem('idHotel',idHotel)
        localStorage.setItem('nombreHotel',nomHotel)
        console.log(localStorage.getItem('nombreHotel'))
        this.$router.push({name:"PerfilHotel"})
      },
      verifyToken: function () {
        return axios.post("https://back-end-hotelia.herokuapp.com/refresh/", {
            refresh: localStorage.getItem("token_refresh")
          }, {
            headers: {}
          })
          .then((result) => {
            localStorage.setItem("token_access", result.data.access);
          })
          .catch(() => {
            this.$emit('logOut');
          });
      }
    },
    created: async function () {
      this.getDataUser();
      this.getDataHotelAdmin();
    },
  }
</script>