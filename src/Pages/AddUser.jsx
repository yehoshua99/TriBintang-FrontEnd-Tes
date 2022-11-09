import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [role,setRole]=useState()
    const [menu,setMenu]=useState()

    const navigate = useNavigate()

    const data = {
        role:role,
        menu:menu,
    }

    function SubmitUser(e){
        e.preventDefault()
        axios.post('https://6257777f74007111adf7b5a8.mockapi.io/role', data)
        .then (
            navigate('/')
        )
    }

  return (
    <div className='Edit-Section'>
        <h1>ADD USER</h1>
        <p>Role:</p>
        <Input value={role} onChange={(e) => setRole (e.target.value)} type='text' placeholder="Role" />
        <p>Menu:</p>
        <Input value={menu} onChange={(e) => setMenu (e.target.value)} type='text' placeholder="Menu" />

        <div className='Edit-btn'>    
                <Button  onClick={SubmitUser} type="primary">ADD USER</Button>
                {/* <Link to='/' type="primary">Back</Link> */}

        </div>
    </div>
  )
}

export default AddUser
