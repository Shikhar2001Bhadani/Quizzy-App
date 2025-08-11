import { createSlice } from "@reduxjs/toolkit";
import { templateInitialState } from "./initialState";
import * as Actions from "./actions";

export * from "./selectors";

const templateSlice = createSlice({
  name: "template",
  initialState: templateInitialState,
  reducers: {
    setTemplateKey: Actions.setTemplateKeyAction,
    addNewQuestionType: Actions.addNewQuestionTypeAction,
    removeQuestionType: Actions.removeQuestionTypeAction,
    updateQuestionTypeData: Actions.updateQuestionTypeDataAction,
    updateQuestionTypeOptions: Actions.updateQuestionTypeOptionsAction,
    setTemplate: Actions.setTemplateAction,
    resetTemplateState: Actions.resetTemplateStateAction,
  },
});

export const {
  setTemplateKey,
  addNewQuestionType,
  removeQuestionType,
  updateQuestionTypeData,
  updateQuestionTypeOptions,
  setTemplate,
  resetTemplateState,
} = templateSlice.actions;

export default templateSlice.reducer;
