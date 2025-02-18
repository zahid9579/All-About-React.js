import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todo from './components/Todo/Todo';

const App = () => {
  return (
    <Provider store={store}> 
      <div>
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
