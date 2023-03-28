import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  createProducDetailsAPI,
  getProductsDetailsAPI,
} from "../../utils/APIRoutes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function EditProductDetail({
  productId,
  editId,
  open,
  setOpen,
}: {
  productId: string;
  editId: string;
  open: boolean;
  setOpen: any;
}) {
  const params = useParams();
  const [data, setData] = useState({
    invoiceNumber: "",
    date: dayjs(),
    recipt: 0,
    issue: 0,
    balance: 0,
    remark: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${getProductsDetailsAPI}/${productId}${editId}`
        );
        console.log({ editDat: data });
        // setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [editId, productId]);

  useEffect(() => {
    if (editId && productId) {
      setOpen(true);
    }
  }, [editId, productId, setOpen]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleAddData = async () => {
    try {
      await axios.post(`${createProducDetailsAPI}/${params.id}`, { data });
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        style={{ outline: 0 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <Grid
            container
            gap={"1rem"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            <div>
              <TextField
                id="invoiceNumber"
                label="Invoice Number"
                variant="outlined"
                onChange={handleChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={data.date}
                  onChange={(date: any) => setData({ ...data, date })}
                />
              </LocalizationProvider>
            </div>

            <div>
              <TextField
                id="recipt"
                type="number"
                label="Recipt"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                id="issue"
                type="number"
                label="Issue"
                variant="outlined"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                id="balance"
                type="number"
                label="Balance"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                id="remark"
                label="Remark"
                variant="outlined"
                onChange={handleChange}
              />
            </div>

            <Button variant="contained" onClick={handleAddData}>
              Edit Data
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProductDetail;
