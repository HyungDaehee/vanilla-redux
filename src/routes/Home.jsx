import React, { useState } from 'react'

const Home = () => {
    const[text, SetText] = useState("")
    
    function onchange(e) {
        SetText(e.target.value);
    }
    function onsubmit(e){
        e.preventDefault()
       SetText("")
    }
  return (
   <>
   <h1>TO DO</h1>
   <form onSubmit={onsubmit}> 
   <input type='text' onChange={onchange} />
   <button>Add</button>
   </form>
   <ul></ul>
   </>
  )
}

export default Home