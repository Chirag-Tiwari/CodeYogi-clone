import React from "react"
import Card from "./Card"

function LectureContent (props){
  return(
    <Card>
      <h1 className="font-medium">Lecture #{props.id} <span className="font-medium text-gray-500">({props.date})</span></h1>
      <h1 className="text-gray-500">Duration: {props.duration}</h1>
      <ul className="list-disc ml-6">
        <li>hello</li>
      </ul>
      <div className="flex justify-center">
        <a className="text-gray-500 font-medium" href={props.link}>Watch/Download Recording</a>
      </div>
    </Card>
  );
}

export default LectureContent;