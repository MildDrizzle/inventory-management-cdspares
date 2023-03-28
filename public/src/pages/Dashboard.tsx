import { Box, Button } from "@mui/material";
import {
  DataGrid,
  GridColumns,
  GridToolbarQuickFilter,
  GridValidRowModel,
} from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductColumnDefs } from "../utils/ColumnDefs/ProductColumnDefs";
import { deleteProductsAPI, getProductsAPI } from "../utils/APIRoutes";

export default function Dashboard() {
  const navigate = useNavigate();
  const [gridData, setGridData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getProductsAPI);
        if (data.status) {
          setGridData(data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id: string) => {
    try {
      const { data } = await axios.delete(`${deleteProductsAPI}/${id}`);
      if (data.status) {
        // @ts-ignore
        const index = gridData.findIndex((product) => product._id === id);
        // @ts-ignore
        const clonedData = [...gridData];
        clonedData.splice(index, 1);
        // @ts-ignore
        setGridData(clonedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns = getProductColumnDefs(
    navigate,
    deleteProduct
  ) as GridColumns<GridValidRowModel>;

  return (
    <div>
      <Box sx={{ height: "95vh", width: "100%" }}>
        <Button variant="contained" onClick={() => navigate("/addproduct")}>
          Add New Product
        </Button>
        {gridData && (
          <DataGrid
            rows={gridData}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={50}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            components={{ Toolbar: GridToolbarQuickFilter }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
        )}
      </Box>
    </div>
  );
}
