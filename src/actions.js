// Action creator to add a new task
export const addTask = (text) => {
    return {
      type: 'ADD_TASK',// Action type to add a task
      payload: {
        text,
      },
    };
  };

  // Action creator to delete a task
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',// Action type to delete a task
      payload: {
        id,
      },
    };
  };

  // Action creator to toggle task completion
  export const toggleTask = (id) => {
    return {
      type: 'TOGGLE_TASK',// Action type to toggle task completion
      payload: {
        id,
      },
    };
  };
  