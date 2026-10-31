/**
 * StudentCard
 * Adrianne Shean Pacifico
 * October 30, 2026
 * shows one student's full name and grade with two buttons
 * props are student object and onremove callback
 * keeps its own state 
 * also switches between hiding and showing student's avg and badge when the avg is 80 or more
 */


"use client"

import {useState} from "react";
import {Student} from "@/data/students";

interface StudentCardProps {
    student: Student;
    onRemove: (id: number) => void;
}

const HonourRollMark = 80;

const StudentCard = ({student, onRemove}: StudentCardProps) => {
    // each card tracks its own details so opening one never opens another
    const [showDetails, setShowDetails] = useState(false);

    //switch between shown and hidden
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    //asks the parent to remove this student
    const handleRemoveClick = () => {
        onRemove(student.id);
    };

    return (
        <div className = "rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            {/* name and grade */}
            <h3 className = "text-lg font-semibold text-gray-900">
                {student.firstName} {student.lastName}
            </h3>
            <p className = "text-sm text-gray-600">Grade: {student.grade}</p>
            {/* show details only when showDetails is true */}
            {showDetails && (
                <div className = "mt-3">
                    <p className = "text-gray-800">Average: {student.average}%</p>
                    {student.average >= HonourRollMark && (
                        <span className = "mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Honour Roll</span>
                    )}
                </div>
            )}

            {/* buttons */}
            <div className = "mt-4 flex gap-2">
                <button
                onClick = {handleToggleDetails}
                className = "rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                >
                    {showDetails ? "Hide details" : "Show details"}
                </button>

                <button
                onClick = {handleRemoveClick}
                className = "rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};
export default StudentCard;