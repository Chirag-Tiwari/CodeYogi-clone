import React from "react"
import Card from "./Card"
import { HiOutlineExternalLink } from "react-icons/hi"
import MDEditor from '@uiw/react-md-editor';


function LectureContent({ lecture }) {
  return (
    <Card>
      <h1 className="font-medium">Lecture #{lecture.id} <span className="font-medium text-gray-500">({lecture.created_at})</span></h1>
      <h1 className="text-gray-500">Duration: {`${+lecture.end_time - +lecture.start_time}`}</h1>
      <div className="mt-3 py-2 font-medium">
        <MDEditor.Markdown className="markdown" source={lecture.topic} />
      </div>
      <div className="flex justify-center">
        <a className="text-gray-500 font-medium flex" href={lecture.recording_url}><span className="text-2xl mr-2"><HiOutlineExternalLink /></span>Watch/Download Recording</a>
      </div>
    </Card>
  );
}

export default LectureContent;