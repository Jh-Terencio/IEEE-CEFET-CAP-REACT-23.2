import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  useEffect(() => {
    //efeito colateral
    console.log(inputText);
  }, [inputText])

  return ( 
    <>
      <p>{inputText}</p>
      <input type="text" value={inputText} onChange={handleChange}/>
    </>  
  );
}

export default App;
