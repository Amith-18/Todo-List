
const App = () => {

  let x ='Amith';
  let array =['user1','user2','user3','user4']
  return (
    <div>
      {x}
      {array.map((user)=>{
        return <h2>{user}</h2>
      })}
    </div>
  )
 
}
export default App
