<template>
    <div class="h hh ttt">
        <div v-if="MostrarVentana" class="container ventanaE www">
            <form @submit.prevent="Comprobar">
                <div class="p-3 ventanitaE">
                    <p class="p">
                        Por favor ingrese su Usuario y Contraseña
                    </p>
                    <div class="pl-5 pr-5">
                        <input v-model="Usuario" type="text" class="form-control mb-3"/>
                        <input v-model="Contraseña" type="password" class="form-control mb-3"/>
                    </div>
                    <button class="btn btn-primary" >Continuar</button>
                </div>
            </form>
        </div>  


        <div v-if="IngresadoSecre" class="VentanaE a h hh">
            <p class="p">
                Bienvenido {{ empleado.Nombres }} {{ ' ' }} {{ empleado.Apellidos }}
            </p>
            <router-link class="btn btn-primary" to="/VistaSecre">
                Continuar
            </router-link>
        </div>


        <div v-else-if="IngresadoMedico" class="VentanaE a h hh" >
            <div class="ventanitaE">
                <p class="p">
                Bienvenido {{ empleado.Nombres }} {{ ' ' }} {{ empleado.Apellidos }}
            </p>
            <router-link class="btn btn-primary mb-4" to="/VistaMedico">
                Continuar
            </router-link>
            </div>
        </div>

        
        <div v-else-if="noregistro" class="VentanaE a h hh">
            <p class="p">
                Contraseña o Usuario invalidos
            </p>
            <button class="btn btn-primary" @click="intento">
                Volver a intentar
            </button>
            <router-link class="btn btn-primary" to="/">
                Volver a inicio
            </router-link>
        </div>  
    </div>
</template>

<script>
export default {
name: 'Intermedio',
data(){
    return{
        Usuario: '',
        Empleados: [],
        MostrarVentana: true,
        IngresadoSecre: false,
        IngresadoMedico: false,
        Contraseña: '',
        noregistro: false,
        empleado: ''
    }
},
methods: {
    intento(){
        this.MostrarVentana = true
        this.IngresadoSecre = false
        this.IngresadoMedico = false
        this.noregistro = false
    },
    Comprobar(){
        fetch('http://localhost:3000/obtenerempleadot',)
            .then(res => res.json())
            .then(data => {
                this.Empleados = data; 
                this.Empleados.forEach(empleado => {

                    if(empleado.Usuario == this.Usuario && empleado.Contraseña == this.Contraseña){
                        this.$emit('IdE', empleado.DNI);
                        
                        this.empleado = empleado
                        this.MostrarVentana = false
                        
                        if(empleado.TipoUsuario == 'Medico'){
                            this.IngresadoMedico = true
                        }

                        if(empleado.TipoUsuario == 'Secretaria'){
                            this.IngresadoSecre = true
                        }

                    }
                    
                    if(this.IngresadoSecre == false && this.IngresadoMedico == false){
                        this.MostrarVentana = false
                        this.noregistro = true
                    }
                })
            })
            .catch(err => console.log(err))
    }
},
}
</script>

<style>
.www{
    margin-left: 100px;
    margin-top: 150px;
}
.ttt {
    height: 548px;
}
</style>