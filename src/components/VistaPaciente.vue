<template>
  <div class="pr-3">
      <div class="row h" style="background-color: rgba(63, 195, 128, 0.1);">
          <div class="col-6 ml-auto" style="display: flex">
            <i class="fas fa-user fa-2x pt-1 mr-4 ml-4"></i>
            <p class="hh pt-2 t">
                CC {{ this.paciente.DNI }}-{{ this.paciente.Nombres }} {{ ' ' }} {{ this.paciente.Apellidos }}
            </p>
            <label class="alert bg-info text-white hh p-2 mr-4 ml-4">
                <i class="fas fa-check"></i>
                Activo
            </label>
            <router-link to="/" class="p-2 alert bg-dark text-white ml-auto hh">
                <i class="fas fa-sign-out-alt"></i>
                Salir
            </router-link>
          </div>
      </div>
      <div class="row mt-4">
        <div class="h mt-3 ml-5 mb-3 pl-5 pr-5 pt-3 col-5">
            <h3 class="mb-3">Asignacion de citas médicas</h3>
            <div class="row">
                <div class="col-4">
                    <router-link class="btn btn-primary btn-block" to="/SolicitarCita">
                        Solicitar Cita
                    </router-link>
                </div>
            </div> 
            <br>
            <hr color="rgb(153, 153, 153);">
            <div>
                <div class="mt-4 pl-4 pr-4 row">
                    <div class="col-5">
                        <h4>Asistencia</h4>
                    </div>
                    <div class="col-6 ml-auto">
                        <p style="text-align: right;">Total de consultas: 2</p>
                    </div>
                </div>
            </div>
            <hr color="grey">
            <div>
                <table class="table" style="text-align: center">
                    <thead>
                        <tr>
                        <th scope="col"># Cita</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Medico</th>
                        <th scope="col">Locación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Tue Nov 10 2020</td>
                        <td>monse caceres</td>
                        <td>bucaramanga</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Tue Oct 13 2020</td>
                        <td>vidal fernando</td>
                        <td>bucaramanga</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Wed Sep 2 2020</td>
                        <td>valentina hernandez</td>
                        <td>bucaramanga</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="h mt-3 r mb-3 pt-3 col-6">
            <div class="p-3">
                <div class="row">
                    <div class="col-6">
                        <h2>Proximas Consultas</h2>
                    </div>
                    <div style="text-align: right" class="ml-auto col-4">
                        <label class="alert bg-info text-white p-1">Agenda Programada</label>
                    </div>
                </div>
            </div>      
            <hr class="mt-auto" color="grey">
                <table class="table table-bordered" style="text-align: center">
                    <thead>
                        <th>Fecha</th>
                        <th>Médico</th>
                        <th>Hora</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </thead>
                    <tbody>
                        <tr v-for="cita of CitasPaciente">
                            <td>{{ cita.FechaCita }}</td>
                            <td>
                                {{ medicosP[CitasPaciente.indexOf(cita)+1].Nombres }}
                                {{ medicosP[CitasPaciente.indexOf(cita)+1].Apellidos }}
                            </td>
                            <td>
                                <p class="p-1 text-white" style="border-radius: 5px; background: rgb(83, 184, 83);;">H: 11:00 AM
                                </p>
                            </td>
                            <td><router-link to="/SeleccionCita" class="btn btn-danger"><i class="fas fa-edit"></i></router-link></td>

                            <td><button @click="borrarcita(cita._id)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                </table>
                <button @click="llamartodo" class="btn btn-primary mb-4">
                    <i class="fas fa-edit"></i>
                    Consultar    
                </button>
        </div>
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
class Empleado {
    constructor(dni, nombres, apellidos, celular, telefono, correo, tipousuario, usuario, contraseña) {
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
name: 'VistaPaciente',
data(){
    return {
        pacientes: [],
        medicos: [this.medico],
        medicosP: [this.medico],
        medico: new Empleado(),
        paciente: new Paciente(),
        Idp: this.IdP,
        CitasTotales: [],
        CitasPaciente: [],
        Modificar: true
    }
},
created() {
    this.llamartodo()
},
methods: {    
    borrarcita(id){
        fetch('http://localhost:3000/borrarcita/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Cita eliminada')
        this.$emit('IdP', this.paciente.DNI)
        location.reload();
        this.llamartodo();
    },
    llamartodo(){
        this.ObtenerPaciente()   
        this.ObtenerCitaPaciente()
        this.ObtenerMedicos()
        this.$emit('IdP', this.paciente.DNI)
        this.$emit('NombreP', this.paciente.Nombres)
        this.$emit('ApellidoP', this.paciente.Apellidos)
        this.$emit('IdP', this.paciente.DNI)
        this.$emit('CorreoP', this.paciente.Correo)
        this.$emit('Modificar', this.Modificar)
    },
    ObtenerMedicos(){
    fetch('http://localhost:3000/obtenerempleado',)
      .then(res => res.json())
      .then(data => {
        this.medicos = data
        this.medicos.forEach(medico => {
            this.CitasPaciente.forEach(cita => {
                if(medico.DNI == cita.IdMedico){
                    this.medicosP.push(medico)
                }
            })
        })
      })
    },
    ObtenerPaciente(){
        fetch('http://localhost:3000/obtenerpaciente',)
            .then(res => res.json())
            .then(data => {
                this.pacientes = data;
                
                this.pacientes.forEach(paciente => {
                    if(paciente.DNI == this.Idp){
                        this.paciente = paciente;
                    }
                })
            })
            .catch(err => console.log(err))   
    },
    ObtenerCitaPaciente(){
        let p = 0
        fetch('http://localhost:3000/obtenercita',)
            .then(res => res.json())
            .then(data => {
                this.CitasTotales = data
                this.CitasTotales.forEach(cita => {
                    if(cita.DNIPaciente == this.paciente.DNI){
                        this.CitasPaciente[p] = cita
                        p++
                    }
                })
        })
        
    }
},
props: ['IdP'],
}
</script>

<style>
.h {
    border: solid 1px grey;
    background: white;
}
.hh {
    text-align: center;
    align-items: center;
    margin-bottom: auto;
    vertical-align: middle;
}
.t {
    font-weight: 600;
    font-size: 17px;
}
.r{
    margin-left: 40px;
}
</style>