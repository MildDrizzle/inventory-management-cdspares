import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProductsAPI } from "../utils/APIRoutes";

export default function AddProduct() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fileNumber: undefined,
    pageNumber: undefined,
    productid1: null,
    productid2: null,
    productid3: null,
    productid4: null,
    productid5: null,
    productid6: null,
    productName: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleAddData = async () => {
    try {
      const data = {
        partNumber: [
          values.productid1,
          values.productid2,
          values.productid3,
          values.productid4,
          values.productid5,
          values.productid6,
        ],
        partName: values.productName,
        fileDetails: {
          fileNumber: values.fileNumber,
          filePageNumber: values.pageNumber,
        },
      };
      await axios.post(createProductsAPI, { data });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Grid
        height={"100vh"}
        container
        gap={"1rem"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <div>
          <TextField
            id="fileNumber"
            label="File Number"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="pageNumber"
            label="Page Number"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            id="productid1"
            label="Product ID 1"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="productid2"
            label="Product ID 2"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            id="productid3"
            label="Product ID 3"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="productid4"
            label="Product ID 4"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            id="productid5"
            label="Product ID 5"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="productid6"
            label="Product ID 6"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            id="productName"
            label="Product Name"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" onClick={handleAddData}>
          Add Product
        </Button>
      </Grid>
    </div>
  );
}
