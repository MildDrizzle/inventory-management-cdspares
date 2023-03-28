// @ts-nocheck
import { Box } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AddProductDetail from "./ProductDetails/AddProductDetail";
import { getProductDetailsColumnDefs } from "../utils/ColumnDefs/ProductDetailsColumnDefs";
import EditProductDetail from "./ProductDetails/EditProductDetail";

function ProductDetail() {
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const deleteProductDetails = async (productDetailId: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/details/${params.id}/${productDetailId}`
      );
      const index = gridData.findIndex((id) => id === productDetailId);
      const clonedGridData = [...gridData!];
      clonedGridData.splice(index, 1);
      setGridData(clonedGridData);
    } catch (err) {
      console.log({ err });
    }
  };
  const columns: any = getProductDetailsColumnDefs(
    navigate,
    deleteProductDetails,
    setIsEdit,
    setEditID
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/details/${params.id}`
        );
        if (data.status) {
          console.log({ data });
          setGridData(data.productDetails);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.id]);

  const [gridData, setGridData] = useState(undefined);
  return (
    <div>
      <Box sx={{ height: "95vh", width: "100%" }}>
        <AddProductDetail />
        {isEdit && editID && (
          <EditProductDetail
            productId={params.id}
            editId={editID}
            open={isEditModalOpen}
            setOpen={setIsEditModalOpen}
          />
        )}
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

export default ProductDetail;
