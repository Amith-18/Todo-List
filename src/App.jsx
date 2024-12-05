import { useState } from "react";

const App = () => {

  const [x,setx] = useState(0);

  const btnClick =()=>{
    console.log("clicked");
    setx(x+1);
    console.log(x);

  }
  return (
    <div>
      {x} <br />
      <button onClick={()=>{
        btnClick()
      }}>Click here</button>
    </div>
  )
 
}
export default App
