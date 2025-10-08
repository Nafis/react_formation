
import './App.css'
import Button from '../ui/Button/Button.jsx'

const App = () => {

  return (
    <>
        <div>DEMAT Breizh</div>
        <Button bgcolor="green">Nafise</Button>
        <Button 
        style={{pedding:"95px 95px", color:"red"}}
         >
          hello
        </Button>
        <Button value="Nafis" bgcolor="pink">
          <div> see me</div>
          <div>see next</div> 
          </Button>
        <button>push me </button>

    </>

  )
}

export default App
