"use client";
import { useState } from 'react';

interface AddStudentProps {
  onAdd: (fName: string, lName: string, gr: number, avg: number) => void;
}

const AddStudent = ({onAdd}: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9");
  const [average, setAverage] = useState("70");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value.trim());
  }
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value.trim());
  }
  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(event.target.value);
  }
    const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(event.target.value);
  }
  const handleClick = () => {
    if (firstName==="" || lastName===""){
      return; 
    }
    onAdd(firstName, lastName, parseInt(grade), parseFloat(average));
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
  }
  return (
    <div>
      <div className='flex gap-10'>
        <input type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder='First Name'
          className='flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none'/>
        <input type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder='Last Name'
          className='flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none'/>  
      </div>

      <div className='flex gap-10'>
        <input type="number"
          value={grade}
          onChange={handleGradeChange}
          className='flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none'/>  
        <input type="number"
          value={average}
          onChange={handleAverageChange}
          placeholder=''
          className='flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none'/>  
      </div>
      <button onClick={handleClick} className='rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer'>
        Add
      </button>
    </div>
  )
}

export default AddStudent