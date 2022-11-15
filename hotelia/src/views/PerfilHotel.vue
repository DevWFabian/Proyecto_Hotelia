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
            <h1 class="card-title">{{hotel.nombre_hotel}}</h1>
            <hr>

            <div class="row">
              <div class="col-lg-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Direccion: {{hotel.direccion_hotel}}</li>
                  <li class="list-group-item"></li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Ciudad: {{hotel.ciudad_hotel}}</li>
                  <li class="list-group-item"></li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Pais: {{hotel.pais_hotel}}</li>
                  <li class="list-group-item"></li>
                </ul>
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
              <button class="nav-link text-dark active" id="Habitacion-tab" data-bs-toggle="tab"
                data-bs-target="#Habitacion-tab-pane" type="button" role="tab" aria-controls="Habitacion-tab-pane"
                aria-selected="true">Habitaciones</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-dark" id="Hotel-tab" data-bs-toggle="tab" data-bs-target="#Hotel-tab-pane"
                type="button" role="tab" aria-controls="Hotel-tab-pane" aria-selected="false">Hoteles</button>
            </li>
          </ul>
          <div class="tab-content shadow-sm" id="myTabContent">
            <div class="tab-pane fade show active" id="Habitacion-tab-pane" role="tabpanel"
              aria-labelledby="Habitacion-tab" tabindex="0">
              <div class="card m-3 shadow-sm" v-for="habitacion in habitaciones" :key="habitacion.id">
                <div class="row justify-content-between">
                  <div class="col-md-2 align-self-center">
                    <div class="card-body p-3">
                      <img src="@/images/LogoSolo.png" class="img-fluid" width="100" alt="foto_perfil">
                    </div>
                  </div>
                  <div class="col-sm-10 align-self-center">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 class="card-title text-uppercase">{{habitacion.nombre}}</h5></li> 
                            <li class="list-group-item">{{habitacion.descripcion}}</li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 class="card-title text-uppercase">Cancelacion</h5></li>
                            <li class="list-group-item">Cancelación con penalidad del 50% sobre el total de la tarifa hasta el dia de la reserva</li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 class="card-title text-uppercase">Precio noche: ${{habitacion.costoNoche}}</h5></li>
                            <li class="list-group-item"><button class="btn btn-outline-dark text-uppercase" type="button" id="button-addon2">reservar</button></li>
                          </ul>
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
  import axios from 'axios'
  export default {
    name: 'Hoteles',
    data: function () {
      return {
        habitaciones: [],
        hotel: {
          nombre_hotel: "",
          telefono_hotel: "",
          direccion_hotel: "",
          ciudad_hotel: "",
          pais_hotel: "",
          descripcion_hotel: "",
          estado_hotel: true
        },

      }
    },
    methods: {
      getDataHotel: async function () {
        let idHotel = localStorage.getItem('idHotel')
        axios.get(`https://back-end-hotelia.herokuapp.com/hotel/${idHotel}`)
          .then((response) => {
            this.hotel.nombre_hotel = response.data.nombre_hotel
            this.hotel.telefono_hotel = response.data.telefono_hotel
            this.hotel.direccion_hotel = response.data.direccion_hotel
            this.hotel.ciudad_hotel = response.data.ciudad_hotel
            this.hotel.pais_hotel = response.data.pais_hotel
            this.hotel.descripcion_hotel = response.data.descripcion_hotel
            this.hotel.estado_hotel = response.data.estado_hotel
          })
      },
      getDataHabitacion: async function () {
        let idHotel = localStorage.getItem('idHotel')
        axios.get(`https://back-end-hotelia.herokuapp.com/room/hotel/${idHotel}`)
          .then((response) => {
            this.habitaciones = response.data
          })
      },
    },
    created: async function () {
      this.getDataHotel();
      this.getDataHabitacion();
    }
  }
</script>