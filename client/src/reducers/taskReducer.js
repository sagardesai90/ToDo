import uuid from 'uuid';
import {
  GET_TASKS,
  ADD_TASKS,
  DELETE_TASK
} from '../actions/constants';

const initialState = {
  
  tasks: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Milk'},
    { id: uuid(), name: 'Juice'},
    { id: uuid(), name: 'Orange'}
  ]
}

export default function(state = initialState, action){
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state
      }
    case ADD_TASKS:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      return state;
  }
}