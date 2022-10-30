<template>
    <div class="container-fluid text-center color-bg">
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
                                    <div class="card-header text-dark color-bg bg-primary bg-opacity-50">
                                        <h4 class="card-title">LOGIN</h4>
                                    </div>
                                    <form v-on:submit.prevent="">
                                        <div class="card-body">

                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" required maxlength="10"
                                                    id="floatingInput" placeholder="name@example.com">
                                                <label for="floatingInput">Nombre Usuario</label>
                                            </div>
                                            <div class="form-floating">
                                                <input type="password" class="form-control" required maxlength="35"
                                                    id="floatingPassword" placeholder="Password">
                                                <label for="floatingPassword">Contraseña</label>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-primary bg-opacity-25">
                                            <button class="btn btn-outline-primary  text-uppercase my-2" type="submit">login</button>
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