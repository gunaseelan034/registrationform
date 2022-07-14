import { DownloadOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import * as XLSX from 'xlsx';

import { manuplateExcelData } from "./exceldata";

export const DownloadXlxs = ({ data }) => {

  const download = () => {
    const excelData = manuplateExcelData(data);
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, "mysheet1");

    XLSX.writeFile(wb, "StudentData.xlsx");
  };

  return (
    <div>
      <Button type="text" onClick={download}>
        <Space>
          <DownloadOutlined style={{ color: "grey" }} />
          <span style={{ fontWeight: "400" }}>Export</span>
        </Space>
      </Button>
    </div>
  );
};
