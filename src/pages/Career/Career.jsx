// import DataTableComp from "@/common/DataTable/DataTable";
import { useGlobalState } from "@/hooks";
import { FormatDateJsonPro } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Career = () => {
  const [globalState, dispatch] = useGlobalState();
  const { career } = globalState;
  console.log(career);

  const columns = [
    {
      Header: "Chức danh",
      Cell: (row) => <span>{row?.original?.CarrerName}</span>,
      width: 500,
      filterable: false,
      special: true,
      show: true,
      accessor: "CarrerName",
      filterable: true,
    },
    {
      Header: `Nơi làm việc`,
      Cell: (row) => <span>{row?.original?.Location}</span>,
      width: 200,
      filterable: true,
    },
    {
      Header: `Mức lương`,
      accessor: "IsHide",
      width: 200,
      filterable: true,
      Cell: (row) => <span>{row?.original?.Salary}</span>,
    },
    {
      Header: `Hạn nhận hồ sơ`,
      accessor: "IndexNumber",
      filterable: false,
      width: 200,
      Cell: (row) => <span>{FormatDateJsonPro(row?.original?.Deadline)}</span>,
    },

    {
      accessor: "IndexNumber",
      filterable: false,
      width: 200,
      Cell: (row) => <Link to={{
        pathname : "/thong-tin-tuyen-dung",
        search : `title=${row?.original?.Url}`
      }} className="bg-red px-2 py-1 text-white">Chi tiết</Link>,
    },

  ];
  return (
    <div className="container py-8 ">
      {Array.isArray(career) && <ReactTable data={career} columns={columns} />}
      
    </div>
  );
};

export default Career;
