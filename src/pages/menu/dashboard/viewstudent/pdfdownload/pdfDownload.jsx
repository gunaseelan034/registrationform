import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useReactToPrint } from "react-to-print";

export const Pdfdownloader = ({ downloadRef, studentData }) => {
  const downloadPdf = useReactToPrint({
    content: () => downloadRef.current,
    documentTitle: studentData.first_name + "_" + "details" + '_' + new Date(),
  });
  return (
    <div>
      <Button onClick={downloadPdf} type="primary">
        <DownloadOutlined />
        Download PDF
      </Button>
    </div>
  );
};
