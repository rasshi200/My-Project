import { useState } from 'react';
import axios from "axios";
import '../styles/Add.css';

export function Add() {
  const [formData, setFormData] = useState({

    empNo: "",
    empName: "",
    empSal: "",
  });
  async function addHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/employees', {
        empNo: formData.empNo,
        empName: formData.empName,
        empSal: formData.empSal
      });
      alert(response.data.message);

    }
    catch (err) {
      alert(err);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={addHandler}>
        <h1>Add Employees</h1>
        <input
          type="text"
          name="empNo"
          placeholder="Enter Number"
          value={formData.empNo}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="empName"
          placeholder="Enter Name"
          value={formData.empName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="empSal"
          placeholder="Enter Salary"
          value={formData.empSal}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit ✅</button>
      </form>
    </div>
  )
}
