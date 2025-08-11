import { assesmentInitialState } from "../initialState";

export const resetAssesmentsStateAction = (state) => {
  Object.assign(state, assesmentInitialState);
};
