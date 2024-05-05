import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import { toast } from 'react-toastify';

function TaskInput() {
  const [task, setTask] = useState('');// State to store the task input value
  const dispatch = useDispatch();// Get dispatch function to dispatch actions

  // Function to handle adding a task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
      toast.success('Task added successfully!');
    } else {
      toast.error('Please enter a task.');
    }
  };

  // Function to handle adding a task on pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
