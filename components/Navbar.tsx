
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-3">
        <h1 className="text-xl font-bold">
          New Generation High School
        </h1>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/#students">Students</Link>
          <Link href="/#about">About</Link>
        </div>
      </div>
    </nav>
  );
}
