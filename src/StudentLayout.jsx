import React from "react"
import { GrTwitter } from "react-icons/gr";
import {AiFillLinkedin} from "react-icons/ai";
import Card from "./Card"

function StudentLayout(students){
    return(
        <div className=" bg-white m-3 w-72 h-72">
           <img className="h-52 w-72 object-cover rounded-lg" src="https://images.unsplash.com/photo-1649003175381-2df7e82ef6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
          <div>
           <h1 className="font-bold text-xl">{students}</h1>
           <h1 className="font-bold text-indigo-500">Front-end Developer</h1>
           <div className="flex space-x-4 text-gray-500 text-xl">
           <a href="https://twitter.com"><GrTwitter/></a>
           <a href="https://linkedin.com"><AiFillLinkedin/></a>
           </div>
           </div>
        </div>
    );
}

export default StudentLayout;