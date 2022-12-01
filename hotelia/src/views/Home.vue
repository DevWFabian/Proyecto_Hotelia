<template>
    <div class="container ">
        <div class="row justify-content-center">
            <div class="col-11 m-5">
                <div class="card m-1">
                    <div id="carouselhotel"  class="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div class="carousel-inner rounded shadow">
                            <div class="carousel-item active  ">
                                <img src="@/images/hotel1.jpg" class="img-fluid w-100" height="400px" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="@/images/hotel2.jpg" class="img-fluid w-100" height="400px" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="@/images/hotel3.jpg" class="img-fluid w-100" height="400px" alt="...">
                            </div>
                            
                            <div class="carousel-item ">
                                <img src="@/images/hotel5.jpg" class="img-fluid w-100" height="400px" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev bg-secundary rounded-start bg-opacity-25" type="button"
                            data-bs-target="#carouselhotel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next bg-secundary rounded-end bg-opacity-25" type="button"
                            data-bs-target="#carouselhotel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data: function () {
            return {
                NumeroHuespedes: 0
            }
        }
    }
</script>