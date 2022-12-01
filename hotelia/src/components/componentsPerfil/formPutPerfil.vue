<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-uppercase">Actualizar Perfil</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="needs-validation" v-on:submit.prevent="putDataAccount">
          <div class="modal-body">
            <div class="card-body bg-ligth">
              <div class="row justify-content-center">
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control " v-model="user.account.Nombre"
                      placeholder="Nombre">
                    <label class="text-secondary opacity-75">Nombre</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control" v-model="user.account.Apellido"
                      placeholder="Apellido">
                    <label class="text-secondary opacity-75">Apellido</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="tel" class="form-control" v-model="user.account.Telefono"
                      placeholder="Telefono">
                    <label class="text-secondary opacity-75">Telefono</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating">
                    <select class="form-select" v-model="user.account.Genero"
                      aria-label="Floating label select example">
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </select>
                    <label class="text-secondary opacity-75">Genero</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
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
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control" v-model="user.account.NumeroDocumento"
                      placeholder="Numero de documento">
                    <label class="text-secondary opacity-75">Numero de
                      documento</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control" v-model="user.account.Direccion"
                      placeholder="Direccion">
                    <label class="text-secondary opacity-75">Direccion</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control" v-model="user.account.Ciudad" placeholder="Ciudad">
                    <label class="text-secondary opacity-75">Ciudad</label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="date" class="form-control" v-model="user.account.FechaNacimiento"
                      placeholder="Fecha de nacimiento">
                    <label class="text-secondary opacity-75">Fecha de nacimiento
                    </label>
                  </div>
                </div>
                <div class="col-md-6 my-1">
                  <div class="form-floating ">
                    <input required type="text" class="form-control" v-model="user.account.Correo" placeholder="Correo">
                    <label class="text-secondary opacity-75">Email</label>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import jwt_decode from "jwt-decode"
  import axios from 'axios'
  export default {
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
            Rol:"",
          }
        }
      }
    },
    methods: {
      
      putDataAccount: function () {
        this.verifyToken();
        let token = localStorage.getItem('token_access');
        let userId = jwt_decode(token).user_id.toString();
        let rol = this.user.account.Rol
        console.log(rol)
        axios.put(`https://back-end-hotelia.herokuapp.com/account/${userId}`,
            this.user.account, {
              headers: {}
            })
          .then(() => {
            alert('actualizado')
            location.reload()
          })
          .catch((error) => {
            alert(error, 'Error no se pudo actualizar')
          });
      },
      getDataUser: async function () {
        if (localStorage.getItem('token_access') === null || localStorage.getItem('token_refresh') === null) {
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
            this.user.account.Rol = result.data.account.Rol
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
      this.getDataUser();
    },
  }
</script>