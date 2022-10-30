<template>
    <div class="container ">
        <div class="row">
            <div class="col">
                <div class="card text-center shadow m-5">
                    <div class="card-header ">
                        <h4 class="card-title text-uppercase">Busca hotel</h4>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <div class="col-md-3">
                                <div class="form-floating rounded-start">
                                    <input type="text" class="form-control" placeholder="Destino">
                                    <label>Destino</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating ">
                                    <input type="number" class="form-control" placeholder="name@example.com">
                                    <label>Huespedes</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating ">
                                    <input type="date" class="form-control" placeholder="check-in">
                                    <label class="text-secondary opacity-75">Check-in</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating ">
                                    <input type="date" class="form-control " placeholder="check-out">
                                    <label class="text-secondary opacity-50 ">Check-out</label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        <button class="btn btn-outline-primary text-uppercase" type="button"
                            id="button-addon2">reservar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-11 m-5">
                <div id="carouselhotel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner rounded shadow" >
                        <div class="carousel-item active  ">
                            <img src="@/images/hotel1.jpg" class=" w-100" height="500px"  alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img src="@/images/hotel2.jpg" class="  w-100" height="500px" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img src="@/images/hotel3.jpg" class="  w-100" height="500px" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img src="@/images/hotel4.jpg" class="  w-100" height="500px" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img src="@/images/hotel5.jpg" class="  w-100" height="500px" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev bg-dark rounded-start bg-opacity-25" type="button" data-bs-target="#carouselhotel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next bg-dark rounded-end bg-opacity-25" type="button" data-bs-target="#carouselhotel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>