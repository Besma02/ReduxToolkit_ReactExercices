import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordred, restoked } from '../features/iceCreamSlice'

export const IceCream = () => {
    const [value,setValue] = useState(1)
   const numberoficeCream=useSelector(state=>state.iceCream.numberoficeCream)
  const dispatch=useDispatch()
  return (
    <div style={{margin:"20px"}}>
        <h1 style={{marginBottom:"10px",fontSize:"18px", color:"gray",fontWeight:"bold"}}>numberoficeCream: {numberoficeCream}</h1>
        <button onClick={()=>dispatch(ordred())} style={{backgroundColor:'gray',marginRight:"20px",padding:"5px"}}>ordred</button>
        <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value))}/>
        <button onClick={()=>dispatch(restoked(value))}style={{backgroundColor:'gray', padding:"5px",marginLeft:"20px"}}>restoked</button>
    </div>
  )
}
