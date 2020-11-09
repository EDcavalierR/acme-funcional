<template>
    <div style="display: block; border: solid 1px grey;">
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
                        <button class="btn btn-primary btn-block">Nuevo</button>
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
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cedula</th>
                        <th scope="col">Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Parra</td>
                        <td>Camilo</td>
                        <td>1023007710</td>
                        <td>Medico</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Linarez</td>
                        <td>Beatriz</td>
                        <td>819283812</td>
                        <td>Secretaria</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Maceta</td>
                        <td>Marlon</td>
                        <td>981221371</td>
                        <td>Medico</td>
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
</template>

<script>
export default {
  name: 'EmpleadosRegistrados',
  data () {
    return {

    };
  }
}
</script>

<style>
    .GEmpleados{
        font-size: 20px;
    }
    .titulo{
        color: rgb(0, 110, 255);
        font-weight: 600;
    }
</style>
