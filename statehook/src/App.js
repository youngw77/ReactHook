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


import { useState } from 'react';

function App() {
  const [name, setName] = useState([
    {
      id:1,
      name:'홍길동',
      checked: false,
    },
    {
      id:2,
      name:'김민수',
      checked: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setName((preState) => {
        // ...preState,
        // input
      return([...preState,
        {
          id: name.length+1,
          name:input,
          checked: false,
        }
      ]);
    })
    setCount(count+1);
    setInput('');
  }

  const handleEnter = (e) => {
    console.log(e, 'keydown');
  }

  console.log(name);
  console.log(name.length);
  console.log(input);
  console.log(count);


  const deleteList = (index) => {
    console.log(index)
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
              <td>Name</td>
              <td>Done</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {name.map((todo, index) => {
              return <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td><button>Done</button></td>
              <td><button onClick={deleteList(index)}>Delete</button></td>
            </tr>
            })}
          </tbody>
        </table>
    </div>
  );
}

export default App;

