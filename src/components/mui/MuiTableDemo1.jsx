import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const MuiTableDemo1 = () => {

    const columns = [
        {field:"id" , headerName:"ID", width:90},
        {field:"firstName" , headerName:"First Name", width:150},
        {field:"lastName" , headerName:"Last Name", width:150},
        {field:"age" , headerName:"Age", width:90},
        
    ]
    const rows = [
        {id:1, lastName:"Snow", firstName:"Jon", age:35},
        {id:2, lastName:"Lannister", firstName:"Cersei", age:42},
        {id:3, lastName:"Lannister", firstName:"Jaime", age:45},
        {id:4, lastName:"Stark", firstName:"Arya", age:16},
        {id:5, lastName:"Targaryen", firstName:"Daenerys", age:35},
        {id:6, lastName:"Melisandre", firstName:null, age:150},
        
    ]

  return (
    <div>
        <Box sx={{ height: 400, width: 600 }}>
            <DataGrid
            columns={columns}
            rows={rows}
            ></DataGrid>
        </Box>
    </div>
  )
}
