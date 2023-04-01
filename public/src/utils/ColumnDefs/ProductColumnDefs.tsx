import { GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export const getProductColumnDefs = (navigate: any, deleteProduct: any) => {
  return [
    {
      field: "fileNumber",
      headerName: "File Number",
      sortable: true,
      width: 110,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.fileDetails.fileNumber || ""}`;
      },
    },
    {
      field: "filePageNumber",
      headerName: "Page Number",
      sortable: true,
      width: 110,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.fileDetails.filePageNumber || ""}`;
      },
    },
    {
      field: "model",
      headerName: "Model",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.model || "-"}`;
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
      field: "partNumber1",
      headerName: "Product ID 1",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[0] || "-"}`;
      },
    },
    {
      field: "partNumber2",
      headerName: "Product ID 2",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[1] || "-"}`;
      },
    },
    {
      field: "partNumber3",
      headerName: "Product ID 3",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[2] || "-"}`;
      },
    },
    {
      field: "partNumber4",
      headerName: "Product ID 4",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[3] || "-"}`;
      },
    },
    {
      field: "partNumber5",
      headerName: "Product ID 5",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[4] || "-"}`;
      },
    },
    {
      field: "partNumber6",
      headerName: "Product ID 6",
      sortable: true,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => {
        return `${params.row.partNumber[5] || "-"}`;
      },
    },
    {
      field: "partName",
      headerName: "Product Name",
      sortable: true,
      width: 160,
    },

    {
      field: "",
      headerName: "",
      sortable: false,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            <RemoveRedEyeIcon
              onClick={() => navigate(`/productdetail/${params.id}`)}
            />
            <EditIcon onClick={() => navigate(`/edit-product/${params.id}`)} />
            <DeleteIcon
              onClick={() => {
                deleteProduct(params.id as string);
              }}
            />
          </>
        );
      },
    },
  ];
};
