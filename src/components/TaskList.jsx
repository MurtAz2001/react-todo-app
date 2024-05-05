import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';
import { toast } from 'react-toastify';

function TaskList() {
  const tasks = useSelector(state => state.tasks);// Get tasks from Redux store
  const dispatch = useDispatch();// Get dispatch function to dispatch actions

  // Function to handle toggling task completion
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
    const task = tasks.find(task => task.id === id);
    const message = task.completed ? 'Task marked as incomplete.' : 'Task marked as complete.';
    toast.info(message);
  };

  // Function to handle deleting a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
    toast.error('Task deleted successfully!');
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => handleToggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
