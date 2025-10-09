
import './App.css'
import Button from '../ui/Button/Button.js'

const App = () => {

  let counter=0;
  return(
    <div style={{textAlign: "center"}}>
      <div>valeur du count: {counter}</div>
      <hr />
      <Button bgcolor="tomato" clickAction={()=>{
        counter--;
        console.log(counter);
      }}>-1</Button>
      <Button bgcolor="skyblue" clickAction={()=>{
        counter++;
        console.log(counter);
      }}>+1</Button>



    </div>
  )
  /*
  return (
    <>
        <div>DEMAT Breizh</div>
        <Button bgcolor="green">Nafise</Button>
        <Button
        type="button"
        style={{
          textDecoration: "unederline",
          fontStyle: "italic",
          backgroundColor: "grey",
        }}
        clickAction={(unArg)=>{
          console.trace(unArg);
        }}
        >
          Benjamin
        </Button>
        
        <Button 
        style={{pedding:"95px 95px", color:"red"}}
         >
          hello
        </Button>
        <Button value="Nafis" bgcolor="pink">
          <div> see me</div>
          <div> see next</div> 
        </Button>
        <button>push me </button>


    </>
)
  */
  
}

export default App
