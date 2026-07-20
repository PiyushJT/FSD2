// <!-- Create a React form which accepts Name,Rollno and totalmarks,on 
// submitting the form it should be saved in data table inside MongoDB 
// database named student. -->

import React, { useState } from 'react';
import axios from 'axios';

function StudentForm() {
  const [data, setData] = useState({
    name: '',
    rollno: '',
    totalmarks: ''
  });
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/students', { 
name: data.name, rollno: data.rollno, totalmarks: data.totalmarks });
      console.log(response.data);
      alert('Data inserted successfully');
    }
    catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
    <div>
        <h2>Student Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
            </div>
            <div>
                <label>Roll No:</label>
                <input type="text" name="rollno" value={data.rollno} onChange={handleChange} />
            </div>
            <div>
                <label>Total Marks:</label>
                <input type="number" name="totalmarks" value={data.totalmarks} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );}

export default StudentForm;