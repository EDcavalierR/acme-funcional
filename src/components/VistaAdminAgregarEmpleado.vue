<template>
  <div class="general mt-2">
    <div class="row">
      <div class="col-lg-2">
        <div class="h pr-3 pl-3 pt-3">
          <div
            class="btn-group-toggle"
            style="display: block"
            data-toggle="buttons"
          >
            <label class="btn btn-outline-primary btn-block active">
              <i class="fas fa-edit"></i>
              <input type="radio" name="options" id="option1" checked />
              Empleado
            </label>
            <label class="btn btn-outline-primary btn-block">
              <i class="fas fa-calendar-alt"></i>
              <span>&nbsp;</span>
              <input type="radio" name="options" id="option2" /> Horarios
            </label>
            <label class="btn btn-outline-primary btn-block">
              <i class="fas fa-calendar-check"></i>
              <input type="radio" name="options" id="option3" /> Asistencia
            </label>
            <router-link class="btn btn-outline-primary btn-block" to="/AdminInformes">
              <i class="fas fa-clipboard-list"></i>
              <span>&nbsp;</span>
              Informes
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="container card border-secondary">
      <b><label class="mt-3" style="color: rgb(0, 110, 255); font-size: 22px">Ingrese los datos del Empleado</label></b>
      <hr color="grey">
    <form @submit="InsertarEmpleado" class="mt-2">
        <div class="form-group">
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">Numero de documento:</span>
                </div>
                <input v-model="empleado.DNI" type="text" class="form-control"/>
                </div>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Nombres y  Apellidos:</span>
                    </div>
                    <input v-model="empleado.Nombres" type="text" aria-label="First name" placeholder="Nombres" class="form-control">
                    <input v-model="empleado.Apellidos" type="text" aria-label="Last name" placeholder="Apellidos" class="form-control">
                </div>
                <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">Telefono fijo:</span>
                </div>
                <input v-model="empleado.Telefono" type="text" class="form-control"/>
                </div>
                <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">Celular:</span>
                </div>
                <input v-model="empleado.Celular" type="text" class="form-control"/>
                </div>
                <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">Correo electronico:</span>
                </div>
                <input  v-model="empleado.Correo" type="text" class="form-control" placeholder="usuario@ejemplo.com" />
                </div>
                
                <hr color="grey">
                <div class="mt-4">
                    <label>Tipo de Usuario</label>
                </div>
                <div class="container">
                    <div class="form-check">
                        <input v-model="empleado.TipoUsuario" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Medico" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            Medico
                        </label>
                    </div>
                    <div class="form-check">
                        <input v-model="empleado.TipoUsuario" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Secretaria">
                        <label class="form-check-label" for="exampleRadios2">
                            Secretaria
                        </label>
                    </div>
                </div>
                <hr color="grey">
                <div class="input-group mb-4 mt-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Usuario y contraseña:</span>
                    </div>
                    <input v-model="empleado.Usuario" type="text" aria-label="Usuario" placeholder="Usuario" class="form-control">
                    <input v-model="empleado.Contraseña" type="password" aria-label="Contraseña" placeholder="Contraseña" class="form-control">
                </div>
                <hr color="grey">
                <div class="row">
                <div class="col-lg-6">
                    <router-link to="/VistaAdminEmpleadosRegistrados" class="btn btn-primary btn-block mb-4">
                      Volver
                    </router-link>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-primary btn-block mb-4">Agregar Empleado</button>
                </div>
            </div>
        </div>
    </form>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
class Empleado {
  constructor(dni, nombres, apellidos, telefono, celular, correo, tipousuario, usuario, contraseña) {
      this.DNI = dni;
      this.Nombres = nombres;
      this.Apellidos = apellidos;
      this.Telefono = telefono;
      this.Celular = celular;
      this.Correo = correo;
      this.TipoUsuario = tipousuario;
      this.Usuario = usuario;
      this.Contraseña = contraseña;
  }
}
export default {
  name: "VistaAdminAgregarEmpleado",
  data() {
    return {
      empleado: new Empleado()
    };
  },
  methods: {        
    InsertarEmpleado () {        
        fetch('http://localhost:3000/agregarempleado', {
            method: 'POST',
            body: JSON.stringify(this.empleado),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));   
        
        this.empleado = new Empleado();
        alert('Un empleado se ha agregado');
    }
  }
};
</script>

<style>
.general {
  padding-left: 15px;
  padding-right: 20px;
}
.h {
  border: solid 1px grey;
  height: 43.6rem;
  background: white;
}
.GEmpleados{
    font-size: 20px;
}
.titulo{
    color: rgb(0, 110, 255);
    font-weight: 600;
}

</style>