import { createStore } from 'redux';
import taskReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const persistedState = loadState();

const store = createStore(
  taskReducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  });
});

export default store;
