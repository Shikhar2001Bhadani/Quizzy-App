export const mcqAwardMarks = (question, response) => {
  let marksAwarded = 0;

  const correctAnswer = (question.options ?? [])?.find((op) => op.isCorrect);

  if (correctAnswer?.label === response) {
    marksAwarded = question.marks;
  } else {
    marksAwarded = question.negativeMarks;
  }

  return { marksAwarded };
};
