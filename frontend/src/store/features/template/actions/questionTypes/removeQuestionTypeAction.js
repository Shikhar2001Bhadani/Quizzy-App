export const removeQuestionTypeAction = (state, { payload }) => {
  const { index } = payload;

  state.questionTypes.splice(index, 1);
};
