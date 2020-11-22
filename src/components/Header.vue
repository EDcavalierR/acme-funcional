<template>
  <header>
    <nav class="navbar navbar-expand-lg header" style="background-color: rgba(63, 195, 128, 0.1);">
      <div class="container">
        <a class="navbar-brand" href="#">
          <router-link to='/'>
            <img src="..\assets\logo.png" width="30%" height="30%" class="d-inline-block align-top" alt="" loading="lazy">
          </router-link>
        </a>
        <b><label style="font-size: 25px">Sistema de Control de Servicios Médicos IPS ACME</label></b>
          <div class="navbar-nav ml-auto">
            <router-link class="btn btn-success ml-3" to="/VistaAdminEmpleadosRegistrados">
              Soy Admin
            </router-link>
            <router-link class="btn btn-success ml-3" to="/Intermedio">
              Soy Empleado
            </router-link>
            <router-link class="btn btn-success ml-3" to="">
              Contactanos
            </router-link>
          </div>
      </div> 
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>


<style >
.header {
  display: flex;
}

.header a {
  align-items: center;
}

@media(max-width: 1000px){
    .header a {
      margin-top: 5px;
    }
}
</style>
