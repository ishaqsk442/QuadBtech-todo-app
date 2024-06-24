import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  // Function to handle entering edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle saving the edited task
  const handleSave = () => {
    dispatch(editTask(task.id, newText));
    setIsEditing(false);
  };

  // Function to handle toggling task completion
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <button className="complete-btn" onClick={handleToggle}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button className="edit-btn" onClick={handleEdit}>Edit</button>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Task</h2>
            <input 
              type="text" 
              value={newText} 
              onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
