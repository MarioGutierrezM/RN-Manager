import {
    EMLPOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMLPOYEE_UPDATE,
        payload: { prop, value }
    };
};
