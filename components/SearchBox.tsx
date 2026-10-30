"use client";
/**
 * SearchBox
 * Edwin Guo
 * Oct 30, 2026
 * Adds search functionality to the array by providing the input from the user to the query
 * Changes the query when search input value changes
 * Takes in any strings
 */
interface SearchStudentsProp {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({query, onChange}: SearchStudentsProp) => {
  return (
    <div>
      <label htmlFor="search" className="block mb-1 text-sm font-medium text-slate-700">Search Students</label>
      <input type="text"
        value={query}
        onChange={onChange}
        id = "search"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>  
    </div>
  )
}

export default SearchBox