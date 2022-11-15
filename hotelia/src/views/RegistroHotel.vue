<template>
    <div class="container-fluid p-5 ">
        <div class="row justify-content-center">
            <div class="col-9">
                <div class="card  m-5">
                    <div class="card-header bg-info bg-opacity-50">
                        <h3 class="text-center card-title">FORMULARIO HOTEL</h3>
                    </div>
                    <form v-on:submit.prevent="postHotelRegistro">
                        <div class="card-body p-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">NOMBRE DEL HOTEL</label>
                                    <input type="text" class="form-control" value=" " required>

                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">DIRECCIÓN</label>
                                    <input type="text" class="form-control" value=" " required>

                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">DESCRIPCIÓN DEL
                                    HOTEL</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">CIUDAD</label>
                                    <input type="text" class="form-control" required>

                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">TELEFONO</label>
                                    <input type="text" maxlength="15" class="form-control" required>

                                </div>
                            </div>
                            <div class="row mt-3 justify-content-center">
                                <div class="col-md-5 aling-self-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" required>
                                        <label class="form-check-label">
                                            Aceptar los términos y condiciones
                                        </label>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card-footer ">
                            <div class="row justify-content-center">
                                <div class="col-md-2"><button class="btn btn-outline-dark text-uppercase"
                                    type="submit">Registrar</button> </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import jwt_decode from "jwt-decode"
    import axios from 'axios'
    export default {
        name: 'RegistroHotel',
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
                console.log(this.hotel.user)
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