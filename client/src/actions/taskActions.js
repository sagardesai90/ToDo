import { GET_TASKS, ADD_TASKS, DELETE_TASK } from './constants';

export const getTasks = () => {
    return {
        type: GET_TASKS
    };
}