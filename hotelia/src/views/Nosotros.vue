<template>
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col text-center">
                <h3 class="text-info">¿QUIERES SABER SOBRE NOSOTROS?</h3>
                <p> Somos Hotelia, nuestro objetivo como empresa de reservas de hoteles es poder brindar una mejor
                    versatilidad
                    hacia nuestros clientes, ya que en nuestra pagina se encuentran hoteles adecuados economicamente
                    sin tener que gastar una fortuna para la reserva.</p>
            </div>
        </div>
        <div class="row my-5">
                <div class="col-5">
                    <img src="@/images/camasNosotros.jpg" class="img-fluid w-75">
                </div>
                <div class="col-6">
                    <h1 class="title section text-info">Comunicate con nosotros:</h1>
                    <p>Telefono: 3226894565</p>
                    <p>Gmail: hotelia@gmail.com</p>
                    <p>WhatsApp: 3216549874</p>
                    <p>Twitter: Hotelia_39</p>
                    <p>Facebook: Hotelia39</p>
                </div>
        </div>
        <div class="row my-5" v-if="!isAuth">
            <div class="col text-center">
                <h3 class="text-info">¿QUIERES QUE TU HOTEL SE PUBLIQUE EN HOTELIA?</h3>
                <button class="btn btn-info" v-on:click="loadRegistroEncargado" type="button">Click Aqui</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Nosotros',
    data: function(){
        return{
            isAuth:false
        }
    },
    methods:{
        verifyAuth: async function () {
            this.isAuth = localStorage.getItem('isAuth') || false
            console.log(this.isAuth)
        },
        loadRegistroEncargado: function(){
            this.$router.push({
            name: 'SignUpEncargado'
          })
        }            
    },
    created: function(){
    this.verifyAuth()
  }
}
</script>