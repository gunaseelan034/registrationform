import { message, Menu, Badge } from "antd";
import { useState } from "react";
import API from "../../../../services/index";
import { SheduleInterview } from "../sheduleinterview";


export const MenuSelection = ({ id, getData, studentData, filters }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  var updateApplicationStatus = (values) => {
    values = { ...values, studentData };
    API.dashboard
      .updateApplicationStatus(values)
      .then(() => {
        getData(filters);
        message.success("Successfuly Updated");
      })
      .catch(() => {
        message.error("Error Occured");
      });
  };


  return (
    <>
      <Menu
        style={{ padding: "10px" }}
        items={[
          {
            label: (
              <span
                onClick={() => {
                  updateApplicationStatus({
                    id: id,
                    status: "approve",
                  });
                }}
              >
                {" "}
                <Badge color="#87d068" text="Approve" />
              </span>
            ),
            key: "0",
            value: "approve",
          },
          {
            label: (
              <span
                onClick={() => {
                  updateApplicationStatus({ id: id, status: "reject" });
                }}
              >
                {" "}
                <Badge color="#f50" text="Reject" />
              </span>
            ),
            key: "1",
            value: "approve",
          },
          {
            label: (
              <span
                onClick={() => {
                  updateApplicationStatus({ id: id, status: "shortlist" });
                }}
              >
                {" "}
                <Badge color="#3b5999" text="ShortList" />
              </span>
            ),
            key: "2",
            value: "shortlist",
          },
          {
            label: (
              <span
                onClick={() => {
                  updateApplicationStatus({ id: id, status: "waiting" });
                }}
              >
                {" "}
                <Badge color="#f50" text="Waiting" />
              </span>
            ),
            key: "3",
            value: "Waiting",
          },
          {
            label: (
              <span onClick={handleModalOpen}>
                {" "}
                <Badge color="grey" text="Interview" />
              </span>
            ),
            key: "4",
            value: "Waiting",
          },
        ]}
      />
      <SheduleInterview
        studentData={studentData}
        getData={getData}
        filters={filters}
        id={id}
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        updateApplicationStatus={updateApplicationStatus}
      />
    </>
  );
};
