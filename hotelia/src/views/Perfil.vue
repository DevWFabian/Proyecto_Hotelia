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
                <button class="btn btn-outline-dark text-uppercase" type="button" data-bs-target="#editarPerfil"
                  data-bs-toggle="modal">editar</button>
                <div class="modal fade" id="editarPerfil" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" aria-hidden="true">
                  <formPutPerfil />
                </div>
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
              <button class="nav-link text-dark active" id="Hotel-tab" data-bs-toggle="tab"
                data-bs-target="#Hotel-tab-pane" type="button" role="tab" aria-controls="Hotel-tab-pane"
                aria-selected="false">Hoteles</button>
            </li>

          </ul>
          <div class="tab-content shadow-sm" id="myTabContent">
            <div class="tab-pane fade show active" id="Hotel-tab-pane" role="tabpanel" aria-labelledby="Hotel-tab"
              tabindex="0">
              <div class="card m-3 shadow-sm">
                <div class="card-body ">
                  <div class="row justify-content-end">
                    <div class="col-md-4">
                      <button class="btn btn-outline-success text-uppercase" type="button"
                        data-bs-target="#formPosthotel" data-bs-toggle="modal">añadir hotel</button>
                      <div class="modal fade" id="formPosthotel" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-hidden="true">
                        <formPostHotel></formPostHotel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" card-body">
                <div class=" accordion accordion-flush" id="accordionFlushExample">
                  <div class="card m-3 shadow-sm accoridon-item" v-for="hotel in hoteles" :key="hotel.id">
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
                                  <button class="btn btn-outline-dark text-uppercase" type="button"
                                    :data-bs-target="'#editarHotel'+hotel.id" data-bs-toggle="modal">editar</button>
                                  <div class="modal fade" :id="'editarHotel'+hotel.id" data-bs-backdrop="static"
                                    data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                                    <formPutHotel v-bind:id-hotel="hotel.id"></formPutHotel>
                                  </div>
                                </div>
                                <div class="col-lg-3 ">
                                  <button class="btn btn-outline-dark text-uppercase collapsed"
                                    v-on:click="getDataHabitacion(hotel.id)" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#habitacion-collapse'+hotel.id" aria-expanded="false">
                                    Habitaciones
                                  </button>
                                </div>

                                <div class="col-lg-2 ">
                                  <button class="btn btn-outline-dark text-uppercase"
                                    v-on:click="loadPerfilHotel(hotel.id,hotel.nombre_hotel)" type="button">ver</button>
                                </div>
                                <div class="col-lg-3 ">
                                  <button class="btn btn-outline-dark text-uppercase" type="button">Desactivar</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div :id="'habitacion-collapse'+hotel.id" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <hr>
                        <div class=" card-body">
                          <div class="row justify-content-end">
                            <div class="col-md-4">

                              <button class="btn btn-outline-success text-uppercase" type="button"
                                :data-bs-target="'#formPostHabitacion'+hotel.id" data-bs-toggle="modal">añadir
                                habitacion</button>

                              <div class="modal fade" :id="'formPostHabitacion'+hotel.id" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                                <formPostHabitacion v-bind:id-hotel="hotel.id"></formPostHabitacion>
                              </div>
                            </div>
                          </div>
                          <div class="card m-3 shadow-sm" v-for="habitacion in habitaciones" :key="habitacion.id">
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
                                      <h5 class="card-title text-uppercase">{{habitacion.nombre}}</h5>
                                    </div>
                                    <div class="col-lg-8 align-self-center">
                                      <div class="row gap-2 justify-content-lg-end">
                                        <div class="col-lg-2 ">
                                          <button class="btn btn-outline-dark text-uppercase" type="button"
                                            :data-bs-target="'#formPutHabitacion'+hotel.id+''+habitacion.id"
                                            data-bs-toggle="modal">editar</button>
                                          <div class="modal fade" :id="'formPutHabitacion'+hotel.id+''+habitacion.id"
                                            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                            aria-hidden="true">
                                            <formPutHabitacion v-bind:id-habitacion="habitacion.id"></formPutHabitacion>
                                          </div>
                                        </div>
                                        <div class="col-lg-2 ">
                                          <button class="btn btn-outline-dark text-uppercase" type="button"
                                            :data-bs-target="'#getHabitacion'+hotel.id+''+habitacion.id"
                                            data-bs-toggle="modal">ver</button>
                                          <div class="modal fade" :id="'getHabitacion'+hotel.id+''+habitacion.id"
                                            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                            aria-hidden="true">
                                            <getHabitacion v-bind:id-habitacion="habitacion.id"></getHabitacion>
                                          </div>
                                        </div>
                                        <div class="col-lg-3 ">
                                          <button class="btn btn-outline-dark text-uppercase"
                                            type="button">Desactivar</button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import formPutPerfil from '../components/componentsPerfil/formPutPerfil.vue'
  import formPostHotel from '../components/componentsPerfil/formPostHotel.vue'
  import formPutHotel from '../components/componentsPerfil/formPutHotel.vue'
  import formPostHabitacion from '../components/componentsPerfil/formPostHabitacion.vue'
  import formPutHabitacion from '../components/componentsPerfil/formPutHabitacion.vue'
  import getHabitacion from '../components/componentsPerfilHotel/getHabitacion.vue'
  import jwt_decode from "jwt-decode"
  import axios from 'axios'
  export default {
    name: 'Perfil',
    components: {
      formPutPerfil: formPutPerfil,
      formPostHotel: formPostHotel,
      formPutHotel: formPutHotel,
      formPostHabitacion: formPostHabitacion,
      formPutHabitacion: formPutHabitacion,
      getHabitacion:getHabitacion
    },
    data: function () {
      return {
        hoteles: [],
        habitaciones: [],

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
        },

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
      getDataHotelAdmin: async function () {
        let token = localStorage.getItem('token_access');
        let userId = jwt_decode(token).user_id.toString();
        axios.get(`https://back-end-hotelia.herokuapp.com/hotel/user/${userId}`)
          .then((response) => {
            this.hoteles = response.data
          })
          .catch(() => {
            this.$emit('logOut');
          });
      },

      loadPerfilHotel: function (idHotel, nomHotel) {
        localStorage.setItem('idHotel', idHotel)
        localStorage.setItem('nombreHotel', nomHotel)
        this.$router.push({
          name: "PerfilHotel"
        })
      },
      getDataHabitacion: function (idHotel) {
        axios.get(`https://back-end-hotelia.herokuapp.com/room/hotel/${idHotel}`)
          .then((response) => {
            this.habitaciones = response.data
          })
          .catch((error) => {
            console.log(error)
            alert('Fallo en el registro')
          })
      },
      postHabitacionHotel: function (idHotel) {
        this.postHabitacion.hotel = idHotel
        axios.post("https://back-end-hotelia.herokuapp.com/rooms/",
            this.postHabitacion, {
              headers: {}
            })
          .then(() => {
            alert('Registro Exitoso')
          })
          .catch((error) => {
            console.log(error)
            alert('Fallo en el registro')
          })
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