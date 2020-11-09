<template>
<div class="general mt-2">
  <div class="row">
    <div class="col-lg-2">
      <PanelAdmin/>
    </div>
    <div class="col-lg-10">
      <AgregarEmpleado/>
    </div>
  </div>
</div>
</template>

<script>
import PanelAdmin from "./Admin/PanelAdmin.vue";
import EmpleadosRegistrados from "./Admin/EmpleadosRegistrados.vue"; 
import AgregarEmpleado from "./Admin/AgregarEmpleado.vue";
export default {
  name: "VistaAdmin",
  data() {
    return {

    };
  },
  components: {
    PanelAdmin,
    EmpleadosRegistrados,
    AgregarEmpleado,
  },
};
</script>

<style>
  .general{
    padding-left: 15px;
    padding-right: 20px;
  }
</style>