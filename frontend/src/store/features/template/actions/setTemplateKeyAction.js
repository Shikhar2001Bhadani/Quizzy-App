export const setTemplateKeyAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = value;
};
