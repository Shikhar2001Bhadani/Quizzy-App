import { createSlice } from "@reduxjs/toolkit";
import { assesmentInitialState } from "./initialState";
import * as Actions from "./actions";

export * from "./selectors";

const assesmentSlice = createSlice({
  name: "assesments",
  initialState: assesmentInitialState,
  reducers: {
    setAssesmentKey: Actions.setAssesmentKeyAction,
    setAssesment: Actions.setAssessmentAction,
    resetAssesmentsState: Actions.resetAssesmentsStateAction,
    addAnswer: Actions.addAnswerAction,
  },
});

export const {
  setAssesmentKey,
  resetAssesmentsState,
  setAssesment,
  addAnswer,
} = assesmentSlice.actions;

export default assesmentSlice.reducer;
