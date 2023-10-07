import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


function setPlusCount(){
if(count < 20) setCount((count) => count + 1);
}
function setMinusCount(){
  if(count > 0) setCount((count) => count - 1);
  }


  return (
    <>
      
      <h1>React Hooks : useState</h1>
      <div className="card">
        <button onClick={setPlusCount}>
         + count  {count}
        </button>
        <button onClick={setMinusCount}>
         - count is {count}
        </button>
      <h5>show the courrent no : {count}</h5>
      </div>
      <p>used it to show the variable data chenges on all over the UI </p>
     
    </>
  )
}

export default App
