import React, { useEffect } from 'react'
import {Table, Popconfirm, Button, Space} from 'antd'
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'
import { useState } from 'react';
import axios from 'axios';
import {isEmpty} from 'lodash'
import { Link } from 'react-router-dom';


const TryAnt = () => {
    const [dataSource, setDataSource] = useState([]);
    

    useEffect(() => {
        fetchRecords(1)
    }, [dataSource])

    // const handleDelete = (value) => {
    //     const dataSource = [...modifiedData]
    //     const filteredData = dataSource.filter((item) => item.id !== value.id);
    //     setDataSource(filteredData)
    // }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            editTable: true
        },
        {
            title: 'Role',
            dataIndex: 'role',
            editTable: true
        },
        {
            title: 'Menu',
            dataIndex: 'menu',
            editTable: true
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align:'center',
            render:(_, record)=>
            modifiedData.length >= 1 ?(
                <Space>
                        <Link to={`/view-user/${record.id}`} type='primary'>
                            VIEW
                        </Link>
                        <Link to={`/edit-user/${record.id}`} type='primary'>
                            EDIT
                        </Link>
                        <Popconfirm title='Delete?' onConfirm={() => Delete(record.id)}>
                            <Button danger type='primary'>Delete</Button>
                        </Popconfirm>
                </Space>
            ):null,
        },
    ]

    const fetchRecords = () => {
        
        axios.get('https://6257777f74007111adf7b5a8.mockapi.io/role')
        .then((res) => {
            setDataSource(res.data)
            })
        }

    function Delete(id){
        axios.delete(`https://6257777f74007111adf7b5a8.mockapi.io/role/${id}`)
        .then(
            fetchRecords()
        )
    }
    
    const modifiedData=dataSource.map(({ body, ...item}) => ({
        ...item,
        key: item.id,
        menu: isEmpty(body) ? item.menu : body
    }))

  return (
    <div 
    style={{
            display: 'flex',
            justifyContent : 'center',
            alignItem:'center',
        }}
        >
        <Table 
            columns={columns}
            dataSource={dataSource}
            
        >

        </Table>
      
    </div>
  )
}

export default TryAnt
