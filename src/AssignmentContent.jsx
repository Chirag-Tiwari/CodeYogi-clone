import React from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

function AssignmentContent(props){
  return(
    <Card>
      <h3 className="font-medium"># {props.id} {props.Name}<span className="text-gray-500">({props.date})</span></h3>
      <div className="flex justify-between">
        <div className="my-2">
         <h1 className="text-red-600">{props.dueDate} </h1>
         <h1 className="text-red-600">(Submission will count as late now)</h1>
          </div>
         <h1 className="font-semibold text-green-600">Submitted</h1>
     </div>
      <div className="flex justify-center">
         <button className="text-green-600 font-medium border-r-2 border-gray-400 px-24">Re-Submitt</button>
      <a className="text-indigo-500 font-medium mx-24" href={props.link}>See your submission</a>
        </div>
    </Card>
  );
}

export default AssignmentContent;