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
                                        <h5 class="card-title text-uppercase">Perfil</h5>
                                    </div>
                                    <form class="needs-validation" v-on:submit.prevent="putUsuario">
                                        <div class="card-body bg-ligth">
                                            <div class="row justify-content-center">
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control "
                                                             placeholder="Nombre">
                                                        <label
                                                            class="text-secondary opacity-75">Nombre</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                             placeholder="Apellido">
                                                        <label
                                                            class="text-secondary opacity-75">Nombre de Usuario</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                             placeholder="Telefono">
                                                        <label
                                                            class="text-secondary opacity-75">Apellido</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" 
                                                            aria-label="Floating label select example">
                                                            <option value="Femenino">Femenino</option>
                                                            <option value="Masculino">Masculino</option>
                                                        </select>
                                                        <label
                                                            class="text-secondary opacity-75">Genero</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating">
                                                        <select class="form-select" 
                                                            aria-label="Floating label select example">
                                                            <option value="Cedula">Cedula</option>
                                                            <option value="Cedula Extranjera">Cedula Extranjera</option>
                                                            <option value="Tarjeta de identidad">Tarjeta de identidad
                                                            </option>
                                                        </select>
                                                        <label
                                                            class="text-secondary opacity-75">Tipo de documento</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            
                                                            placeholder="Numero de documento">
                                                        <label
                                                            class="text-secondary opacity-75">Numero de documento</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                             placeholder="Direccion">
                                                        <label
                                                            class="text-secondary opacity-75">Direccion</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                             placeholder="Ciudad">
                                                        <label
                                                            class="text-secondary opacity-75">Ciudad</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            placeholder="Fecha de nacimiento">
                                                        <label
                                                            class="text-secondary opacity-75">Fecha de nacimiento
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-5 my-1">
                                                    <div class="form-floating ">
                                                        <input required type="text" class="form-control"
                                                            placeholder="Correo">
                                                        <label
                                                            class="text-secondary opacity-75">Email</label>
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