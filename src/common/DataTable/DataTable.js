// import React, { useEffect } from "react";
// import ReactTable from "react-table-6";
// import "react-table-6/react-table.css";
// import withFixedColumns from "react-table-hoc-fixed-columns";
// import "react-table-hoc-fixed-columns/lib/styles.css";
// /*
// David Note: please instal this package: npm install react-table-hoc-fixed-columns --save
// */
// const DataTableComp = ({
//   data = () => {},
//   columns = () => {},
//   fixedColumns = false,
//   sizePage = 10,
// }) => {
//   const ReactTableFixedColumns = withFixedColumns(ReactTable);
//   useEffect(() => {}, []);

// //   if (fixedColumns === true) {
// //     return (
// //       <ReactTableFixedColumns
// //         filterable={true}
// //         sortable={true}
// //         data={data}
// //         columns={columns}
// //         defaultPageSize={sizePage}
// //         className="-striped -highlight"
// //         previousText="<"
// //         nextText=">"
// //         loadingText="Loading..."
// //       />
// //     );
// //   } else {
    
// //   }
// return (
//     <ReactTable
//       filterable={true}
//       sortable={true}
//       data={data}
//       columns={columns}
//       defaultPageSize={sizePage}
//       className="-striped -highlight"
//       previousText="<"
//       nextText=">"
//       loadingText="Loading..."
//       globalSearch={true}
//     />
//   );
// };

// export default DataTableComp
