import readXlsxFile from "read-excel-file";

export const excelImport = async (file: any) => {
  const data = await readXlsxFile(file.target.files[0]);
  return parseJSON(data);
};

const validateFileType = (file: any) => {};

const parseJSON = (data: any) => {
  const parsedDataArray: any = [];
  data.splice(0, 1);
  data.forEach((singleData: any) => {
    parsedDataArray.push({
      fileDetails: {
        fileNumber: singleData[0],
        filePageNumber: singleData[1],
      },
      partNumber: [
        singleData[2],
        singleData[3],
        singleData[4],
        singleData[5],
        singleData[6],
      ],
      partName: singleData[7],
    });
  });
  return parsedDataArray;
};
