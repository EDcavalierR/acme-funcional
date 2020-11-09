<template>
  <div class="inputcita">
    <div class="container card border-secondary">
      <form>
        <div class="input-group mb-4 mt-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Tipo de Identificacion:</span>
          </div>
          <select class="form-control" aria-label="Sizing example input">
            <option value="" disabled selected>--Seleccione--</option>
            <option value="CC">Cedula ciudadania</option>
            <option value="CE">Cedula extrangeria</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="RC">Regitro civil</option>
          </select>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Numero de documento:</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text">Nombres y  Apellidos:</span>
            </div>
            <input type="text" aria-label="First name" placeholder="Nombres" class="form-control">
            <input type="text" aria-label="Last name" placeholder="Apellidos" class="form-control">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Telefono fijo:</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Celular:</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Correo electronico:</span>
          </div>
          <input type="text" class="form-control" placeholder="usuario@ejemplo.com" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="row">
          <div class="col-lg-6">
              <button class="btn btn-primary btn-block mb-4">Volver</button>
          </div>
          <div class="col-lg-6">
              <button class="btn btn-primary btn-block mb-4">Solicitar Cita</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolicitarCita",
  data() {
    return {

    };
  },
};
</script>

<style>
.inputcita {
  margin-top: 10px;
}
</style>