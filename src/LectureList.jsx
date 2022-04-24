import React, { useEffect } from "react";
import LecturContent from "./LectureContent"
import axios from "axios";
import { getLecture } from "./Api"

function LectureList() {

  const [lectures, updateLectures] = React.useState([]);

  useEffect(() => {
    const promise = getLecture()
    promise.then((lecture) =>
      updateLectures(lecture)
    )
  }, [])

  return (
    <div>
      <h1 className="mb-5 text-xl font-semibold">Lecture List</h1>
      <div className="bg-gray-50 h-full px-32 py-4 ">
        {lectures.map((lecture) => <LecturContent lecture={lecture} key={lecture.id} />)}
      </div>
    </div>
  );
}

export default LectureList;