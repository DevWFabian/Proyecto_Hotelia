<template>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col ">
                <div class="container bg-body rounded my-5 shadow ">
                    <div class="row ">
                        <div class="col-5 align-self-center ">
                            <img class=" img-fluid " src="@/images/LogoSolo.png" width="200" alt="logo login">
                        </div>
                        <div class="col-6 align-self-center">
                            <div class="d-flex justify-content-center">
                                <div class="card w-75 my-5">
                                    <div class="card-header text-dark bg-info bg-opacity-50">
                                        <h4 class="card-title">LOGIN</h4>
                                    </div>
                                    <form v-on:submit.prevent="processLoginUser">
                                        <div class="card-body">

                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" required maxlength="10"
                                                    v-model="user.username" id="floatingInput"
                                                    placeholder="name@example.com">
                                                <label for="floatingInput">Nombre Usuario</label>
                                            </div>
                                            <div class="form-floating">
                                                <input type="password" class="form-control" required maxlength="35"
                                                    v-model="user.password" id="floatingPassword"
                                                    placeholder="Password">
                                                <label for="floatingPassword">Contraseña</label>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-info bg-opacity-25">
                                            <button class="btn btn-outline-dark  text-uppercase my-2"
                                                type="submit">login</button>
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
        name: 'Login',
        data: function () {
            return {
                authLogin: false,
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            verifyAuthLogin: async function () {
                this.authLogin = localStorage.getItem('isAuth') || false
                let log = this.authLogin
                if(log == 'true'){
                    this.$router.push({
                        name: "Home"
                    });}
                else{
                    this.$router.push({
                        name: "Login"
                    });}
            },

            processLoginUser: function () {
                axios.post(
                        "https://back-end-hotelia.herokuapp.com/login/",
                        this.user, {
                            headers: {}
                        }
                    )
                    .then((result) => {
                        let dataLogin = {
                            username: this.user.username,
                            token_access: result.data.access,
                            token_refresh: result.data.refresh,
                        }
                        this.$emit('completedLogin', dataLogin)
                    })
                    .catch((error) => {

                        if (error.response.status == "401")
                            console.log(error)
                        alert("Credenciales Incorrectas.");
                    });
            }
        },
        created: async function () {
            this.verifyAuthLogin();
        }
    }
</script>