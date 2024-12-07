import React from 'react'

export const FirstComponent = ({data,fn}) => {
  return (
    <div>
      <button onClick={()=>{fn(10)}}>Set10</button><br></br>
      {data}
    </div>
  )
}

export default FirstComponent