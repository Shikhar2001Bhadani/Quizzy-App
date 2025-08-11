export const setTemplateAction = (state, { payload }) => {
  const { value } = payload;

  Object.assign(state, value);
};
