
import { useDispatch, useSelector } from 'react-redux'
import { ordred, restoked } from '../features/cakeSlice'
import React, { useState } from 'react'
export const Cake = () => {
    const [value,setValue] = useState(1)
   const numberofcake=useSelector(state=>state.cake.numberofcake)
  const dispatch=useDispatch()
  return (
    <div style={{margin:"20px"}}>
        <h1 style={{marginBottom:"10px",fontSize:"18px", color:"gray",fontWeight:"bold"}}>numberofcake: {numberofcake}</h1>
        <button onClick={()=>dispatch(ordred())} style={{backgroundColor:'gray',marginRight:"20px",padding:"5px"}}>ordred</button>
        <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value))}/>
        <button onClick={()=>dispatch(restoked(value))} style={{backgroundColor:'gray', padding:"5px",marginLeft:"20px"}}>restoked</button>
    </div>
  )
}
