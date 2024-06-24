import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

// Initial state of the tasks
const initialState = {
  tasks: []
};

// Reducer function to handle task actions
const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      // Add a new task to the tasks array
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
      };
    case DELETE_TASK:
      // Remove the task with the specified id
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case EDIT_TASK:
      // Update the text of the task with the specified id
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
        )
      };
    case TOGGLE_TASK:
      // Toggle the completion status of the task with the specified id
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

export default taskReducer;
