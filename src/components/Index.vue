<template>
    <div class="container">
        <div class="tittle">
            <h1>Bienvenidos a la Web de citas de IPS ACME</h1>
        </div>
        <div class="row contbtn align-middle" style="text-align: center;">
            <div class="col-lg-4" style="text-align: right">
                <a class="btn btn-primary" href="#">Solicitar Cita</a>
            </div>
            <div class="col-lg-4" style="text-align: center">
                <a class="btn btn-primary" href="#">Cancelar o Modificar Cita</a>
            </div>
            <div class="col-lg-4" style="text-align: left">
                <a class="btn btn-primary" href="#">Consultar Cita</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
        
    };
  },
};
</script>

<style>
.contbtn a{
    padding: 15px;
    font-weight: 500;
}
.contbtn{
    align-items: center;
    margin-top: 30vh;
}
body{
    background-image: url(../assets/FondoIndex.jpg);
    background-size: cover;
    font-family: 'Capriola', sans-serif;
}

h1 {
  text-align: center;
  color: rgb(0, 110, 255);
}

.tittle{
    margin: auto;
    width: 1200px;
    max-width: 50%;
    margin-top: 50px;
    margin-bottom: 10px;
}
</style>