import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do Application</h1>
        <div className="input-container">
          <TaskInput />
        </div>
        <TaskList />
        <ToastContainer />
      </div>
    </Provider>
  );
}
export default App;