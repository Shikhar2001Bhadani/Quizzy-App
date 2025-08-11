export const setAssessmentAction = (state, { payload }) => {
  const { value } = payload;

  Object.assign(state, value);
};
