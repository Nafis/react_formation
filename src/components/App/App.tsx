import "./App.css";
import Button from "../ui/Button/Button.js";
import { useEffect, useState } from "react";


const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    setCounter(0);
    console.log('mount', counter);
  },[]);
  useEffect(()=>{
    console.log('useFeccet-->', counter)
  },[counter]);
  useEffect(()=>{
    console.log("allrefresh mount");
  })

  
  return (
    <div style={{ textAlign: "center" }}>
      <div>valeur du count: {counter}</div>
      <hr />
      <Button
        bgcolor="tomato"
        clickAction={() => {
          setCounter(counter -1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgcolor="skyblue"
        clickAction={() => {
          setCounter(counter +1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
