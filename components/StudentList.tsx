/**
 * student list
 * Adrianne Shean Pacifico
 * October 30, 2026
 * draws the grid of student cards
 * props are array of students and onRemove callback
 * loops over the array with map()
 * also renders one StudentCard per student with student id as key
 */

import {Student} from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({students, onRemove}: StudentListProps) => {
    // empty state shown when there is nothing to display
    if (students.length === 0) {
        return (
            <p className = "py-8 text-center text-gray-500">No students to show.</p>
        );
    }

    //1 column on phones, 2 on small screens, 3 on large
    return (
        <div className = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
                <StudentCard key = {student.id} student = {student} onRemove = {onRemove}/>
            ))}
        </div>
    );
};
export default StudentList;