import { useState } from 'react';
import Child from './Child';

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incresementParentAge = () => {
    setParentAge(parentAge + 1);
  }
  return (
    <div style={{board: '2px solid navy', padding: '10px'}}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incresementParentAge}>부모 나이 증가</button>
      <Child name={'홍길동'} age={5} />
    </div>
  );
}

export default App;
