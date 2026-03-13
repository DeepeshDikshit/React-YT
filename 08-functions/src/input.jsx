import React from 'react'

const Input = () => {
  function inputChanging(value){
    console.log('Input is changing', value);
  }
  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value);
      }} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default Input