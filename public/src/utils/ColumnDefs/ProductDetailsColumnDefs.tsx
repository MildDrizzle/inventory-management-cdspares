import { GridValueGetterParams } from "@mui/x-data-grid";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const getProductDetailsColumnDefs = (
  navigate: any,
  deleteProductDetails: any,
  setEdit: any,
  setEditId: any
) => {
  return [
    {
      field: "invoiceNumber",
      headerName: "Inv No",
      sortable: true,
      width: 110,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.invoiceNumber || ""}`;
      },
    },
    {
      field: "date",
      headerName: "Date",
      sortable: true,
      width: 150,
      valueGetter: (params: GridValueGetterParams) => {
        return `${dayjs(params.row.date).format("DD/MM/YYYY") || ""}`;
      },
    },
    {
      field: "recipt",
      headerName: "Recipt",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.recipt || "-"}`;
      },
    },
    {
      field: "issue",
      headerName: "Issue",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.issue || "-"}`;
      },
    },
    {
      field: "balance",
      headerName: "Balance",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.balance || "-"}`;
      },
    },
    {
      field: "remark",
      headerName: "Remark",
      sortable: true,
      width: 200,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.remark || "-"}`;
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            <EditIcon
              onClick={() => {
                setEditId(params.id);
                setEdit(true);
              }}
            />
            <DeleteIcon
              onClick={() => {
                deleteProductDetails(params.id as string);
              }}
            />
          </>
        );
      },
    },
  ];
};
