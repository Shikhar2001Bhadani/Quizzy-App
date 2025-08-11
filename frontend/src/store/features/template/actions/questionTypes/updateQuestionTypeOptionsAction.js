export const updateQuestionTypeOptionsAction = (state, { payload }) => {
  const { index, key, value } = payload;

  const questionType = state.questionTypes[index];

  if (!questionType) return;

  questionType.data.options[key] = value;
};
