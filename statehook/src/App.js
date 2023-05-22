import { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      todo:'공부',
      done: false,
      edit: false,
    },
    {
      id:2,
      todo:'수면',
      done: false,
      edit: false,
    },
  ]);

  return (
    <div>
      <Template 
      />
      <TodoInsert 
      todo={todo}
      setTodo={setTodo}
      />
      <TodoList 
      todo={todo}
      setTodo={setTodo}
      />
      </div>
  );
}

export default App;

