export const toggleSidebarAction = (state, { payload }) => {
  state.isSidebarOpen = payload ?? !state.isSidebarOpen;
};
