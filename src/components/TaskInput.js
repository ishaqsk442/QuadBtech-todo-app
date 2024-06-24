import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  // Local state for the task input field
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // Function to handle adding a task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the addTask action
      setTask(''); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? handleAddTask() : null}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
