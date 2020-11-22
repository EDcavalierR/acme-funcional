<template>
  <div>
    <div>
      <Header/>
    </div>
    <div>
      <router-view :NombreP="NombreP" :ApellidoP="ApellidoP" :CorreoP="CorreoP" :IdP="IdP" :Activo="Activo" @NombreP="NombreP = $event" @ApellidoP="ApellidoP = $event" @CorreoP="CorreoP = $event" @IdP="IdP = $event" @Activo="Activo = $event" :Cita="Cita" @Cita="Cita = $event" :Modificar="Modificar" @Modificar="Modificar = $event" :IdE="IdE" @IdE="IdE = $event"/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Index from './components/Index.vue';
import Footer from './components/Footer.vue';
import SolicitarCita from './components/SolicitarCita.vue';
import SeleccionCita from './components/SeleccionCita.vue';
import VistaAdminAgregarEmpleado from './components/VistaAdminAgregarEmpleado.vue';
import ConfirmarCita from './components/ConfirmarCita.vue';
import VistaAdminEmpleadosRegistrados from './components/VistaAdminEmpleadosRegistrados.vue';
import VistaPaciente from './components/VistaPaciente.vue';
import AdminInformes from './components/AdminInformes.vue';
import VistaMedico from './components/VistaMedico.vue';
import Intermedio from './components/Intermedio.vue';

export default {
  data() {
    return {
      NombreP: '',
      ApellidoP: '',
      CorreoP: '',
      IdP: '',
      Activo: false,
      Cita: {
        DNIPaciente: '',
        Medico: '',
        Duracion: '',
        TipoCita: '',
        EstadoCita: true,
        PrecioCita: '',
        FechaCita: '',
        HoraCita: '',
      },
      Modificar: Boolean,
      IdE: ''
    }
  },
  methods: {
    
  },
  components: {
    Header,
    Index,
    Footer,
    SolicitarCita,
    SeleccionCita,
    VistaAdminAgregarEmpleado,
    VistaAdminEmpleadosRegistrados,
    ConfirmarCita,
    VistaPaciente,
    AdminInformes,
    VistaMedico,
    Intermedio
  },
}
</script>

<style>
 *{
   font-family: 'Mukta', sans-serif;
 }
 body{
    background-image: url(./assets/FondoIndex.jpg);
    background-size: cover;
    font-family: 'Capriola', sans-serif;
}
</style>
