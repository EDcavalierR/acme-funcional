<template>
  <div class="container mt-4 mb-4">
    <form @submit.prevent="AgregarCita">
      <div class="card border-secondary pl-5 pr-5">
        <div class="input-group mb-4 mt-4">
            <div class="input-group-prepend">
              <span class="input-group-text">Cliente:</span>
            </div>
            <span class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              {{ NombrePaciente }} {{ ApellidoPaciente }}
            </span>
        </div>
        <div class="input-group mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text">Identificacion:</span>
            </div>
              <span class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              {{  IdPaciente  }}
            </span>
        </div>
        <div class="input-group mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text">Correo electronico:</span>
            </div>
            <span class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              {{ CorreoPaciente }}
            </span>
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Tipo de Cosulta:</span>
          </div>
          <select v-model="cita.TipoCita" class="form-control" aria-label="Sizing example input">
            <option value="" disabled selected>--Seleccione--</option>
            <option value="A">Virtual</option>
            <option value="B">Presencial</option>
          </select>
        </div>
      </div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-5 card border-secondary container root">



          <div class="calendar" name="calendar" id="calendar">
            <div class="calendar__header">
              <button @click.prevent="controlprev" class="control control--prev">&lt;</button>

              <span class="month-name">{{ MonthName }}</span>
              <button @click.prevent="controlnext" class="control control--next">&gt;</button>
            </div>

            <div class="calendar_body">
              <div class="grid">
                <div class="grid__header">
                  <span class="grid__cell grid__cell--gh">Lun</span>
                  <span class="grid__cell grid__cell--gh">Mar</span>
                  <span class="grid__cell grid__cell--gh">Mié</span>
                  <span class="grid__cell grid__cell--gh">Jue</span>
                  <span class="grid__cell grid__cell--gh">Vie</span>
                  <span class="grid__cell grid__cell--gh">Sab</span>
                  <span class="grid__cell grid__cell--gh">Dom</span>
                </div>
                <div v-html="elGridBody" class="grid__body">
                  
                </div>
            </div>
          </div>
          </div>





          </div>
          <div class="col-6 card border-secondary container">
              <h3 class="card-title mt-2">Horario disponible</h3>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Dia Selesccionado: {{ diaseleccionado }}</li>
                  <li class="list-group-item">Horas Disponibles: 2</li>
                  <li class="list-group-item">Citas Disponibles: 3</li>
              </ul>

              <table class="table mt-4">
                <thead class="table-success" style="text-align: center">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Medico</th>
                      <th scope="col">Selecciones</th>
                    </tr>
                </thead>
                <tbody style="text-align: center">
                    <tr v-for="medico of medicos">
                      <th scope="row">{{ medicos.indexOf(medico)+1}}</th>
                      <th>12:00</th>
                      <td>{{ medico.Nombres }} {{ ' ' }} {{ medico.Apellidos }}</td>
                      <th>
                        <button @click.prevent="SelectNombreYHora(medicos.indexOf(medico)+1)" 
                        class="btn btn-outline-success"><i class="fas fa-check-circle"></i>
                        </button>
                      </th>
                    </tr>
                </tbody>
              </table>
            <div>
              <button class="btn btn-primary btn-block mb-4">
                Agregar Cita
              </button>
              <div v-if="MostraBtnConfirmar" class="mb-4" >
                <router-link class="btn btn-primary btn-block" to="/ConfirmarCita">
                  Continuar
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
name: 'SleccionCita',
  data() {
    return {
      cells: [],
      CurrentMonth: moment(),
      elGridBody: ``,
      MonthName: '',
      elCell: [],
      elTarget: '',
      selectedCell: '',
      fechaseleccionada: '',
      cellId: '',
      NombrePaciente: this.NombreP,
      ApellidoPaciente: this.ApellidoP,
      IdPaciente: this.IdP,
      CorreoPaciente: this.CorreoP,
      diaseleccionado: '',
      NombreMedico: '',
      cita: {
        DNIPaciente: '',
        Medico: '',
        Duracion: '30 min',
        TipoCita: '',
        EstadoCita: true,
        PrecioCita: '20000',
        FechaCita: '2',
        HoraCita: '2',
      },
      medicos: [],
      MostraBtnConfirmar: false,
    }
},
created(){
  this.ShowCells();
  this.obtenerMedicos();
},
mounted() {
  this.escucharCeldas();
  this.mostrarnombres();
},
computed: {

},
methods: {
  obtenerMedicos(){
    fetch('http://localhost:3000/obtenerempleado',)
      .then(res => res.json())
      .then(data => {
        this.medicos = data
      })
  },
  SelectNombreYHora(p){
    for(let i = 0; i < this.medicos.length; i++){
      if(this.medicos[p-1].Nombres == this.medicos[i].Nombres){
        this.cita.IdMedico = this.medicos[i].DNI;
        console.log(this.cita.IdMedico)
      }
    }

    console.log(this.cita.Medico)
    this.cita.HoraCita = '20:00'

  },
  AgregarCita(){
    this.cita.FechaCita = this.diaseleccionado;
    this.cita.DNIPaciente = this.IdP;
    this.$emit('Cita', this.cita);
    alert('Se han guardado los datos de tu cita, presiona continuar par ver los detalles y confirmar la cita');
    this.MostraBtnConfirmar = true;
  },
 GenerateDates(mesamostrar =  moment()) {
  if (!moment.isMoment(mesamostrar)) {
    return null     
  }

  let fechainicio = moment(mesamostrar).startOf('month')
  let fechafin = moment(mesamostrar).endOf('month')
  let cells = [];
  
  //encontrar la primera fecha del calendario
  while(fechainicio.day() !== 1) {
    fechainicio.subtract(1, 'days');
  }
  //encontrar la ultima fecha del calendario
  while(fechafin.day() !== 0) {
    fechafin.add(1, 'days');
  } 

  //generar las fechas
  do{
    cells.push({
      date: moment(fechainicio),
      isInCurrentMonth: fechainicio.month() === mesamostrar.month()
    })
    fechainicio.add(1, 'days');
  }while(fechainicio.isSameOrBefore(fechafin));
  
  return cells;
 },

 ShowCells() {
  this.cells = this.GenerateDates(this.CurrentMonth);
  if(this.cells === null) {
    console.error('las fechas no se generaron');
    return;
  }
  this.elGridBody = ``;
  let templateCells = ``;
  let disabledCells = ``;

  for(let i= 0; i < this.cells.length; i++){
    if(this.cells[i].isInCurrentMonth) {
      templateCells += `
        <span data-cell-id="${i}" id="calendar-cell" name="calendar-cell" class="grid__cell grid__cell--gd">
          ${this.cells[i].date.date()} 
        </span>
      `;
    }else{
      templateCells += `
        <span data-cell-id="${i}" id="calendar-cell" name="calendar-cell" class="grid__cell grid__cell--gd grid__cell--disabled">
          ${this.cells[i].date.date()} 
        </span>
      `;
    }
    this.elGridBody = templateCells;
  }
  this.MonthName = this.CurrentMonth.format('MMM YYYY');
 },
 controlnext() {
   this.cambiarmes(true);
   this.ShowCells();
 },
 controlprev() {
   this.cambiarmes(false);
   this.ShowCells();
 },
 cambiarmes(next = true) {
   if(next){
     this.CurrentMonth.add(1, 'months');
   }else {
     this.CurrentMonth.subtract(1, 'months');
   }
 },
  escucharCeldas() {
    this.elCell = document.getElementsByName('calendar-cell')
    this.elCell.forEach(elcell => {
      elcell.addEventListener('click', e => {
        this.elTarget = e.target;
        if(this.elTarget.classList.contains('grid__cell--disabled')){
          return;
        }
        if(this.elTarget.classList.contains('grid__cell--selected')){
          return;
        }
        if(this.selectedCell){
          this.selectedCell.classList.remove('grid__cell--selected');
        }
        this.elTarget.classList.add('grid__cell--selected');
        console.log(this.elTarget)
        this.selectedCell = this.elTarget;
        this.fechaseleccionada = this.cells[parseInt(this.elTarget.dataset.cellId)].date._d;
        this.diaseleccionado = this.fechaseleccionada.toString().substr(0, 15);

        if(document.dispatchEvent(new Event('change'))){
          console.log(this.fechaseleccionada);
        }
      })
    })
  },
  mostrarnombres(){
    console.log(this.IdP, this.NombreP, this.ApellidoP, this.CorreoP);
    this.$emit('Modificar', this.Modificar)
  }
},
props: ['IdP', 'NombreP', 'ApellidoP', 'CorreoP', 'Modificar']
}
</script>

<style>

:root {
  --color-bg-calendar: rgb(168, 216, 168);
  --color-cell: #292929;
  --color-cell-disabled: #666d66;
}

.root {
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar {
  padding: 20px 10px;
  background-color: var(--color-bg-calendar);
  border-radius: 3px;
  width: 100%;
  max-width: 300px;
  font-family: sans-serif;
}

.calendar__header {
  color: white;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.calendar .control {
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: none;
  padding: 0 5px;
}

.grid__header, .grid__body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.grid__header {
  color: white;
  margin-bottom: 20px;
}

.grid__body {
  grid-auto-rows: 40px;
  color: var(--color-cell);
}

.grid__cell {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid__cell--gd {
  cursor: pointer;
}

.grid__cell--selected {
  color: var(--color-bg-calendar);
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 2px var(--color-bg-calendar) inset;
}

.grid__cell--disabled {
  color: var(--color-cell-disabled);
  cursor: not-allowed;
}

</style>