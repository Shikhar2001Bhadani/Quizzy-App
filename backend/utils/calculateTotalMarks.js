export const calculateTotalMarks = (questions = []) => {
  return questions.reduce((acc, val) => acc + (val.marks ?? 0), 0);
};
