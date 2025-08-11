import { getEmptyQuestion } from "../../utils";

export const addNewQuestionTypeAction = (state, { payload }) => {
  const { questionType } = payload;

  const newQuestion = getEmptyQuestion({ type: questionType });

  state.questionTypes.push(newQuestion);
};
