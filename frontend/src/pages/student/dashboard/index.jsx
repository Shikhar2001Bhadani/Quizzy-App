import React from "react";
import { useHeading } from "../../../hooks";
import { useGetAllAssesmentsQuery } from "../../../store/features/assesments/api";
import { useGetAllSubmissionsQuery } from "../../../store/features/submissions/api";
import { BookCopy, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white  p-6 rounded-lg shadow-md flex items-center">
    <div className={`p-3 rounded-full mr-4 ${color}`}>
      {React.cloneElement(icon, { size: 24, color: "white" })}
    </div>
    <div>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

function StudentDashboard() {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Student Dashboard");
  setSubheading("Welcome back! Here's a summary of your progress.");

  const { data: assessments = [], isLoading: assessmentsLoading } = useGetAllAssesmentsQuery();
  const { data: submissions = [], isLoading: submissionsLoading } = useGetAllSubmissionsQuery();

  if (assessmentsLoading || submissionsLoading) {
    return <div>Loading...</div>;
  }

  const completedSubmissions = submissions.filter(sub => sub.status === 'completed');
  const totalSubmissions = submissions.length;
  const averageScore =
    completedSubmissions.length > 0
      ? (
        completedSubmissions.reduce((acc, sub) => acc + (sub.totalMarks || 0), 0) /
        completedSubmissions.reduce((acc, sub) => acc + (sub.maxMarks || 1), 0)
      ) * 100
      : 0;
  
  const completedAssessmentIds = new Set(completedSubmissions.map(sub => sub.assesmentId?._id));
  const pendingAssessments = assessments.filter(assessment => !completedAssessmentIds.has(assessment._id)).length;


  const recentSubmissions = submissions.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={<BookCopy />}
        label="Assessments Taken"
        value={totalSubmissions}
        color="bg-blue-500"
      />
      <StatCard
        icon={<Clock />}
        label="Pending Assessments"
        value={pendingAssessments}
        color="bg-red-500"
      />
      <StatCard
        icon={<CheckCircle />}
        label="Average Score"
        value={`${averageScore.toFixed(2)}%`}
        color="bg-green-500"
      />
       <StatCard
        icon={<Users />}
        label="Completed"
        value={completedSubmissions.length}
        color="bg-yellow-500"
      />

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Available Assessments</h2>
            <ul>
              {assessments.map(assessment => (
                <li key={assessment._id} className="border-b dark:border-gray-700 py-2 flex justify-between items-center">
                  <span>{assessment.title}</span>
                  <Link to={`/student/assesments/${assessment._id}`} className="text-blue-500 hover:underline">
                    Take Now
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
            <ul>
              {recentSubmissions.map(submission => (
                <li key={submission._id} className="border-b dark:border-gray-700 py-2 flex justify-between items-center">
                  <span>{submission.assesmentId?.title}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    submission.status === 'completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {submission.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
