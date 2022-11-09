import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {
    const [dataSource, setDataSource] = useState();

    useEffect(() => {
        axios.get( `https://6257777f74007111adf7b5a8.mockapi.io/role/${id}`)
        .then((res) => {
            setDataSource(res.data)
        })
    }, [])

    const {id} = useParams()

  return (
    <div>
        {dataSource && (
<>
    <div>
        <h1>VIEW USER</h1>
        <p>Role:</p>
        <h2>{dataSource.role}</h2>
        <p>Menu:</p>
        <h2>{dataSource.menu}</h2> 
    </div>
</>
        )}

    <div className="Container-Btn">
    <div className='View-btn'>
        <Link to='/' type="primary">Back</Link>
    </div>
    </div>
</div>
  )
}

export default View
