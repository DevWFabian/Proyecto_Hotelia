<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-uppercase">Registrar nuevo hotel</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="needs-validation" v-on:submit.prevent="postHotelRegistro">
          <div class="modal-body">
            <div class="card-body bg-ligth">
              <div class="row justify-content-center">
                <div class="col-md-11 my-1">
                  <div class="form-floating ">
                    <input v-model="hotel.nombre_hotel" type="text" class="form-control" placeholder="NOMBRE DEL HOTEL" required>
                    <label class="text-secondary opacity-75">NOMBRE DEL HOTEL</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating ">

                    <input v-model="hotel.direccion_hotel" type="text" maxlength="35" class="form-control" placeholder="DIRECCIÓN" required>
                    <label class="text-secondary opacity-75">DIRECCIÓN</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating ">

                    <input v-model="hotel.telefono_hotel" type="text" maxlength="15" class="form-control" placeholder="TELEFONO" required>
                    <label class="text-secondary opacity-75">TELEFONO</label>
                  </div>
                </div>
                <div class="col-md-11 my-1">
                  <div class="form-floating">
                    <textarea v-model="hotel.descripcion_hotel" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
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
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button class="btn btn-primary" data-bs-dismiss="modal" type="submit">Registrar</button>
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
      postHotelRegistro: function () {
        if (localStorage.getItem('token_access') === null || localStorage.getItem('token_refresh') ===
          null) {
          this.$emit('logOut');
          return;
        }
        this.verifyToken();
        let token = localStorage.getItem('token_access');
        this.hotel.user = jwt_decode(token).user_id.toString();
        axios.post(
            'https://back-end-hotelia.herokuapp.com/hotel/',
            this.hotel, {
              headers: {}
            }
          )
          .then(() => {
            alert('Registro Exitoso')
            location.reload()
          })
          .catch((error) => {
            console.log(error)
            alert('Fallo en el registro intente de nuevo')
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
    }
  }
</script>