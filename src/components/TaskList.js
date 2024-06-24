import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  // Get the tasks from the Redux state
  const tasks = useSelector((state) => state.tasks);

  return (
    <ol>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ol>
  );
};

export default TaskList;
