import React, { useContext } from 'react'
import { DataProvider } from './components/DataProvider';
import { Todo } from './components/Todo';

function App() {

  return (
    <DataProvider>
      <Todo />
    </DataProvider>
  );
}

export default App;
