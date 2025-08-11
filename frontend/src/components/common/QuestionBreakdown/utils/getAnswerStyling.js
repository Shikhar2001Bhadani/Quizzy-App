export const getAnswerStyling = (marks, total) => {
  const percentage = (marks / total) * 100;

  if (percentage >= 75) {
    return "bg-green-100 text-green-800";
  } else if (percentage >= 30) {
    return "bg-yellow-50 text-yellow-800";
  } else {
    return "bg-red-50 text-red-800";
  }
};
