"use client";

import { useState } from 'react';
import { studentList } from "@/data/student";
// import SearchBox from './SearchBox';
import AddStudent from './AddStudent';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

const StudentPortal = () => {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState<Student[]>(studentList);

  const handleAdd = (fName: string, lName: string, gr: number, avg: number) => {
    const newStudent = {id: Date.now(), firstName: fName, lastName: lName, grade: gr, average: avg};
    setStudents([...students, newStudent]);
  };
  
  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  const handleClear = () => {
    setStudents([]);
  }
  return (
    <div className='bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto sm:p-6 m-3'>
      <AddStudent onAdd={handleAdd}/>
  {/* <SearchBox/> */}
      <p>Waluigi</p>
      <button onClick={handleClear} className="mt-4 text-sm font-semibold text-slate-600 cursor-pointer">
        Clear all
      </button>
    </div>
  );
};

export default StudentPortal;