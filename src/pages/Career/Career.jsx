import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Career = () => {
  const data = [
    {
      name: "Tanner Linsley",
      age: 26,
      friend: {
        name: "Jason Maurer",
        age: 23,
      },
    },
  ];
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
  return (
    <div className="container py-8">
      <ReactTable
        className="-striped -highlight"
        columns={columns}
        filterable={true}
        sortable={true}
        // data={data}
      />
    </div>
  );
};

export default Career;
