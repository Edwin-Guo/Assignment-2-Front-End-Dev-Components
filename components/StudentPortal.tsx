"use client";

import { useState } from 'react';
import { studentList } from "@/data/studentList";
import SearchBox from './SearchBox';
import AddStudent from './AddStudent';
import StatsPanel from './StatsPanel';

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

  const matching = students.filter((student) =>
    student.firstName.toLowerCase().includes(query.toLowerCase()) || student.lastName.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }


  return (
    <div>
      <section id="overview">
        <h1 className="text-2xl font-bold mb-4">Overview</h1>
        <StatsPanel students={students}/>
      </section>

      <section id ="add-student">
        <h1 className="text-2xl font-bold mb-4">Add a Student</h1>
        <div className='bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto sm:p-6 m-3'>
          <AddStudent onAdd={handleAdd}/>
        </div>
      </section>
      <section id = "students">
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <div className='bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto sm:p-6 m-3'>
          <SearchBox query={query} onChange={handleQueryChange}/>
          {/* <StudentList students={matching} onRemove={handleRemove} /> */}
          <button onClick={handleClear} className="mt-4 text-sm font-semibold text-slate-600 cursor-pointer">
            Clear all
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentPortal;