import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  // let count = 0;
  let [count, setCount] = useState(0);

  function addCount() {
    // count = count + 1; //count +=1
    // alert(count);
    setCount(count+1);
  }




  return (
    <>
      <h1>{count}</h1>
      <Button text="Clique aquii!!" fx={() => addCount()}/>
     </> 
  );
    


}

export default App;
