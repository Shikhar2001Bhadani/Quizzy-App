export const addAnswerAction = (state, { payload }) => {
  const { questionId, response } = payload;

  state.answers[questionId] = { response };
};
