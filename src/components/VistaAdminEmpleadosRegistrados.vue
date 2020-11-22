<template>
    <div class="general mt-2">
        <div class="row">
            <div class="col-lg-2">
                <div class="h pr-3 pl-3 pt-3">
                    <div class="btn-group-toggle" style="display: block;" data-toggle="buttons">
                        <router-link class="btn btn-outline-primary btn-block active" to="/VistaAdminEmpleadosRegistrados">
                            <i class="fas fa-edit"></i>
                            <input type="radio" name="options" id="option1" checked /> Empleado
                        </router-link>
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
                            Informes
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="h" style="display: block; border: solid 1px grey;">
            <div class="pt-2 pb-1 pl-2 mb-4 mt-2 ml-2 mr-2" style="border: solid 1px grey;">
                <h5 style="font-weight: 600;">Empleados Registrados</h5>
            </div>
            <div class="row ml-2 mr-2" style="border: solid 1px grey;">
                <div class="col-9 pt-3" >
                    <h5 class="mb-5 ml-1 titulo">Criterios de busqueda</h5>

                    <div class="ml-3">
                        <div class="row" style="text-align: center; align-items: center;">
                        <div class="col-3 pl-1 pr-1">
                            <label><input type="radio" aria-label="Radio button for following text input"><span>&nbsp;</span> Codigo:</label>
                            <input type="text">
                        </div>
                        <div class="col-3 pl-1 pr-1 ">
                            <label>Cedula:</label>
                            <input type="text">
                        </div>
                        <div class="col-3 pl-1 pr-1">
                            <label>Nombre:</label>
                            <input type="text">
                        </div>
                        <div class="col-2 pl-1 pr-1" style="text-align: right">
                            <button class="btn btn-outline-secondary">
                                <i class="fas fa-search fa-2x" ></i>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-3 mb-3">
                    <div class="mt-3 pl-1 pb-3" style="border: solid 1px grey; display: block; text-align: center">
                        <div class="container">
                            <h6 class="mt-3 mb-3 GEmpleados titulo">Gestionar empleados</h6>
                            <router-link to="/VistaAdminAgregarEmpleado" class="btn btn-primary btn-block">
                                Nuevo
                            </router-link>
                            <button class="btn btn-primary btn-block">Modificar</button>
                            <button class="btn btn-primary btn-block">Dar de baja</button>
                        </div>                    
                    </div>
                </div>
            </div>

            <div class="m-3 mt-5">
                <div class="mb-4">
                    <h5 class="titulo ml-2">Lista de empleados registrados</h5>
                </div>
                <div class="container">
                    <table class="table mt-4">
                        <thead class="table-success" style="text-align: center">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Cargo</th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center">
                            <tr v-for="empleado of Empleados">
                            <th scope="row">{{ Empleados.indexOf(empleado)+1}}</th>
                            <th scope="row">{{ empleado.Apellidos }}</th>
                            <th scope="row">{{ empleado.Nombres }}</th>
                            <th scope="row">{{ empleado.DNI }}</th>
                            <th scope="row">{{ empleado.Correo }}</th>
                            <th scope="row">{{ empleado.TipoUsuario }}</th>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="container mt-5" style="text-align: center">
                    <div style="display: block">
                        <label style="color: rgb(0, 110, 255);">Controles</label>
                        <div>
                            <button class="btn btn-outline-primary mr-3">
                                <i class="fas fa-chevron-left fa-2x" ></i>
                            </button>
                            <button class="btn btn-outline-primary">
                                <i class="fas fa-chevron-right fa-2x" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
  </div>
</div>
</template>

<script>
export default {
name: 'VistaAdminEmpleadosRegistrados',
data(){
    return{
        Empleados: []
    }
},
created(){
    this.ObtenerEmpleados()
},
methods: {
    ObtenerEmpleados(){
        fetch('http://localhost:3000/obtenerempleadot',)
            .then(res => res.json())
            .then(data => {
            this.Empleados = data
        })
    }
}
}
</script>

<style>
.general {
  padding-left: 15px;
  padding-right: 20px;
}
.h {
  border: solid 1px grey;
  height: 60rem;
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