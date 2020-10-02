import {
    CASO_EJEMPLO
} from '../types';

export default (state,action)=>{

    switch(action.type){
        case CASO_EJEMPLO:
            return {
                ...state,
                cargarPagina: false,
                ejemploPrueba: true

            }

        default:
            return state;


    }
}