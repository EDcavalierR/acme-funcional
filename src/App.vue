<template>
  <div>
    <div>
      <Header/>
    </div>
    <div>
      <VistaAdmin/>
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
import VistaAdmin from './components/VistaAdmin.vue';

export default {
  data() {
    return {

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
    VistaAdmin,
  },
}
</script>

<style>
 .todo{
   margin: auto;
 }
 *{
   font-family: 'Mukta', sans-serif;
 }
</style>
