export const setCommonKeyAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = value;
};
