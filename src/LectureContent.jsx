import React from "react"
import Card from "./Card"
import {HiOutlineExternalLink} from "react-icons/hi"

function LectureContent (props){
  return(
    <Card>
      <h1 className="font-medium">Lecture #{props.id} <span className="font-medium text-gray-500">({props.date})</span></h1>
      <h1 className="text-gray-500">Duration: {props.duration}</h1>
      <div className="mt-3 py-2"> 
        <ul className="list-disc ml-6">
         {props.topics}
        </ul>
      </div>
      <div className="flex justify-center">
        <a className="text-gray-500 font-medium flex" href={props.link}><span className="text-2xl mr-2"><HiOutlineExternalLink/></span>Watch/Download Recording</a>
      </div>
    </Card>
  );
}

export default LectureContent;