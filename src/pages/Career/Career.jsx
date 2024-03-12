// import DataTableComp from "@/common/DataTable/DataTable";
import { useGlobalState } from "@/hooks";
import { FormatDateJsonPro } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table-6";
import moment from "moment"
import "react-table-6/react-table.css";

const Career = () => {
  const [globalState, dispatch] = useGlobalState();
  const { career } = globalState;

  const columns = [
    {
      Header: <p className="font-bold text-lg text-white">Chức danh</p>,
      Cell: (row) => <span className=" font-bold">{row?.original?.CarrerName}</span>,
      width: 500,
      accessor: "CarrerName",
      filterable: true,
    },
    {
      Header:<p className="font-bold text-lg text-white">Nơi làm việc</p>,
      Cell: (row) => <span className="">{row?.original?.Location}</span>,
      width: 200,
      filterable: true,
    },
    {
      Header: <p className="font-bold text-lg text-white">Mức lương</p>,
      accessor: "IsHide",
      width: 200,
      filterable: true,
      Cell: (row) => <span>{row?.original?.Salary}</span>,
    },
    {
      Header: <p className="font-bold text-lg text-white">Hạn nhận hồ sơ</p>,
      accessor: "IndexNumber",
      filterable: false,
      width: 200,
      Cell: (row) => <span>{moment(row?.original?.Deadline).format("DD/MM/YYYY")}</span>,
    },

    {
      accessor: "IndexNumber",
      filterable: false,
      width: 200,
      Cell: (row) => <Link to={{
        pathname : "/thong-tin-tuyen-dung",
        search : `title=${row?.original?.Url}`
      }} className="bg-primary hover:bg-secondary flex items-center w-fit gap-2  px-2 py-1 text-white"> <i className="fa fa-eye "></i><p>Chi tiết</p></Link>,
    },

  ];
  return (
    <div className="container py-8 ">
      {Array.isArray(career) && <ReactTable data={career} columns={columns} />}
      
    </div>
  );
};

export default Career;
