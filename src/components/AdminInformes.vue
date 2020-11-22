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
            <router-link class="btn btn-outline-primary btn-block" to="/VistaAdminEmpleadosRegistrados">
              <i class="fas fa-edit"></i>
                Empleado 
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
            <router-link checked class="btn btn-outline-primary btn-block active" to="/AdminInformes">
              <i class="fas fa-clipboard-list"></i>
                 Informes
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="container card border-secondary">
            <table class="table mt-4">
                <thead class="table-success" style="text-align: center">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">DNI Paciente</th>
                      <th scope="col">Duracion</th>
                      <th scope="col">Tipo Cita</th>
                      <th scope="col">Estado cita</th>
                      <th scope="col">Precio cita</th>
                      <th scope="col">Fecha Cita</th>
                      <th scope="col">Hora Cita</th>
                      <th scope="col">DNI medico</th>
                    </tr>
                </thead>
                <tbody style="text-align: center">
                    <tr v-for="cita of Citas">
                      <th scope="row">{{ Citas.indexOf(cita)+1}}</th>
                      <th scope="row">{{ cita.DNIPaciente }}</th>
                      <th scope="row">{{ cita.Duracion }}</th>
                      <th scope="row">{{ cita.TipoCita }}</th>
                      <th scope="row">{{ cita.EstadoCita }}</th>
                      <th scope="row">{{ cita.PrecioCita }}</th>
                      <th scope="row">{{ cita.FechaCita }}</th>
                      <th scope="row">{{ cita.HoraCita }}</th>
                      <th scope="row">{{ cita.IdMedico }}</th>
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
name: "AdminInformes",
  data() {
    return {
      Citas: []
    };
  },
  created(){
      this.ObtenerCita()
  },
  methods:{
    ObtenerCita(){
    fetch('http://localhost:3000/obtenercita',)
        .then(res => res.json())
        .then(data => {
            this.Citas= data
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