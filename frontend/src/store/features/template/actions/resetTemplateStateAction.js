import { templateInitialState } from "../initialState";

export const resetTemplateStateAction = (state) => {
  Object.assign(state, templateInitialState);
};
