<template>
    <div class="container">
        <div class="tittle">
            <h1 class="h1">Bienvenidos a la Web de citas de IPS ACME</h1>
        </div>

        <div class="container ventanaE" v-if="ventanaId">
            <form @submit.prevent="ComprobarId">
                <div class="p-3 ventanitaE">
                    <p class="p">
                        Por favor ingrese su DNI
                    </p>
                    <div class="pl-5 pr-5">
                        <input v-model="Id" type="text" class="form-control mb-3"/>
                    </div>
                    <button @click="Cerrar" class="btn btn-primary">Cerrar</button>
                    <button class="btn btn-primary" >Confirmar</button>
                </div>
            </form>
        </div>

        <div class="container ventanaE" v-if="ventanaId2">
            <form @submit.prevent="ComprobarId2">
                <div class="p-3 ventanitaE">
                    <p class="p">
                        Por favor ingrese su DNI
                    </p>
                    <div class="pl-5 pr-5">
                        <input v-model="Id2" type="text" class="form-control mb-3"/>
                    </div>
                    <button @click="Cerrar2" class="btn btn-primary">Cerrar</button>
                    <button class="btn btn-primary" >Confirmar</button>
                </div>
            </form>
        </div>

        <div class="container ventanaE" v-if="ventanaRegistro">
            <div class="ventanitaE p-3" v-if="registrado">
                <p class="p">
                    Felicidades, ya se encuentra en el sistema
                </p>
                <router-link class="btn btn-primary" to="/SeleccionCita">
                    SeleccionarCita
                </router-link>
            </div>
            <div class="ventanitaE p-3" v-else>
                <p class="p">
                    Aun no se encuentra registrado
                </p>
                <router-link class="btn btn-primary" to="/SolicitarCita">
                    SolicitarCita
                </router-link>
            </div>
        </div>

        <div class="container ventanaE" v-if="ventanaRegistro2">
            <div class="ventanitaE p-3" v-if="registrado">
                <p class="p">
                    Felicidades, ya se encuentra registrado
                </p>
                <router-link class="btn btn-primary" to="/VistaPaciente">
                    Ir a citas
                </router-link>
            </div>
            <div class="ventanitaE p-3" v-else>
                <p class="p">
                    No se encontraron citas relacionadas con ese DNI
                </p>
                <button @click="Cerrar3" class="btn btn-primary">
                    Continuar
                </button>
            </div>
        </div>
        
        <div class="row contbtn align-middle" style="text-align: center;">
            <div class="col-lg-4" style="text-align: right">
                <button @click="Abrir" class="btn btn-primary">Solicitar Cita</button>
            </div>
            <div class="col-lg-4" style="text-align: center">
                <button @click="Abrir2" class="btn btn-primary">Cancelar o modificar Cita</button>
            </div>
            <div class="col-lg-4" style="text-align: left">
                <button @click="Abrir2" class="btn btn-primary">Consultar Cita</button>
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

export default {
  name: "Index",
  data() {
    return {
        IdPacientes: [],
        Id: '',
        Id2: '',
        ventanaId: false,
        ventanaId2: false,
        ventanaRegistro: false,
        ventanaRegistro2: false,
        registrado: false,
        registrado2: false,
        paciente: new Paciente()
    }
  },
  methods: {
      ComprobarId(){    
          fetch('http://localhost:3000/obtenerpaciente',)
            .then(res => res.json())
            .then(data => {
                this.IdPacientes = data;
                
                for (let Idpaciente of this.IdPacientes){
                    if(Idpaciente.DNI == this.Id){
                        this.paciente = Idpaciente;
                        this.registrado = true

                        this.$emit('NombreP', this.paciente.Nombres)
                        this.$emit('ApellidoP', this.paciente.Apellidos)
                        this.$emit('IdP', this.paciente.DNI)
                        this.$emit('CorreoP', this.paciente.Correo)
                        
                    }
                    console.log(this.registrado)
                }
            })
            .catch(err => console.log(err))


            this.ventanaId = false
            this.ventanaRegistro = true
      },
      ComprobarId2(){
          fetch('http://localhost:3000/obtenerpaciente',)
            .then(res => res.json())
            .then(data => {
                this.IdPacientes = data;
                for (let Idpaciente of this.IdPacientes){
                    if(Idpaciente.DNI == this.Id2){
                        this.paciente = Idpaciente;
                        this.registrado = true
                        
                        console.log(this.paciente.DNI);
                        this.$emit('IdP', this.paciente.DNI)
                    }
                    console.log(this.registrado)
                }
            })
            .catch(err => console.log(err))
            this.ventanaId2 = false
            this.ventanaRegistro2 = true
      },
      Abrir(){
          this.ventanaId = true;
      },
      Cerrar() {
          this.ventanaId = false;
          this.Id = ''
      },
      Abrir2() {
          this.ventanaId2 = true;
      },
      Cerrar2() {
          this.ventanaId2 = false;
          this.Id2 = ''
      },
      Cerrar3(){
          this.ventanaRegistro2 = false;   
          this.registrado2 = false;
          this.Id2 = ''
      }
  },
};
</script>

<style>
.contbtn button{
    padding: 15px;
    font-weight: 500;
}
.contbtn{
    align-items: center;
    margin-top: 30vh;
}

.h1 {
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

.ventanaE {
    margin-top: 40spx;
    padding-left: 250px;
    padding-right: 250px;
    align-items: center;
    text-align: center;
    position: absolute;
}   

.ventanitaE {
    background: white;
    border: solid 1px grey;
    border-radius: 10px;
}

.p {
    font-weight: 600;
    font-size: 17px;
}
</style>