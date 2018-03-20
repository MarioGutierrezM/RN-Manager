import {
    EMLPOYEE_UPDATE,
    EMLPOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMLPOYEE_UPDATE: //action.payload == { prop: 'name', value: 'mario' }
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMLPOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
