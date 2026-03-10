import React from 'react'

const card = (props) => {
  console.log(props);
  
  return (
      <div className='card'>
        <h1>{props.user}  {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
  )
}

export default card