import { useState } from "react";
import "../styles/GetId.css"; 
import axios from "axios";

export function GetId() {
 const[id,setId]=useState("");
    const[employees,setEmployee]=useState(null);

    async function getData(e)
    {
        try{
            const response = await axios.get(`http://localhost:3001/api/employees/${id}`);
            setEmployee(response.data);
        }
        catch(err)
        {
            setEmployee(null);
          alert("Employee Not Found:" + err);
    }
    };
    return(
        <div className="find-container">
            <h3>Find Record By ID</h3>
            <hr/>
            <input type="text" placeholder="Enter id" value={id} onChange={e=>setId(
                e.target.value)} required/>
                <br/><br/>
                <button onClick = {getData}>Find Data</button>
                {employees && (
  <div className="emp-details">
    <h4>Employee Details</h4>
    <hr/>
    <p>Emp No: {employees.empNo}</p>
    <p>Emp Name: {employees.empName}</p>
    <p>Emp Sal: {employees.empSal}</p>
  </div>
)}

            
        </div>
    )
}