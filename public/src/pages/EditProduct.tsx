import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProductsAPI, getProductsAPI } from "../utils/APIRoutes";

export default function EditProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fileNumber: "",
    pageNumber: "",
    productid1: "",
    productid2: "",
    productid3: "",
    productid4: "",
    productid5: "",
    productid6: "",
    productName: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { products },
        } = await axios.get(`${getProductsAPI}/${params.id}`);
        setValues({
          fileNumber: products.fileDetails.fileNumber,
          pageNumber: products.fileDetails.filePageNumber,
          productid1: products.partNumber[0],
          productid2: products.partNumber[1],
          productid3: products.partNumber[2],
          productid4: products.partNumber[3],
          productid5: products.partNumber[4],
          productid6: products.partNumber[5],
          productName: products.partName,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [params.id]);
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleEditData = async () => {
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
      await axios.put(`${editProductsAPI}/${params.id}`, {
        data,
      });
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
            value={values.fileNumber}
          />
          <TextField
            id="pageNumber"
            label="Page Number"
            variant="outlined"
            onChange={handleChange}
            value={values.pageNumber}
          />
        </div>

        <div>
          <TextField
            id="productid1"
            label="Product ID 1"
            variant="outlined"
            onChange={handleChange}
            value={values.productid1}
          />
          <TextField
            id="productid2"
            label="Product ID 2"
            variant="outlined"
            onChange={handleChange}
            value={values.productid2}
          />
        </div>

        <div>
          <TextField
            id="productid3"
            label="Product ID 3"
            variant="outlined"
            onChange={handleChange}
            value={values.productid3}
          />
          <TextField
            id="productid4"
            label="Product ID 4"
            variant="outlined"
            onChange={handleChange}
            value={values.productid4}
          />
        </div>

        <div>
          <TextField
            id="productid5"
            label="Product ID 5"
            variant="outlined"
            onChange={handleChange}
            value={values.productid5}
          />
          <TextField
            id="productid6"
            label="Product ID 6"
            variant="outlined"
            onChange={handleChange}
            value={values.productid6}
          />
        </div>

        <div>
          <TextField
            id="productName"
            label="Product Name"
            variant="outlined"
            onChange={handleChange}
            value={values.productName}
          />
        </div>
        <Button variant="contained" onClick={() => navigate("/")} color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleEditData}>
          Edit Product
        </Button>
      </Grid>
    </div>
  );
}
