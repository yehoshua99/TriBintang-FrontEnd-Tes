import { Button, Input} from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';



const Edit = () => {
    
    const [role,setRole]=useState()
    const [menu,setMenu]=useState()

    const navigate = useNavigate()

    const {id} =useParams()

    useEffect(() => {
        axios.get(`https://6257777f74007111adf7b5a8.mockapi.io/role/${id}`)
        .then((res) => {
            setRole(res.data.role)
            setMenu(res.data.menu)
        })
    }, [])

    const data = {
        role:role,
        menu:menu,
    }

    function Update(e){
        e.preventDefault()
        axios.put(`https://6257777f74007111adf7b5a8.mockapi.io/role/${id}`, data)
        .then (navigate('/'))
    }

  return (
    <div className='Edit-Section'>
        <h1>EDIT USER</h1>
        <p>Role:</p>
        <Input value={role} onChange={(e) => setRole (e.target.value)} type='text' placeholder="Role" />
        <p>Menu:</p>
        <Input value={menu} onChange={(e) => setMenu (e.target.value)} type='text' placeholder="Menu" />

    <div className='Edit-btn'>    
            <Button onClick={Update} type="primary">UPDATE</Button>
            <Link to='/' type="primary">Back</Link>

    </div>
    </div>
    
  )
}

export default Edit
