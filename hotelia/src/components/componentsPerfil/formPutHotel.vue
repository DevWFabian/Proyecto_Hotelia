<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-uppercase"> {{hotel.nombre_hotel}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="needs-validation" v-on:submit.prevent="putHotelRegistro">
          <div class="modal-body">
            <div class="card-body bg-ligth">
              <div class="row justify-content-center">
                <div class="col-md-11 my-1">
                  <div class="form-floating ">
                    <input v-model="hotel.nombre_hotel" type="text" class="form-control" placeholder="NOMBRE DEL HOTEL"
                      required>
                    <label class="text-secondary opacity-75">NOMBRE DEL HOTEL</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating ">

                    <input v-model="hotel.direccion_hotel" type="text" maxlength="35" class="form-control"
                      placeholder="DIRECCIÓN" required>
                    <label class="text-secondary opacity-75">DIRECCIÓN</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating ">

                    <input v-model="hotel.telefono_hotel" type="text" maxlength="15" class="form-control"
                      placeholder="TELEFONO" required>
                    <label class="text-secondary opacity-75">TELEFONO</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating">
                    <textarea v-model="hotel.descripcion_hotel" class="form-control" id="exampleFormControlTextarea1"
                      rows="4"></textarea>
                    <label class="text-secondary opacity-75">DESCRIPCIÓN DEL HOTEL</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating">
                    <input v-model="hotel.ciudad_hotel" type="text" class="form-control" placeholder="Ciudad" required>
                    <label class="text-secondary opacity-75">CIUDAD</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating">
                    <input v-model="hotel.pais_hotel" type="text" class="form-control" placeholder="Ciudad" required>
                    <label class="text-secondary opacity-75">PAIS</label>
                  </div>
                </div>
                <div class="row mt-3 justify-content-center">
                  <div class="col-md-9 aling-self-center">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" required>
                      <label class="form-check-label">
                        Aceptar los términos y condiciones
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Cancelar</button>
              <button class="btn btn-primary" data-bs-dismiss="modal" type="submit">Actualizar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import jwt_decode from "jwt-decode"
  import axios from 'axios'
  export default {
    name:'formPutHotel',
    props:['idHotel'],
    data: function () {
      return {
        hotel: {
          user: 0,
          nombre_hotel: "",
          telefono_hotel: "",
          direccion_hotel: "",
          ciudad_hotel: "",
          pais_hotel: "",
          descripcion_hotel: "",
          estado_hotel: true
        }
      }
    },
    methods: {
      getDataHotelPut: async function () {
        let id_hotel = this.idHotel
        axios.get(`https://back-end-hotelia.herokuapp.com/hotel/${id_hotel}`)
          .then((response) => {
            this.hotel.user = response.data.user
            this.hotel.nombre_hotel = response.data.nombre_hotel
            this.hotel.telefono_hotel = response.data.telefono_hotel
            this.hotel.direccion_hotel = response.data.direccion_hotel
            this.hotel.ciudad_hotel = response.data.ciudad_hotel
            this.hotel.pais_hotel = response.data.pais_hotel
            this.hotel.descripcion_hotel = response.data.descripcion_hotel
            this.hotel.estado_hotel = response.data.estado_hotel
          })
      },
      putHotelRegistro: function () {
        if (localStorage.getItem('token_access') === null || localStorage.getItem('token_refresh') ===
          null) {
          this.$emit('logOut');
          return;
        }
        this.verifyToken();
        let token = localStorage.getItem('token_access');
        this.hotel.user = jwt_decode(token).user_id.toString();
        let idHotel = localStorage.getItem('idHotel')
        axios.put(
            `https://back-end-hotelia.herokuapp.com/hotel/${idHotel}`,
            this.hotel, {
              headers: {}
            }
          )
          .then(() => {
            alert('Actualizacion exitosa')
            location.reload()
          })
          .catch((error) => {
            console.log(error)
            alert('Fallo en la Actualizacion')
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
      this.getDataHotelPut();
    },
  }
</script>