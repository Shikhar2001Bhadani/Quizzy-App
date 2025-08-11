export const calculatePercentage = (totalMarks, maxMarks) => {
  return ((totalMarks / maxMarks) * 100).toPrecision(4);
};
