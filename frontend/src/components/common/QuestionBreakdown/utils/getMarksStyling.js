export const getMarksStyling = (marks, total) => {
  const percentage = (marks / total) * 100;

  if (percentage >= 75) {
    return "bg-green-600 text-white";
  } else if (percentage >= 30) {
    return "bg-yellow-600 text-white";
  } else {
    return "bg-red-600 text-white";
  }
};
