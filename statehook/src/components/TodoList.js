import { useState } from 'react';

const TodoList = ({todo, setTodo}) => {
    const [todoText, setTodoText] = useState('');

      const deleteList = (index) => {
        const indexId = todo[index].id;
        // fileter((todo) => (todo.id ! == todo[index].id)) 가 왜 안되는지
        setTodo(todo.filter((todo) => (todo.id !== indexId)));
      }
    
      const doneToggle = (index) => {
        if(todo[index].done){
          setTodo(
            todo.map((preState) => {
              console.log(preState);
              console.log(preState.id);
              return (preState.id === index + 1) ? {...preState, done: false} : preState
            })
          )
        } else{
          setTodo(
            todo.map((preState) => {
              console.log(preState);
              console.log(preState.id);
              return (preState.id === index + 1) ? {...preState, done: true} : preState
            })
          )
        }
      }
    
      const editToggle = (index) => {
        if(todo[index].edit){
          setTodo(
            todo.map((preState) => {
              console.log(preState);
              console.log(preState.id);
              return (preState.id === index + 1) ? {...preState, edit: false} : preState
            })
          )
        } else{
          setTodo(
            todo.map((preState) => {
              console.log(preState);
              console.log(preState.id);
              return (preState.id === index + 1) ? {...preState, edit: true} : preState
            })
          )
        }
      }
    
      const handleInputTodoChange = (e) => {
        setTodoText(e.target.value);
      }
    
      const handleTodoEnter = (e, index) => {
        console.log(index);
        if(e.keyCode === 13){
          todo[index].todo = todoText;
          todo[index].edit = false;
        }
        setTodoText('');
      }


    return (
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Todo</td>
              <td>Done</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo, index) => {
              return <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.edit ? <input value={todoText} onChange={handleInputTodoChange} onKeyDown={(event) =>handleTodoEnter(event, index)}></input> : todo.todo}</td>
              <td
              onClick={() => doneToggle(index)}
              >{todo.done ? 'true' : 'false'}</td>
              <td
              onClick={() => {editToggle(index)}}
              >{todo.edit ? 'true' : 'false'}</td>
              <td><button 
              onClick={() => deleteList(index)}
              >Delete</button></td>
            </tr>
            })}
          </tbody>
        </table>
    );
};

export default TodoList;