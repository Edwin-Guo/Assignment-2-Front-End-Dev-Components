export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

export const students: Student[] = [
    {id: 1, firstName: "James", lastName: "Lake", grade: 12, average: 94},
    {id: 2, firstName: "Sofia", lastName: "Martinez", grade: 12, average: 74},
    {id: 3, firstName: "John", lastName: "Shin", grade: 9, average: 80},
    {id: 4, firstName: "David", lastName: "Albert", grade: 10, average: 89},
    {id: 5, firstName: "Alex", lastName: "Marquez", grade: 11, average: 71},
    {id: 6, firstName: "Andrea", lastName: "Duol", grade: 9, average: 67},
    {id: 7, firstName: "Eve", lastName: "Smith", grade: 10, average: 56},
    {id: 8, firstName: "Logan", lastName: "Brown", grade: 11, average: 88},
];