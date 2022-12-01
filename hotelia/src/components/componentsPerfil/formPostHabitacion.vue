<template>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-uppercase">Registrar nueva habitacion</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="needs-validation" v-on:submit.prevent="postHabitacionRegistro">
            <div class="modal-body">
              <div class="card-body bg-ligth">
                <div class="row justify-content-center">
                  <div class="col-md-11 my-1">
                    <div class="form-floating ">
                      <input v-model="postHabitacion.nombre" type="text" class="form-control" placeholder="NOMBRE DEL HOTEL" required>
                      <label class="text-secondary opacity-75">NOMBRE DE LA HABITACION</label>
                    </div>
                  </div>
                  
                  <div class="col-md-11 my-1">
                    <div class="form-floating">
                      <textarea v-model="postHabitacion.descripcion" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                      <label class="text-secondary opacity-75">DESCRIPCIÓN DE LA HABITACION</label>
                    </div>
                  </div>
                  <div class="col-md-11 my-1">
                    <div class="form-floating">
                      <input v-model="postHabitacion.costoNoche" type="number" class="form-control" placeholder="Ciudad" required>
                      <label class="text-secondary opacity-75">PRECIO</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
    import axios from 'axios'
    export default {
      name:'formPostHabitacion',
      props:['idHotel'],
      data: function () {
        return {
          postHabitacion: {
            hotel: 0,
            nombre: "",
            estado: true,
            descripcion: "",
            costoNoche: "",
          }
        }
      },
      methods: {
        postHabitacionRegistro: function () {
          this.postHabitacion.hotel = this.idHotel
          axios.post(
              'https://back-end-hotelia.herokuapp.com/rooms/',
              this.postHabitacion, {
                headers: {}
              }
            )
            .then(() => {
              this.postHabitacion.hotel = 0
              this.postHabitacion.nombre = ""
              this.postHabitacion.estado = true
              this.postHabitacion.descripcion = ""
              this.postHabitacion.costoNoche = ""
              alert('Registro Exitoso')
              location.reload()
              
            })
            .catch((error) => {
              console.log(error)
              alert('Fallo en el registro intente de nuevo')
            })
        },
        
      }
    }
  </script>