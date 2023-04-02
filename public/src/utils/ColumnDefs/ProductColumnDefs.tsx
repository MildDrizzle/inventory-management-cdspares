import { GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

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
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.model ? (
              <Link to={`productdetail/${params.id}`}>{params.row.model}</Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
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
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[0] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[0]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
      },
    },
    {
      field: "partNumber2",
      headerName: "Product ID 2",
      sortable: true,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[1] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[1]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
      },
    },
    {
      field: "partNumber3",
      headerName: "Product ID 3",
      sortable: true,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[3] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[3]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
      },
    },
    {
      field: "partNumber4",
      headerName: "Product ID 4",
      sortable: true,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[4] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[4]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
      },
    },
    {
      field: "partNumber5",
      headerName: "Product ID 5",
      sortable: true,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[5] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[5]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
      },
    },
    {
      field: "partNumber6",
      headerName: "Product ID 6",
      sortable: true,
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            {params.row.partNumber[6] ? (
              <Link to={`productdetail/${params.id}`}>
                {params.row.partNumber[6]}
              </Link>
            ) : (
              <span>-</span>
            )}
          </>
        );
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
