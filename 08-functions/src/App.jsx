import React from 'react'
const Input = React.lazy(() => import('./input'))
function changeUser() {
  console.log('User changed')
}

function explorePage(){
  console.log('Exploring the page')
}


const App = () => {
  return (
    <div>
      <h1>Hello guys</h1>
      <button onClick={changeUser}>Change User</button>
      <button onClick={explorePage}>Expore the page</button>
      <Input />
    </div>
  )
}

export default App