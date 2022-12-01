<template>
    <div class="perfil">
        <div class="container-fluid text-center color-bg">
            <div class="row">
                <div class="col ">
                    <div class="container my-5 ">
                        <div class="row ">
                            <div class="col align-self-center">
                                <div class="card text-center shadow">
                                    <div class="card-header bg-info bg-opacity-50">
                                        <h5 class="card-title text-uppercase">Registrarse</h5>
                                    </div>
                                    <form class="needs-validation" v-on:submit.prevent="processSignUpUser">
                                        <div class="card-body bg-ligth">
                                            <div class="row justify-content-center">
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control "
                                                            v-model="user.account.Nombre" placeholder="Nombre">
                                                        <label class="text-secondary opacity-75">Nombre</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Apellido" placeholder="Telefono">
                                                        <label class="text-secondary opacity-75">Apellido</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.username" placeholder="Apellido">
                                                        <label class="text-secondary opacity-75">Nombre de
                                                            Usuario</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="password" class="form-control"
                                                            v-model="user.password" placeholder="Password">
                                                        <label class="text-secondary opacity-75">Contraseña</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="tel" class="form-control"
                                                            v-model="user.account.Telefono" placeholder="Telefono">
                                                        <label class="text-secondary opacity-75">Telefono</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" v-model="user.account.Genero"
                                                            aria-label="Floating label select example">
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Masculino">Masculino</option>
                                                        </select>
                                                        <label class="text-secondary opacity-75">Genero</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" v-model="user.account.TipoDocumento"
                                                            aria-label="Floating label select example">
                                                            <option value="Cedula">Cedula</option>
                                                            <option value="Cedula Extranjera">Cedula Extranjera</option>
                                                            <option value="Tarjeta de identidad">Tarjeta de identidad
                                                            </option>
                                                        </select>
                                                        <label class="text-secondary opacity-75">Tipo de
                                                            documento</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.NumeroDocumento"
                                                            placeholder="Numero de documento">
                                                        <label class="text-secondary opacity-75">Numero de
                                                            documento</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Direccion" placeholder="Direccion">
                                                        <label class="text-secondary opacity-75">Direccion</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Ciudad" placeholder="Ciudad">
                                                        <label class="text-secondary opacity-75">Ciudad</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="date" class="form-control"
                                                            v-model="user.account.FechaNacimiento"
                                                            placeholder="Fecha de nacimiento">
                                                        <label class="text-secondary opacity-75">Fecha de nacimiento
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            v-model="user.account.Correo" placeholder="Correo">
                                                        <label class="text-secondary opacity-75">Email</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="card-footer bg-info bg-opacity-25 ">
                                            <button class="btn btn-outline-dark text-uppercase m-2"
                                                type="submit">Registrarse</button>
                                        </div>
                                    </form>
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

        name: 'PerfilUsuario',
        data: function () {
            return {
                authSignUp:false,
                user: {
                    username: "",
                    password: "",
                    Estado: true,
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
                        Rol: "Cliente"
                    }
                }
            }
        },
        methods: {
            verifyAuthSignUp: async function () {
                this.authSignUp = localStorage.getItem('isAuth') || false
                let log = this.authSignUp
                if (log == 'true') {
                    this.$router.push({
                        name: "Home"
                    });
                } else {
                    this.$router.push({
                        name: "SignUp"
                    });
                }
            },
            processSignUpUser: function () {
                axios.post(
                        "https://back-end-hotelia.herokuapp.com/user/",
                        this.user, {
                            headers: {}
                        }
                    )
                    .then((result) => {
                        let dataSignUp = {
                            username: this.user.username,
                            token_access: result.data.access,
                            token_refresh: result.data.refresh,
                        }
                        this.$emit('completedSignUp', dataSignUp)
                    })
                    .catch((error) => {
                        console.log(error)
                        alert('Fallo en el registro intente de nuevo')
                    })
            }
        },
        created: async function () {
            this.verifyAuthSignUp()
        }
    }
</script>