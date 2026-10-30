"use client";
/**
 * AddStudent
 * Edwin Guo
 * Oct 30, 2026
 * Adds adding functionality to the students list, by using student portal's add
 * Takes strings and numbers and passes values to get addeed.
 */

import { useState } from "react";
// Uses the student portal's handle add
interface AddStudentProps {
  onAdd: (fName: string, lName: string, gr: number, avg: number) => void;
}

const AddStudent = ({onAdd}: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9"); // Default values displayed
  const [average, setAverage] = useState("70"); 
  // Sets the useState which gets added when add button is clicked
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }
  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(event.target.value);
  }
  const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(event.target.value);
  }
  // Ensures there's names presented, and clears the entries
  const handleClick = () => {
    if (firstName.trim()==="" || lastName.trim()===""){
      return; 
    }
    // Adds the students to the array
    onAdd(firstName.trim(), lastName.trim(), parseInt(grade), parseFloat(average));
    // Resets for the next student entry
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
  }
  return (
    // Inputs and add button
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-slate-700">First Name</label>
          <input type="text"
            id = "firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-slate-700">Last Name</label>
          <input type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>  
        </div>

        <div>
          <label htmlFor="grade" className="block mb-1 text-sm font-medium text-slate-700">Grade</label>
          <input type="number"
            id = "grade"
            value={grade}
            onChange={handleGradeChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>  
        </div>

        <div>
          <label htmlFor="average" className="block mb-1 text-sm font-medium text-slate-700">Average</label>
          <input type="number"
            id = "average"
            value={average}
            onChange={handleAverageChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>  
        </div>

      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={handleClick} className="rounded-lg bg-blue-600 px-10 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer">
          Add
        </button>
      </div>
    </div>
  )
}

export default AddStudent