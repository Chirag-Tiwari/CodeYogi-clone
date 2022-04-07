import React , {useEffect} from "react"
import axios from "axios";
import StudentLayout from "./StudentLayout"


function StudentsList(){

   const[studentData,updateStudentData] = React.useState([]);

   useEffect(()=>{
    const promise = axios.get("https://randomuser.me/api/?results=13")
    
    promise.then ((response) => {
    console.log(response);
    updateStudentData(response.data.results) ;
    });
},[]);
    
    return(
<div className="flex">
{ studentData.map((u) => <StudentLayout student={u}/>)}
</div>
    );
}

export default StudentsList;