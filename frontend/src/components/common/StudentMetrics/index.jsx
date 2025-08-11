import React from "react";
import { getSubmissionMetrics } from "./utils";

function StudentMetrics({ data }) {
  return (
    <div className="border p-4 rounded grid grid-cols-2 lg:grid-cols-4 gap-2">
      {getSubmissionMetrics(data).map((metric) => (
        <div
          className="flex flex-col justify-between items-center"
          key={metric.label}>
          <p
            className={`${metric?.valueClassName} text-2xl text-center font-bold break-words`}>
            {metric.value}
          </p>
          <p className="text-xs text-gray-500 text-center">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentMetrics;
