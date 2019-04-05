import { GET_TASKS, ADD_TASKS, DELETE_TASK } from './constants';

export const getTasks = () => {
    return {
        type: GET_TASKS
    };
}

export const addTask = (task) => {
    return {
        type: ADD_TASKS,
        payload: task
    };
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
}