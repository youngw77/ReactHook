import React, {useState, useEffect} from 'react';
import {TodoList} from './components/TodoList';
import { Template } from './components/Template';
import axios from 'axios';

interface todoItem {
  id:number;
  todo:string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState<todoItem[]>([]);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      setError(null);
      setTodo([]);
      setLoading(true);
      const response = await axios.get(
        'http://localhost:5000/findAll'
      );
      setTodo(response.data);
    } catch (error:any) {
      setError(error);
    }
    setLoading(false);
  };

  fetchUsers();
}, []);

if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!todo || todo.length === 0) return null;

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
