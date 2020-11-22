<template>
    <div class="fondo">
        <div class="label bg-primary pt-3 pb-1" style="color: white;">
            <p>
                Confirmar de Cita
            </p>
        </div>
        <div class=" row mt-4">


            <div class="col-lg-6 root cal-top">
                <div class="cal">
                    <span class="alert bg-info btn-block text-white"
                     style="font-weight: bold; font-size: 20px;">{{ this.mes }} {{' '}} {{ this.año }}</span>
                    <div class="root">
                        <h3 style="font-weight: bold; font-size: 20px;">{{ this.dia }}</h3>
                        <h2 class="ml-1" style="font-weight: bold; font-size: 40px;">
                            {{ this.dianum }}
                        </h2>
                    </div>
                    <div>
                        <span class="alert bg-secondary btn-block text-white"
                        style="font-size: 20px;"><i class="far fa-clock"></i>{{ ' ' }} {{ this.hora }}</span>
                    </div>
                </div>
            </div>



            <div class="col-lg-6 root">
                <div class="container row">
                    <div class="col-3 list-group m">
                        <span>Cliente: </span>
                        <span>Identificación: </span>
                        <span>Tipo de cita: </span>
                        <span>Médico: </span>
                    </div>
                    <div class="col-3 list-group m">
                        <span class="data">
                            {{ this.paciente.Nombres }} {{ ' ' }} {{ this.paciente.Apellidos }}
                        </span>
                        <span class="data">{{ this.paciente.DNI }}</span>
                        <span class="data">{{ this.cita.TipoCita }}</span>
                        <span class="data">{{ this.medico.Nombres }} {{ ' ' }} {{ this.medico.Apellidos }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="label_m mt-3">
            <p>
                Por favor presione el boton ACEPTAR para confirmar su cita
            </p>
        </div>
        <div class="container row rounded mx-auto" style="justify-content: center;">
            <div class="col-5">
                <router-link to="/SeleccionCita" class="btn btn-primary btn-block">
                    Volver
                </router-link>
            </div>
            <div class="col-5">
                <button @click="AgregarCita" class="btn btn-primary btn-block">
                    Aceptar
                </button>
            </div>
        </div>
        <div class="container mt-3 btninicio" v-if="mostrarbtnsalida">
             <router-link to="/" class="btn btn-primary btn-block">
                Volver a Inicio
            </router-link>
        </div>
        <div class="container mt-5 abajo">
            <span style="font-weight: 600;">Requisitos minimos:</span>
            <div class="label_f mt-4">
                <p style="font-weight: 600;">
                    Recuerde:
                </p>
                <p>
                    1. Confirmar la asistencia a la cita.
                </p>
                <p>
                    2. Llegar 10 minutos antes.
                </p>
                <p>
                    3. En caso de no poder asistir a su cita, debe cancelarla con 2 horas de antelacion.
                </p>
                <p>
                    4. Confirmar la asistencia a la cita
                </p>
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
name: "ConfirmarCita",
data() {
    return {
        cita: this.Cita,
        mes: '',
        año: '',
        dia: '',
        dianum: '',
        hora: '',
        pacientes: [],
        medicos: [],
        paciente: new Paciente(),
        medico: new Empleado(),
        mostrarbtnsalida: false,
    }
},
methods: {
    ObtenerMedico(){
        fetch('http://localhost:3000/obtenerempleado')
            .then(res => res.json())
            .then(data => {
                this.medicos = data;
                this.medicos.forEach(medico => {
                    if(medico.DNI == this.cita.IdMedico){
                        this.medico = medico;
                    }
                })
            }) 
    },
    ObtenerPaciente(){
        fetch('http://localhost:3000/obtenerpaciente')
            .then(res => res.json())
            .then(data => {
                this.pacientes = data;
                this.pacientes.forEach(paciente => {
                    if(paciente.DNI == this.cita.DNIPaciente){
                        this.paciente = paciente;
                    }
                })
            }) 
    },
    AgregarCita(){
        fetch('http://localhost:3000/agregarcita', {
            method: 'POST',
            body: JSON.stringify(this.cita),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));

        alert('Tu cita se ha guardado correctamente')
        this.mostrarbtnsalida = true
    },
    ObtenerValores(){
        this.dia = this.cita.FechaCita.toString().substr(0, 3);

        if(this.dia == "Sun"){this.dia = "Domingo"}    
        if(this.dia == "Sat"){this.dia = "Sabado"}
        if(this.dia == "Fri"){this.dia = "Viernes"}
        if(this.dia == "Thu"){this.dia = "Jueves"}
        if(this.dia == "Wed"){this.dia = "Miercoles"}
        if(this.dia == "Tue"){this.dia = "Martes"}
        if(this.dia == "Mon"){this.dia = "Lunes"}

        this.mes = this.cita.FechaCita.toString().substr(3, 5);

        this.año = this.cita.FechaCita.toString().substr(10, 10);

        this.dianum = this.cita.FechaCita.toString().substr(8, 3);
        this.hora = '12:12 pm'
    }
},
created(){
    this.ObtenerValores()
    this.ObtenerPaciente()
    this.ObtenerMedico()
},
props: ['Cita', 'Modificar']
}

</script>

<style>
.btninicio {
  padding: 0 122px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cal-top {
    display: flex;
    height: 200px;
}
.cal {
    text-align: center;
    width: 400px;

}
.root {
  justify-content: center;
  align-items: center;
}
.fondo {
    background-color: white;
    height: 750px;
    border: solid 1px grey;
}
.label {
    display: block;
    text-align: center;
    justify-content: center;
    align-items: center;
    }
.label p{
    font-size: 20px;
}
.label_m {
    display: block;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.label_m p{
    font-size: 17px;
    background: #93defc;
    color: rgb(46, 46, 46);
    font-weight: 400;
    padding: 5px;
}
.m {
    padding: 10px;
}
.label_f {
    border: solid 1px grey;
    padding: 10px;
}
.data {
    font-weight: 600;
}
.b {
    justify-content: center;
    text-align: center;
    align-items: center;
}
</style>