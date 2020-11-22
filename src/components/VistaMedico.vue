<template>
<div class="pr-3">
      <div class="row h" style="background-color: rgba(63, 195, 128, 0.1);">
          <div class="col-6 ml-auto" style="display: flex">
            <i class="fas fa-user fa-2x pt-1 mr-4 ml-4"></i>
            <p class="hh pt-2 t">
                CC - {{ this.Medico.Nombres }} {{' '}} {{ this.Medico.Apellidos }}
            </p>
            <button @click="rausente" v-if="noausente" class="btn btn-success hh p-2 mr-4 ml-4">
                <i class="fas fa-check"></i>
                Reportarse ausente
            </button>
            <button @click="causente" v-else class="btn btn-danger hh p-2 mr-4 ml-4">
                <i class="fas fa-window-close"></i>
                Cancelar
            </button>
            <router-link to="/" class="p-2 alert bg-dark text-white ml-auto hh">
                <i class="fas fa-sign-out-alt"></i>
                Salir
            </router-link>
          </div>
      </div>
      <div class="row mt-4">
        
        
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
            
        </div>
      </div>
  </div>
</template>

<script>

export default {
name: 'VistaMedico',
data(){
    return{
        Medico: '',
        noausente: true,
    }
},
created(){
    this.ObtenerMedicos()
},
methods: {
    ObtenerMedicos(){
    fetch('http://localhost:3000/obtenerempleado',)
      .then(res => res.json())
      .then(data => {
        this.medicos = data
        this.medicos.forEach(medico => {
            if(medico.DNI == this.IdE){
                this.Medico = medico
            }
        })
      })
    },
    rausente(){
        this.noausente = false
    },
    causente(){
        this.noausente = true
    }
},
props: ['IdE']
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