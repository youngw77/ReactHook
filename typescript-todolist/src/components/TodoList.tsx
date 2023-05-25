import React, { useState } from 'react'

interface item {
    id:number;
    todo:string;
    edit:boolean;
    complete:boolean;
}

export const TodoList = () => {
    const [todo, setTodo] = useState<item[]>([
        {
            id:1,todo:"TypeScript",
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
    const [input , setInput] = useState<string>("");

    const handleClick = () => {
        console.log('click');
        const newTodoItem:item = {
            id:todo[todo.length-1].id+1,
            todo: input,
            edit: false,
            complete: false
        }
        setTodo([...todo, newTodoItem]);
        setInput("");
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleEdit = (index:number) => {
        
    }
    const handleDelete = (index:number) => {
        const indexId:number = todo[index].id;
        setTodo(todo.filter((todo) => (todo.id !== indexId)));
    }

  return (
    <div>
        <input 
        type="text" 
        placeholder='add todo item'
        value={input}
        onChange={handleInputChange}
        />
        <button
        onClick={handleClick}
        >Add</button>
        <table>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>TODO</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((todo, index) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.edit ? <input></input> : todo.todo}</td>
                        <td><button onClick={() => handleEdit(index)}>edit</button></td>
                        <td><button onClick={() => handleDelete(index)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
