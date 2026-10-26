
import type { ReactNode } from "react";

type StudentPanelProps = {
  children: ReactNode;
};

export default function StudentPanel({
  children,
}: StudentPanelProps) {
  return (
    <section
      id="students"
      className="max-w-6xl mx-auto p-4 sm:p-6"
    >
      <h2 className="text-2xl font-bold mb-2">
        Student Portal
      </h2>

      <p className="text-gray-600 mb-6">
        View and manage student information.
      </p>

      <div className="bg-white rounded-lg shadow p-4">
        {children}
      </div>
    </section>
  );
}
