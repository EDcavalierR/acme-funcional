<template>
  <div class="h pr-3 pl-3 pt-3">
    <div class="btn-group-toggle" style="display: block;" data-toggle="buttons">
      <label class="btn btn-outline-primary btn-block active">
        <i class="fas fa-edit"></i>
        <input type="radio" name="options" id="option1" checked /> Empleado </label>
      <label class="btn btn-outline-primary btn-block">
          <i class="fas fa-calendar-alt"></i>
          <span>&nbsp;</span>
        <input type="radio" name="options" id="option2" /> Horarios
      </label>
      <label class="btn btn-outline-primary btn-block">
          <i class="fas fa-calendar-check"></i>
        <input type="radio" name="options" id="option3" /> Asistencia
      </label>
      <label class="btn btn-outline-primary btn-block">
          <i class="fas fa-clipboard-list"></i>
          <span>&nbsp;</span>
        <input type="radio" name="options" id="option3" /> Informes
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelAdmin",
  data (){
    return {
      
    };
  }
}
</script>

<style>
.h {
  border: solid 1px grey;
  height: 43.6rem;
}
</style>
