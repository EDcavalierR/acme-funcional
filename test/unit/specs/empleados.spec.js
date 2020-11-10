import AgregarEmpleado from 'components/admin/AgregarEmpleado.vue';
import {shallowMount} from '@vue/test-utils';
import flushPromises from "flush-promises";

const $router = {
    replace: jest.fn
};

fdescribe('AgregarEmpleado.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(AgregarEmpleado, {
            mocks: {
                $router
            },
            data(){
                return{
                    DNI: '123',
                    Nombres: 'Camilo',
                    Apellidos: 'Lizarazo',
                    Telefono: 2123,
                    Celular: 123123,
                    Correo: 'Clizaraz123@ghmaisad.com',
                    TipoUsuario: 'Medico',
                    Usuario: 'Azunis',
                    Contraseña: 'lola1',
                };
            }
        });
    });
    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("Envia a la ruta secreta", async () => {
        wrapper.find("form").trigger("submit");
        await flushPromises();
        expect($router.replace).lastCalledWith({ DNI: "secret"});
    });
});