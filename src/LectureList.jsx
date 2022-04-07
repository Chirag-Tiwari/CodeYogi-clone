import React from "react";
import {lectureDetail} from "./LectureInfo";
import LecturContent from "./LectureContent"

function LectureList(){
  return(
    <div>
       <h1 className="mb-5 text-xl font-semibold">Lecture List</h1>
      <div className="bg-gray-50 h-full px-32 ">
        {lectureDetail.map((lecture)=><LecturContent id={lecture.id} key={lecture.id} date={lecture.date} duration={lecture.duration}
         topics={lecture.topics.map((topicList)=><li>{topicList}</li>)} link={lecture.link}></LecturContent>)}
      </div>
    </div>
  );
}

export default LectureList;