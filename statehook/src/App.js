// import { useEffect, useState } from 'react';

// const heavyWork = () => {
//   console.log("무거운 작업");
//   return ['홍길동', '김민수'];
// }

// function App() {
//   const[names, setNames] = useState( () => {
//     return heavyWork();
//   });
//   const[input, setInput] = useState('');

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//     console.log(e.target.value);
//   };
//   const handleUpload =()=>{
//     setNames((prevState) => {
//       console.log('이전 state: ', prevState);
//       return([input, ...prevState]);
//     });
//   };
//   function name() {
//     console.log("start")
//   }
//   useEffect(()=>{
//     name()
//   },[])

//   return (
//     <div>

//       <input type="text" value={input} onChange={handleInputChange}></input>
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) => {
//         return <p key={idx}>{name}</p>;
//       })}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';

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
  const [input, setInput] = useState('');
  const [todoText, setTodoText] = useState('');
  // const [toggle, setToggle] = useState(todo.done);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setTodo((preState) => {
        // ...preState,
        // input
      return([...preState,
        {
          id: todo.length+1,
          todo:input,
          done: false,
          edit: false,
    }
      ]);
    })
    setInput('');
  }

  const handleEnter = (e) => {
    console.log(e, 'keydown');
  }



  const deleteList = (index) => {
    const indexId = todo[index].id;
    // fileter((todo) => (todo.id ! == todo[index].id)) 가 왜 안되는지
    setTodo(todo.filter((todo) => (todo.id !== indexId)));
  }

  const doneToggle = (index) => {
    // setTodo((preState) => {preState})

    if(todo[index].done){
      todo[index].done = false;
    } else{
      todo[index].done = true;
    }
    // table 값 변화 x 재 랜더링 필요
  }

  const editToggle = (index) => {
    if(todo[index].edit){
      todo[index].edit = false;
    } else{
      todo[index].edit = true;
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
    <div>
      <h2>TodoList</h2>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={handleUpload} onKeyDown={handleEnter}>Add</button>
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
    </div>
  );
}

export default App;

