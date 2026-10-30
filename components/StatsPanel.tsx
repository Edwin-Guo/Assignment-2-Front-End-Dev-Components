
type Student = {
  grade: number;
  average: number;
};

type StatsPanelProps = {
  students: Student[];
};

export default function StatsPanel({
  students,
}: StatsPanelProps) {
  const total = students.length;

  const average = total === 0
    ? 0
    : students.reduce(
        (sum, student) => sum + student.average,
        0
      ) / total;

  const grade12 = students.filter(
    (student) => student.grade === 12
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h3>Total Students</h3>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h3>Average Mark</h3>
        <p className="text-2xl font-bold">
          {average.toFixed(1)}%
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h3>Grade 12 Students</h3>
        <p className="text-2xl font-bold">{grade12}</p>
      </div>
    </div>
  );
}
