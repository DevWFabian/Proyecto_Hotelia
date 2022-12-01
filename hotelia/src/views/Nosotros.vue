<template>
    <div class="container-fluid">
        <div class="row my-5" v-if="!isAuth">
            <div class="col text-center">
                <h3 class="text-info">¿QUIERES QUE TU HOTEL SE PUBLIQUE EN HOTELIA?</h3>
                <button class="btn btn-info" v-on:click="loadRegistroEncargado" type="button">Click Aqui</button>
            </div>
        </div>

        <div class="row my-5">
            <div class="col-md-5">
                <img src="@/images/camasNosotros.jpg" class="img-fluid w-75">
            </div>

            <div class="col-md-5 text-center">
                <h3 class="text-info">¿QUIERES SABER SOBRE NOSOTROS?</h3>
                <p> Somos Hotelia, nuestro objetivo como empresa de reservas de hoteles es poder brindar una mejor
                    versatilidad
                    hacia nuestros clientes, ya que en nuestra pagina se encuentran hoteles adecuados economicamente
                    sin tener que gastar una fortuna para la reserva.</p>
            </div>


        </div>
        <div class="row justify-content-center">
            <div class="col-md-12 bg-dark bg-opacity-75">
            <div class="row justify-content-center ">
                <div class="col-md-4">
                    <h1 class="title section text-info">Comunicate con nosotros:</h1>
                </div>
            </div>

            <div class="row justify-content-center text-light">
                <div class="col-md-2 ">
                    <p>Telefono: 3226894565</p>
                </div>
                <div class="col-md-2">
                    <p>Gmail: hotelia@gmail.com</p>
                </div>
                <div class="col-md-2">
                    <p>WhatsApp: 3216549874</p>
                </div>
                <div class="col-md-2">
                    <p>Twitter: Hotelia_39</p>
                </div>
                <div class="col-md-2">
                    <p>Facebook: Hotelia39</p>
                </div>
            </div>

        </div>
        </div>
        

    </div>
</template>
<script>
    export default {
        name: 'Nosotros',
        data: function () {
            return {
                isAuth: false
            }
        },
        methods: {
            verifyAuth: async function () {
                this.isAuth = localStorage.getItem('isAuth') || false
                console.log(this.isAuth)
            },
            loadRegistroEncargado: function () {
                this.$router.push({
                    name: 'SignUpEncargado'
                })
            }
        },
        created: function () {
            this.verifyAuth()
        }
    }
</script>