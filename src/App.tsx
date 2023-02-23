import React from 'react';
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text={'Learn React'}/>
      <Todo text={'Learn Nest.js'}/>
      <Todo text={'Learn Next.js'}/>
    </div>
  );
}

export default App;
