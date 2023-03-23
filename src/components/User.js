import { color, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers} from '../features/userSlice'
export const User = () => {
    const user =useSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
      
    }, [])
    
    
  return (
    <Container>
        <h1 style={{marginBottom:"10px",fontSize:"18px", color:"gray",fontWeight:"bold"}}>list of users</h1>
        {user.loading && <div>loading...</div>}
        {!user.loading && user.error?<div>Error:{user.error}</div>:null}
        {!user.loading && user.users.length ?( <ul>{user.users.map(user=>(<li key={user.id} style={{listStyleType:'none',margin:"10px"}}>{user.name}</li>))}</ul>)
       :null}

    </Container>
  )
}
