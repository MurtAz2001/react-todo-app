// Define initial state for tasks
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Load tasks from local storage
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: filteredTasks,
      };
    case 'TOGGLE_TASK':
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default rootReducer;

  