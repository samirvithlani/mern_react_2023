import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiTable2 = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "isActive", headerName: "Status", width: 120, sortable: false },
  ];

  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Box sx={{ height: 400, width: 600, backgroundColor: "gray" }}>
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(row) => row._id}
            //   initialState={{
            //     ...users.initialState,
            //     pagination: { paginationModel: { pageSize: 5 } },
            //   }}
            //   pageSizeOptions={[2, 3, 5]}
            //   slots={{
            //     toolbar: GridToolbar
            //   }}
        ></DataGrid>
      </Box>
    </div>
  );
};
