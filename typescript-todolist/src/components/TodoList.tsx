import React, { useState, useRef, useLayoutEffect } from 'react'
import axios from 'axios';

interface item {
    id:number;
    todo:string;
    edit:boolean;
    complete:boolean;
  }

interface Props {
    todo: item[];
    setTodo: React.Dispatch<React.SetStateAction<item[]>>;
}


export const TodoList = ({todo, setTodo}:Props) => {
    const [input , setInput] = useState<string>("");
    const [todoText, setTodoText] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [todoIndex, setTodoIndex] = useState<any>();
    const focusRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (focusRef.current !== null) focusRef.current.focus();
      });

    const handleClick = async () => {
    const addRecordEndpoint = "http://localhost:5000/insertOne";
    axios.post(addRecordEndpoint, {
        todo: input
    })
    .then(res => res.data.body)
    .then(res=>console.log(res));

    setInput("");
    }
    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleInputEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 13){
            const addRecordEndpoint = "http://localhost:5000/insertOne";
            axios.post(addRecordEndpoint, {
                todo: input
            })
            .then(res => res.data.body)
            .then(res=>console.log(res));

            setInput("");
        }
    }
    const handleEdit = (index:number) => {
        // const addRecordEndpoint = "http://localhost:5000/insertOne";
        //     axios.post(addRecordEndpoint, {
        //         todo: todo[index].todo
        //     })
        setTodoText(todo[index].todo);
        setTodoIndex(index);
        // if(true){
        // } else {
        //     axios.post(addRecordEndpoint, {
        //         todo: todo.map((prev:any) => {
        //             return (prev.id === index + 1) ? {...prev, edit: true} : prev
        //         })
        //     })
        // }

        // if(todo[index].edit){
        //     setTodo(
        //         todo.map((prev:any) => {
        //             return (prev.id === index + 1) ? {...prev, edit: false} : prev
        //         })
        //     )
        // } else {
        //     setTodo(
        //         todo.map((prev:any) => {
        //             return (prev.id === index + 1) ? {...prev, edit: true} : prev
        //         })
        //     )
        // }
    }
    const handleDelete = (index:number) => {
        const indexId:number = todo[index].id;
        axios.get("http://localhost:5000/delete/" + indexId)
        .then(res => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const handleInputTodoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    }
    const handleComplete = (index:number) => {
        if(todo[index].edit === false){
            setTodo(
                todo.map((todo:any) => {
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
    const handleEditButton = () => {
        const addRecordEndpoint = "http://localhost:5000/modifyOne";
        axios.post(addRecordEndpoint, {
            id: todo[todoIndex].id,
            todo: todoText
        })
        .then(res => res.data.body)
        .then(res=>console.log(res));

    setTodoText("");
    }
    const handleEditText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
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
        <br />

        <input 
        type="text"
        placeholder={todoText !== null ? "todoEdit" : todoText}
        value={todoText}
        onChange={(e) => handleEditText(e)}
        />
        <button
        onClick={handleEditButton}
        >Edit</button>


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
                {todo.filter((todo:any) => {
                    return text.toLowerCase() === '' ? todo : todo.todo.toLowerCase().includes(text)
                }).map((todo:any, index:number) => {
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
