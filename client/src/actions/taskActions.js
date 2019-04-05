import axios from 'axios';
import { GET_TASKS, ADD_TASKS, DELETE_TASK, TASKS_LOADING } from './constants';

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios
        .get('/api/tasks')
        .then(res => dispatch({
            type: GET_TASKS,
            payload: res.data
        }))
}

export const addTask = (task) => dispatch => {
    axios
        .post('/api/tasks', task)
        .then(res => dispatch({
            type: ADD_TASKS,
            payload: res.data
        }))
}

export const deleteTask = (id) => dispatch => {
    axios
        .delete(`/api/tasks/${id}`).then(res =>
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
            );
}

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    };
}