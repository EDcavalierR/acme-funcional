import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('../components/Index.vue')
        },
        {
            path: '/SolicitarCita',
            name: 'SolicitarCita',
            component: () => import('../components/SolicitarCita.vue')
        },
        {
            path: '/SeleccionCita',
            name: 'SeleccionCita',
            component: () => import('../components/SeleccionCita.vue')
        },
        {
            path: '/VistaAdminAgregarEmpleado',
            name: 'VistaAdminAgregarEmpleado',
            component: () => import('../components/VistaAdminAgregarEmpleado.vue')
        },
        {
            path: '/VistaAdminEmpleadosRegistrados',
            name: 'VistaAdminEmpleadosRegistrados',
            component: () => import('../components/VistaAdminEmpleadosRegistrados.vue')
        },
        {
            path: '/ConfirmarCita',
            name: 'ConfirmarCita',
            component: () => import('../components/ConfirmarCita.vue')
        },
        {
            path: '/VistaPaciente',
            name: 'VistaPaciente',
            component: () => import('../components/VistaPaciente')
        },
        {
            path: '/AdminInformes',
            name: 'AdminInformes',
            component: () => import('../components/AdminInformes')
        },
        {
            path: '/VistaMedico',
            name: 'VistaMedico',
            component: () => import('../components/VistaMedico')
        },
        {
            path: '/Intermedio',
            name: 'Intermedio',
            component: () => import('../components/Intermedio')
        }
              
    ]
})