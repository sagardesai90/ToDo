import axios from 'axios';
import { GET_TASKS, ADD_TASKS, DELETE_TASK, TASKS_LOADING } from './constants';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios
        .get('/api/tasks')
        .then(res => dispatch({
            type: GET_TASKS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addTask = (task) => (dispatch, getState) => {
    axios
        .post('/api/tasks', task, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_TASKS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteTask = (id) => (dispatch, getState)  => {
    axios
        .delete(`/api/tasks/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    };
}