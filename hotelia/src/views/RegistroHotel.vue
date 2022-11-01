<template>
    <div class="container-fluid p-5 ">
        <div class="row justify-content-center">
            <div class="col-9">
                <div class="card p-5 m-5">

                    <div class="container-fluid ">
                        <h3 class="text-center" style="background-color: rgb(43, 183, 226);">FORMULARIO HOTEL</h3>
                        <br>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">NOMBRE DEL HOTEL</label>
                                <input type="text" class="form-control" id="validationCustom01" value=" " required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom02" class="form-label">DIRECCIÓN</label>
                                <input type="text" class="form-control" id="validationCustom02" value=" " required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">DESCRIPCIÓN DEL
                                    HOTEL</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">CIUDAD</label>
                                <input type="text" class="form-control" id="validationCustom03" required>
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">SERVICIOS</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Seleccione...</option>
                                    <option>Hospedaje</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">TELEFONO</label>
                                <input type="number" pattern="0-9" class="form-control" id="validationCustom05"
                                    required>
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Aceptar los términos y condiciones
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" style="background-color: rgb(43, 183, 226);"
                                    type="submit">Enviar formulario</button>
                            </div>
                        </form>
                        <br>
                        <div class="text-center" role="alert">
                            <h2 class="text-center" style="background-color: rgb(43, 183, 226);"> BIENVENIDO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>