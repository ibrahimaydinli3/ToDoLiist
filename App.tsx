import React from 'react';
import TodoList from "./TodoList";
import "./App.css";



      
const App: React.FC = (Todo) => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default App;

