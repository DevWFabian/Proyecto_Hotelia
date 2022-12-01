<template>

    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header border border-2 ">
                <div class="col-md-11">
                    <h1 class="modal-title fs-3 text-uppercase ">Reservar</h1>
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
            <div class="modal-body">
                <div class="card mx-5">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fs-5 text-uppercase " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Primer paso
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row justify-content-center">
                                                        <div class="col-md-6 align-self-center">
                                                            <label class="form-label">Cantidad Adultos</label></div>
                                                        <div class="col-md-5 align-self-center">

                                                            <div class="input-group">
                                                                <button class="btn btn-outline-secondary"
                                                                    type="button">-</button>
                                                                <button class="btn btn-outline-secondary"
                                                                    type="button">+</button>
                                                                <span
                                                                    class="input-group-text bg-light border border-dark">{{habtacionReserva.cantidadAdultos}}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div class="row justify-content-center">
                                                        <div class="col-md-6 align-self-center">
                                                            <label class="form-label">Cantidad Niños</label>
                                                        </div>
                                                        <div class="col-md-5 align-self-center">

                                                            <div class="input-group">
                                                                <button class="btn btn-outline-secondary"
                                                                    type="button">-</button>
                                                                <button class="btn btn-outline-secondary"
                                                                    type="button">+</button>
                                                                <span
                                                                    class="input-group-text bg-light border border-dark">{{habtacionReserva.cantidadNiños}}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div class="row justify-content-center">
                                                        <div class="col-md-6 align-self-center">
                                                            <label class="form-label">Seleccione fecha de
                                                                entrada</label>
                                                        </div>
                                                        <div class="col-md-5 align-self-center">

                                                            <div class="input-group">
                                                                <input class="form-control" type="date">
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center">
                                                        <div class="col-md-6 align-self-center">
                                                            <label class="form-label">Seleccione fecha de Salida</label>
                                                        </div>
                                                        <div class="col-md-5 align-self-center">

                                                            <div class="input-group">
                                                                <input class="form-control" type="date">
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row justify-content-center">
                                                        <ul class="list-group list-group-flush ">
                                                            <li class="list-group-item fs-5">
                                                                {{habitacion.nombre}}
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Cantidad Habitaciones:
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Cantidad Camas:
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Precio Noche: ${{habitacion.costoNoche}}
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Subtotal:
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Impuestos:
                                                            </li>

                                                            <li class="list-group-item fs-5">
                                                                Total:
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button fs-5 text-uppercase collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Segundo paso
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">

                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="col-md-11">
                                                <h1 class="modal-title fs-3 text-uppercase ">Terminos & condiciones</h1>
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
                                                voluptas dolorum officiis? Quibusdam doloremque eos aliquid quam,
                                                voluptatibus ipsum dolorum nihil voluptas sed? Aliquam asperiores,
                                                suscipit laborum atque minus debitis. Ipsam illo rerum nesciunt,
                                                officia inventore suscipit cum dolorem quia distinctio vitae, magnam
                                                eveniet asperiores accusantium. Repudiandae non quas, sequi neque
                                                facere minima repellendus quae rerum, corporis hic cupiditate
                                                facilis reicie totam, est atque voluptates
                                                a laboriosam eveniet nam exercitationem incidunt assumenda molestias
                                                nesciunt labore aperiam ea. Qui, eaque. Voluptatibus, enim!
                                                Molestias totam ratione saepe soluta tempore, eveniet adipisci autem
                                                eius voluptas et. Ullam, placeat dolore dolores fugiat impedit,
                                                soluta dolor sunt, aut incidunt ex ipsa veritatis labore adipisci
                                                nulla obcaecati veniam perspiciatis aspernatur ea architecto quae!
                                                Blanditiis dolore doloremque dolor voluptatum, aliquid quia eaque
                                                culpa repellat ab? Voluptatem, reiciendis voluptatibus impedit nemo
                                                asperiores nam odit eveniet in ducimus saepe, ipsam necessitatibus
                                                sapiente deserunt ut corrupti quia iure fugit sint voluptas
                                                consectetur quas! Perferendis similique officia quis quae sequi
                                                commodi cum, sed mollitia maiores labore impedit a recusandae vero
                                                nam nemo non esse, iusto culpa atque. Dolor cupiditate aperiam ea
                                                officia nesciunt eum quaerat necessitatibus tenetur, provident
                                                voluptatem accusantium minus optio quia hic quae possimus
                                                reprehenderit, fuga veritatis. Quibusdam, possimus temporibus
                                                aliquam accusamus fugit non asperiores officia id corporis vitae
                                                reprehenderit illum quia animi, nulla esse quod debitis nihil ab
                                                distinctio facilis exercitationem, cum dolor dignissimos porro!
                                                Expedita, quae numquam laudantium fugiat nobis aut, vel tempora ipsa
                                                totam doloribus veritatis molestias. Molestiae perferendis veniam
                                                neque, cum sunt consectetur? Ipsam fugiat dicta tempore provident
                                                quos, aut illum, expedita quaerat dolore vitae repellendus odio eum
                                                voluptatibus praesentium! Sed voluptates tempora a quasi quidem
                                                sunt, obcaecati non maxime voluptatibus ut, quaerat reiciendis
                                                fugit! Libero modi molestias atque</p>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="row">
                                                <div class="col-md-1 aling-self-center">
                                                    <input class="form-check-input" type="checkbox" required></div>
                                                <div class="col-md-7 aling-self-center">
                                                    <label class="form-check-label">
                                                        Aceptar los términos y condiciones
                                                    </label></div>
                                            </div>



                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button fs-5 text-uppercase collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Tercer Paso
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="col-md-11">
                                                <h1 class="modal-title fs-3 text-uppercase ">Detalles de reserva</h1>
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-lg-6 border-end">
                                                    <div class="col-lg-6 fs-5">Nombre: {{user.account.Nombre}} {{user.account.Apellido}}</div>
                                                    <div class="col-lg-6 fs-5">Cantidad Adultos: {{habtacionReserva.cantidadAdultos}}</div>
                                                    <div class="col-lg-6 fs-5">Cantidad Niños: {{habtacionReserva.cantidadNiños}}</div>
                                                    <div class="col-lg-6 fs-5">Fecha inicio reserva: {{reservation.fechaCheckIn}}</div>
                                                    <div class="col-lg-6 fs-5">Fecha finalizacion reserva: {{reservation.fechaCheckOut}}</div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="col-lg-7 fs-5">Cantidad habitaciones:</div>
                                                    <div class="col-lg-7 fs-5">Cantidad camas:</div>
                                                    <div class="col-lg-7 fs-5">Cantidad Noches:</div>
                                                    <div class="col-lg-7 fs-5">Precio Noche: ${{habitacion.costoNoche}}</div>
                                                    <div class="col-lg-7 fs-5">Subtotal:</div>
                                                    <div class="col-lg-7 fs-5">Impuestos:</div>
                                                    <div class="col-lg-7 fs-5">Total:</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-outline-secondary text-uppercase"
                                                type="button">Cancelar</button>
                                            <button class="btn btn-outline-danger text-uppercase"
                                                type="button">reservar</button>
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
    import jwt_decode from "jwt-decode"
    export default {
        name: 'getHabiatacion',
        props: ['idHabitacion'],
        data: function () {
            return {
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
                reservation: {
                    fechaReserva: "",
                    fechaCheckIn: "",
                    fechaCheckOut: "",
                    medioPago: "",
                    account_id: 0,
                    hotel_id: 0,
                },
                habtacionReserva: {
                    cantidadAdultos: 0,
                    cantidadNiños: 0,
                    reservation_id: 0,
                    rooms_id: 0,
                },
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
            getDataUser: async function () {
                if (localStorage.getItem('token_access') === null || localStorage.getItem(
                        'token_refresh') ===
                    null) {
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
            this.getDataHabitacion();
            this.getDataUser();
        }
    }
</script>