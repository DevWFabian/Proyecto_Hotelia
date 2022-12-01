<template>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header ">
                <h1 class="modal-title fs-5 text-uppercase">Detalles</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card mx-5">
                    <div :id="'galeriaHabitacion'+idHabitacion" class="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div class="carousel-inner rounded shadow">
                            <div class="carousel-item active  ">
                                <img src="@/images/hotel1.jpg" class="img-fluid w-75" height="400" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="@/images/hotel2.jpg" class="img-fluid w-75 " height="400" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="@/images/hotel3.jpg" class=" img-fluid w-75" height="400" alt="...">
                            </div>

                            <div class="carousel-item ">
                                <img src="@/images/hotel5.jpg" class=" img-fluid w-75" height="400" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev bg-secundary rounded-start bg-opacity-25" type="button"
                            :data-bs-target="'#galeriaHabitacion'+idHabitacion" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next bg-secundary rounded-end bg-opacity-25" type="button"
                            :data-bs-target="'#galeriaHabitacion'+idHabitacion" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h5 class="card-title fs-3 text-uppercase">{{habitacion.nombre}}</h5>
                            </li>
                            <li class="list-group-item">
                            <div class="row">
                                
                                <div class="col-md-6 align-self-center">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <p class="card-text fs-4">{{habitacion.descripcion}}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6 align-self-center">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <p class="card-text fs-4 text-uppercase">Precio noche:
                                                ${{habitacion.costoNoche}}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            </li>
                            <li class="list-group-item">
                            <div class="col-md-12 align-self-center">
                                    <button class="btn btn-outline-danger text-uppercase" type="button"
                                        id="button-addon2">reservar</button>
                            </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'getHabiatacion',
        props: ['idHabitacion'],
        data: function () {
            return {
                habitacion: {
                    hotel: 0,
                    nombre: "",
                    estado: true,
                    descripcion: "",
                    costoNoche: 0
                }
            }
        },
        methods: {
            getDataHabitacion: async function () {
                let id_habitacion = this.idHabitacion
                console.log(id_habitacion)
                axios.get(`https://back-end-hotelia.herokuapp.com/room/${id_habitacion}`)
                    .then((response) => {
                        this.habitacion.hotel = response.data.hotel
                        this.habitacion.nombre = response.data.nombre
                        this.habitacion.descripcion = response.data.descripcion
                        this.habitacion.costoNoche = response.data.costoNoche
                    })
            },

        },
        created: async function () {
            this.getDataHabitacion();
        }
    }
</script>