import React, {useState} from 'react';
import {TodoList} from './components/TodoList';
import { Template } from './components/Template';

interface item {
  id:number;
  todo:string;
  edit:boolean;
  complete:boolean;
}

function App() {
  const [todo, setTodo] = useState<item[]>([
    {
        id:1,
        todo:"TypeScript",
        edit:false,
        complete:false
    },
    {
        id:2,
        todo:"React",
        edit:false,
        complete:false
    },
    {
        id:3,
        todo:"Angular",
        edit:false,
        complete:false
    },
]);

  return (
    <div>
      <Template />
      <TodoList 
      todo={todo}
      setTodo={setTodo}
      />
    </div>
  );
}

export default App;
