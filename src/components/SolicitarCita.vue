<template>
  <div class="inputcita">
    <div class="container card border-secondary">
      <form @submit.prevent="InsertarPaciente">
        <div class="input-group mb-4 mt-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Tipo de Identificacion:</span>
          </div>
          <select v-model="paciente.TipoDeIdentificacion" class="form-control" aria-label="Sizing example input">
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
          <input v-model="paciente.DNI" type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text">Nombres y  Apellidos:</span>
            </div>
            <input v-model="paciente.Nombres" type="text" aria-label="First name" placeholder="Nombres" class="form-control">
            <input v-model="paciente.Apellidos" type="text" aria-label="Last name" placeholder="Apellidos" class="form-control">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Telefono fijo:</span>
          </div>
          <input v-model="paciente.Telefono" type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Celular:</span>
          </div>
          <input v-model="paciente.Celular" type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Correo electronico:</span>
          </div>
          <input v-model="paciente.Correo" type="text" class="form-control" placeholder="usuario@ejemplo.com" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="row">
          <div class="col-lg-6">
              <router-link class="btn btn-primary btn-block mb-4" to="/">
                Volver
              </router-link>
          </div>
          <div class="col-lg-6">  
            <button class="btn btn-primary btn-block mb-4">
              Guardar
            </button>
          </div>
        </div>
        <div>
          <router-link class="btn btn-primary btn-block mb-4" to="/SeleccionCita" >Continuar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
class Paciente {
        constructor(tipoidentificacion, dni, nombres, apellidos, celular, telefono, correo, tipousuario, usuario, contraseña) {
            this.TipoDeIdentificacion = tipoidentificacion;
            this.DNI = dni;
            this.Nombres = nombres;
            this.Apellidos = apellidos;
            this.Celular = celular;
            this.Telefono = telefono;
            this.Correo = correo;
            this.TipoUsuario = 'Paciente';
            this.Usuario = 'usuario';
            this.Contraseña = 'contraseña';
        }
    }

export default {
name: "SolicitarCita",
  data() {
    return {
      paciente: new Paciente()
    }
  },
  methods: {
    InsertarPaciente () {        
        fetch('http://localhost:3000/agregarpaciente', {
            method: 'POST',
            body: JSON.stringify(this.paciente),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));   
        
        this.$emit('NombreP', this.paciente.Nombres)
        this.$emit('ApellidoP', this.paciente.Apellidos)
        this.$emit('IdP', this.paciente.DNI)
        this.$emit('CorreoP', this.paciente.Correo)
        this.paciente = new Paciente();
        alert('Tus datos se han guardado');
    }
  }
}
</script>

<style>
.inputcita {
  margin-top: 10px;
}
</style>