import uuid from 'uuid';
import {
  GET_TASKS,
  ADD_TASKS,
  DELETE_TASK,
  TASKS_LOADING
} from '../actions/constants';

const initialState = {
  
  tasks: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case ADD_TASKS:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      }; 
    default:
      return state;
  }
}