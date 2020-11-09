<template>
  <div class="container mt-4 mb-4">
    <div class="card border-secondary pl-5 pr-5">
        <div class="input-group mb-4 mt-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Cliente:</span>
          </div>
          <input type="text" class="form-control" placeholder="Pepito Perez" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Identificacion:</span>
          </div>
          <input type="text" class="form-control" placeholder="1005229334" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Correo electronico:</span>
          </div>
          <input type="text" class="form-control" placeholder="usuario@ejemplo.com" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Tipo de Cosulta:</span>
          </div>
          <select class="form-control" aria-label="Sizing example input">
            <option value="" disabled selected>--Seleccione--</option>
            <option value="CC">A</option>
            <option value="">B</option>
            <option value="">C</option>
            <option value="">D</option>
          </select>
        </div>
    </div>
    <div class="container">
        <div class="row mt-4">
        <div class="col-5 card border-secondary container">
            <h1 class="card-title mt-2"> Aca va el Calendario</h1>
        </div>
        <div class="col-6 card border-secondary container">
            <h3 class="card-title mt-2">Horario disponible</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Dia Selesccionado: 23/11/2020</li>
                <li class="list-group-item">Horas Disponibles: 2</li>
                <li class="list-group-item">Citas Disponibles: 3</li>
            </ul>

            <table class="table mt-4">
                    <thead class="table-success" style="text-align: center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Hora Disponible</th>
                            <th scope="col">Medico</th>
                            <th scope="col">Seleccione</th>
                        </tr>
                    </thead>
                <tbody style="text-align: center">
                        <tr>
                            <th scope="row">1</th>
                            <td>12:12 PM</td>
                            <td>Manuel</td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>12:19 PM</td>
                            <td>Carlitos</td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>12:23 PM</td>
                            <td>Francisco</td>
                            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
                        </tr>
                </tbody>
            </table>

        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SleccionCita',
  data() {
    return {        
    }
  }
}
</script>

<style>

</style>