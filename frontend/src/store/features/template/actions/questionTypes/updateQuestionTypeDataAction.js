export const updateQuestionTypeDataAction = (state, { payload }) => {
  const { index, key, value } = payload;

  const questionType = state.questionTypes[index];

  if (!questionType) return;

  questionType.data[key] = value;
};
