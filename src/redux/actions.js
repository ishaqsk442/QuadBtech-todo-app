// Action type constants
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creator for adding a task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

// Action creator for deleting a task
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});

// Action creator for editing a task
export const editTask = (id, updatedTask) => ({
  type: EDIT_TASK,
  payload: { id, updatedTask }
});

// Action creator for toggling task completion
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});
