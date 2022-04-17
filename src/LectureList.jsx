import React ,{ useEffect } from "react";
import {lectureDetail} from "./LectureInfo";
import LecturContent from "./LectureContent"
import axios from "axios";

function LectureList(){

  const[lectures,updateLectures]=React.useState([]);

  useEffect(()=>{
    const promise=axios.get("https://api.codeyogi.io/batches/1/sessions",{withCredentials:true});
    promise.then((lecture)=>
    updateLectures(lecture.data)
    )
  } ,[]) 

  return(
    <div>
       <h1 className="mb-5 text-xl font-semibold">Lecture List</h1>
      <div className="bg-gray-50 h-full px-32 py-4 ">
        {lectures.map((lecture)=><LecturContent lecture={lecture}/>)}
      </div>
    </div>
  );
}

export default LectureList;