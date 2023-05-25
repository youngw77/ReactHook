import React, { useState, useRef, useLayoutEffect } from 'react'

interface item {
    id:number;
    todo:string;
    edit:boolean;
    complete:boolean;
}

export const TodoList = () => {
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
    const [input , setInput] = useState<string>("");
    const [todoText, setTodoText] = useState<string>("");
    const [text, setText] = useState<string>("");
    const focusRef = useRef<HTMLInputElement>(null);
    useLayoutEffect(() => {
        if (focusRef.current !== null) focusRef.current.focus();
      });
    const handleClick = () => {
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
    const handleInputEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 13){
            const newTodoItem:item = {
                id:todo[todo.length-1].id+1,
                todo: input,
                edit: false,
                complete: false
            }
            setTodo([...todo, newTodoItem]);
            setInput("");
        }
    }
    const handleEdit = (index:number) => {
        if(todo[index].edit){
            setTodo(
                todo.map((prev) => {
                    return (prev.id === index + 1) ? {...prev, edit: false} : prev
                })
            )
        } else {
            setTodo(
                todo.map((prev) => {
                    return (prev.id === index + 1) ? {...prev, edit: true} : prev
                })
            )
        }
    }
    const handleDelete = (index:number) => {
        const indexId:number = todo[index].id;
        setTodo(todo.filter((todo) => (todo.id !== indexId)));
    }
    const handleInputTodoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    }
    const handleComplete = (index:number) => {
        if(todo[index].edit === false){
            setTodo(
                todo.map((todo) => {
                    if(todo.id === index+1){
                        return {...todo, complete: !todo.complete};
                    }
                    return todo;
                })
            )
        }
        
    }
    const handleEditEnter = (e:React.KeyboardEvent<HTMLInputElement>, index:number) => {
        if(e.keyCode === 13){
            todo[index].todo = todoText;
            todo[index].edit = false;
            setTodoText("");
        }
    }
    const handleText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div>
        <input 
        type="text" 
        placeholder='add todo item'
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
        />
        <button
        onClick={handleClick}
        >Add</button>
        <br />


        <input 
        type="text" 
        placeholder='search todoItem' 
        value={text}
        onChange={(e) => handleText(e)}
        />


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
                {todo.filter((todo) => {
                    return text.toLowerCase() === '' ? todo : todo.todo.toLowerCase().includes(text)
                }).map((todo, index) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td
                        onClick={() => handleComplete(index)}
                        style={{textDecoration: todo.complete ? "line-through" : "none"}}
                        >{todo.edit ? 
                        <input 
                        value={todoText} 
                        onChange={handleInputTodoChange}
                        onKeyDown={(e) => handleEditEnter(e, index)}
                        placeholder={todo.todo}
                        ref={focusRef}
                        ></input> : todo.todo}
                        </td>
                        <td><button onClick={() => handleEdit(index)}>edit</button></td>
                        <td><button onClick={() => handleDelete(index)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
