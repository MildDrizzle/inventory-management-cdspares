import React from "react";
import { excelImport } from "../utils/excelImport";

export default function ImportDataFromExcel() {
  const handleExcelImport = async (file: any) => {
    const data = await excelImport(file);

    //   setGridData(data);
    //   const response = await axios.post(
    //     "http://localhost:5000/api/products/bulkadd",
    //     {
    //       data,
    //     }
    //   );
  };
  return <input type="file" onChange={handleExcelImport} />;
}
