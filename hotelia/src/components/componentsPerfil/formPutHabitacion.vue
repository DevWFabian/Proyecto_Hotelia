<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-uppercase">Actualizar habitacion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="needs-validation" v-on:submit.prevent="putHabitacionRegistro">
                    <div class="modal-body">
                        <div class="card-body bg-ligth">
                            <div class="row justify-content-center">
                                <div class="col-md-11 my-1">
                                    <div class="form-floating ">
                                        <input v-model="putHabitacion.nombre" type="text" class="form-control"
                                            placeholder="NOMBRE DEL HOTEL" required>
                                        <label class="text-secondary opacity-75">NOMBRE DE LA HABITACION</label>
                                    </div>
                                </div>

                                <div class="col-md-11 my-1">
                                    <div class="form-floating">
                                        <textarea v-model="putHabitacion.descripcion" class="form-control"
                                            id="exampleFormControlTextarea1" rows="4"></textarea>
                                        <label class="text-secondary opacity-75">DESCRIPCIÓN DE LA HABITACION</label>
                                    </div>
                                </div>
                                <div class="col-md-11 my-1">
                                    <div class="form-floating">
                                        <input v-model="putHabitacion.costoNoche" type="number" class="form-control"
                                            placeholder="Ciudad" required>
                                        <label class="text-secondary opacity-75">PRECIO</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Actualizar</button>
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
        name: 'formPutHabitacion',
        props: ['idHabitacion'],
        data: function () {
            return {
                putHabitacion: {
                    hotel: 0,
                    nombre: "",
                    estado: true,
                    descripcion: "",
                    costoNoche: "",
                }
            }
        },
        methods: {
            getDataPutHabitacion: async function () {
                let id_habitacion = this.idHabitacion
                axios.get(`https://back-end-hotelia.herokuapp.com/room/${id_habitacion}`)
                    .then((response) => {
                        this.putHabitacion.hotel = response.data.hotel
                        this.putHabitacion.nombre = response.data.nombre
                        this.putHabitacion.descripcion = response.data.descripcion
                        this.putHabitacion.costoNoche = response.data.costoNoche
                })
            },
            putHabitacionRegistro: function () {
                let id_habitacion = this.idHabitacion
                axios.put(
                        `https://back-end-hotelia.herokuapp.com/rooms/${id_habitacion}`,
                        this.putHabitacion, {
                            headers: {}
                        }
                    )
                    .then(() => {
                        this.putHabitacion.hotel = 0
                        this.putHabitacion.nombre = ""
                        this.putHabitacion.estado = true
                        this.putHabitacion.descripcion = ""
                        this.putHabitacion.costoNoche = ""
                        alert('Registro Exitoso')
                        location.reload()
                    })
                    .catch((error) => {
                        console.log(error)
                        alert('Fallo en el registro intente de nuevo')
                    })
            },

        },
        created: async function () {
            this.getDataPutHabitacion();
        },
    }
</script>