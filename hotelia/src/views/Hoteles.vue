<template>
    <div class="container-fluid  my-5">
        <div class="card m-5 p-3" v-for="hotel in hoteles" :key="hotel.id">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="@/images/LogoSolo.png" class=" card-img-top w-75 img-fluid" alt="">
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">{{hotel.nombre_hotel}}</h5>
                        <p class="card-text">{{hotel.descripcion_hotel}}</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 ">
                                <button class="btn btn-outline-dark text-uppercase"
                                    v-on:click="loadPerfilHotel(hotel.id,hotel.nombre_hotel)" type="button">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Direccion: {{hotel.direccion_hotel}}</li>
                            <li class="list-group-item">Ciudad: {{hotel.ciudad_hotel}}</li>
                            <li class="list-group-item">Pais: {{hotel.pais_hotel}}</li>
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
        name: 'Hoteles',
        data: function () {
            return {
                hoteles: [],

            }
        },
        methods: {
            getDataHotel: async function () {
                axios.get('https://back-end-hotelia.herokuapp.com/hotel/')
                    .then((response) => {
                        this.hoteles = response.data
                    })
            },
            loadPerfilHotel: function (idHotel, nomHotel) {
                localStorage.setItem('idHotel', idHotel)
                localStorage.setItem('nombreHotel', nomHotel)
                this.$router.push({
                    name: "PerfilHotel"
                })
            },


        },
        created: async function () {
            this.getDataHotel();
        }
    }
</script>