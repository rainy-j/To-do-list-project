import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState(["hoover the dog,", " feed the fish"]);
    const [newInput, setNewInput] = useState("");
  
  
    const handleChange = (e) => {
      setNewInput(e.target.value);
    }
  
    const handleAdd = () => {
      setInput([newInput, ...input]);
      setNewInput("");
    }
    
    const handleRemove = (index) => {
      const storedInputs = [...input];
      storedInputs.splice(index, 1);
      setInput(storedInputs);
    };
  
    return ( 
      <div>
        <h1>do do list</h1>
        <button onClick={handleAdd}>add</button>
        <input type="text" value={newInput} onChange={handleChange}/>
      <h1>{input}</h1>
      {input.map((storedInputs, index) => {
          return (
            <button key={index} storedInputs={storedInputs} onClick={() =>handleRemove(index)}>Remove</button>
          )
        })}
    
      </div>
    );
  }
  
  export default App;