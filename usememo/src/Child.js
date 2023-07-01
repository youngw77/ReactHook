import React from 'react';


const Child = ({name, age}) => {
    return(
        <div>
        <h2>자녀</h2>
        <p>name: {name} </p>
        <p>age: {age} </p>
        </div>
    )
}

export default Child;