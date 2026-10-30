"use client";
/**
 * Student Portal
 * Edwin Guo
 * Oct 30, 2026
 * The Student's portal page, displays the Overview/stats, Students and Adding of a Student cards.
 * Also holds all the student list modification functionality that gets displayed on the page.
 */
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
  // Used to for the search functionality and matching to limit what is displayed.
  const [query, setQuery] = useState("");
  // The list of students, temporarily stored until refresh
  const [students, setStudents] = useState<Student[]>(studentList);
  // Adds a new student to the array, by making a new array
  const handleAdd = (fName: string, lName: string, gr: number, avg: number) => {
    const newStudent = {id: Date.now(), firstName: fName, lastName: lName, grade: gr, average: avg};
    setStudents([...students, newStudent]);
  };
  // Removes a student from the array by filtering out the matching id
  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  }
  // Clears the array entirely.
  const handleClear = () => {
    setStudents([]);
  }
  // The array of students displayed based on the query
  const matching = students.filter((student) =>
    student.firstName.toLowerCase().includes(query.toLowerCase()) || student.lastName.toLowerCase().includes(query.toLowerCase())
  );
  // Changes whats in the query based on input
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