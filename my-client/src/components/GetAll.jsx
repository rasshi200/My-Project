import { useState } from "react";
import axios from 'axios';
import '../styles/GetAll.css';

export function GetAll() {
  const [employees, setEmployees] = useState([]);
   async function findAllHandler(e)
   {
    e.preventDefault();
    try{
        const response = await axios.get('http://localhost:3001/api/employees');
        setEmployees(response.data);

    }
    catch(err){
        alert(err);
    }
   }

    return(
        <div className="findall-container">
            <h1>Employee Records</h1>
            <hr/>
            <form onSubmit={findAllHandler}>
                <button type="submit">Get All Records</button>
            </form>

            <div>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </thead>
                    <tbody>
                    {
                        employees.length > 0 ?
                        (
                                employees.map(emp =>
                                    <tr>
                                        <td>{emp._id}</td>
                                       <td>{emp.empNo}</td>
                                        <td>{emp.empName}</td>
                                        <td>{emp.empSal}</td>
                                    </tr>
                                )
                            ) : <tr><td colSpan = {'4'}>No Record</td></tr>
                        }

                    </tbody>
                </table>
            </div>
            
      

        </div>
       
    )
}