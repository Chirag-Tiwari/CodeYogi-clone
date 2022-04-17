import React from "react"
import Card from "./Card";

function AssignmentDetailPage(props) {
  return (
    <Card>
      <h3 className="text-lg font-medium">Assignment Detail</h3>
      <div className="flex ">
        <p className="text-gray-500 font-medium ">Title </p><span className="px-40"></span><p>{props.title}</p>
      </div>
      <div className="flex">
        <p className="text-gray-500 font-medium">Due Date </p><span className="px-40"></span><p>{props.dueDate}</p>
      </div>
      <div className="flex">
        <p className="text-gray-500 font-medium">Description </p><span className="px-40"></span><p>
          {props.discription}</p>
      </div>
    </Card>
  );
}

export default AssignmentDetailPage;