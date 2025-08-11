import React from "react";
import { useHeading } from "../../../hooks";
import { useGetAllAssesmentsQuery } from "../../../store/features/assesments/api";
import { useGetAllSubmissionsQuery } from "../../../store/features/submissions/api";
import { BookCopy, CheckCircle, Clock, Users } from "lucide-react";

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className={`p-3 rounded-full mr-4 ${color}`}>
      {React.cloneElement(icon, { size: 24, color: "white" })}
    </div>
    <div>
      <p className="text-gray-600">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

function TeacherDashboard() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Dashboard");
  setSubheading("Welcome to your dashboard! Here's a summary of your activities.");

  const { data: assessments = [], isLoading: assessmentsLoading } = useGetAllAssesmentsQuery();
  const { data: submissions = [], isLoading: submissionsLoading } = useGetAllSubmissionsQuery();

  if (assessmentsLoading || submissionsLoading) {
    return <div>Loading...</div>;
  }

  const totalAssessments = assessments.length;
  const totalSubmissions = submissions.length;
  const averageScore =
    totalSubmissions > 0
      ? (
        submissions.reduce((acc, sub) => acc + (sub.totalMarks || 0), 0) /
        submissions.reduce((acc, sub) => acc + (sub.maxMarks || 1), 0)
      ) * 100
      : 0;

  const recentAssessments = assessments.slice(0, 5);
  const recentSubmissions = submissions.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={<BookCopy />}
        label="Total Assessments"
        value={totalAssessments}
        color="bg-blue-500"
      />
      <StatCard
        icon={<CheckCircle />}
        label="Total Submissions"
        value={totalSubmissions}
        color="bg-green-500"
      />
      <StatCard
        icon={<Users />}
        label="Average Score"
        value={`${averageScore.toFixed(2)}%`}
        color="bg-yellow-500"
      />
      <StatCard
        icon={<Clock />}
        label="Pending Submissions"
        value={submissions.filter(sub => sub.status !== 'completed').length}
        color="bg-red-500"
      />

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Assessments</h2>
            <ul>
              {recentAssessments.map(assessment => (
                <li key={assessment._id} className="border-b py-2">
                  {assessment.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
            <ul>
              {recentSubmissions.map(submission => (
                <li key={submission._id} className="border-b py-2">
                  {submission.assesmentId?.title} - {submission.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
