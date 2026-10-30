
import StudentPortal from "@/components/StudentPortal";
import StatsPanel from "@/components/StatsPanel";

export default function Home() {
  const students = [
    { grade: 10, average: 85 },
    { grade: 11, average: 90 },
    { grade: 12, average: 88 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Student Portal
      </h1>
      <StatsPanel students={students} />
      <StudentPortal/>
    </div>
  );
}


