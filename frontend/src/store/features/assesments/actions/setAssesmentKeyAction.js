export const setAssesmentKeyAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = value;
};
