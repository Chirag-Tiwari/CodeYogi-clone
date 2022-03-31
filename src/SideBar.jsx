import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineQuiz,MdOutlineAssignment } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';

function SideBar (){
    return(
 <div className="bg-gray-800 h-screen w-60 flex flex-col space-y-4 p-4 sticky top-0">
   <h1 className="text-3xl font-extrabold text-white">CodeYogi</h1>
  <Link to= "/lecture" className="text-white text-bold flex"><span className="text-2xl mr-2"><GiTeacher/></span>Lecture</Link>
  <Link to= "/assignment" className="text-white text-bold flex"> <span className=" mr-2 text-2xl"><MdOutlineAssignment/> </span>Assignment</Link>
  <Link to="/quiz" className="text-white text-bold flex"><span className=" mr-2 text-2xl"><MdOutlineQuiz/></span> Quiz</Link>
 </div>
    );
}

export default SideBar;