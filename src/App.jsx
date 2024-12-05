
const App = () => {

  const btnClick =()=>{
    console.log("clicked")

  }
  return (
    <div>
      <button onClick={()=>{
        btnClick()
      }}>Click here</button>
    </div>
  )
 
}
export default App
