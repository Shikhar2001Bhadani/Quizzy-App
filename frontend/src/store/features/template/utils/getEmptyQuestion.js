import { DifficultyLevelTypes, QuestionTypes } from "../../../../types";

export const getEmptyQuestion = ({ type = QuestionTypes.MULTIPLE_CHOICE }) => {
  return {
    type,
    data: {
      questionCount: 5,
      marksPerQuestion: 2,
      difficultyLevel: DifficultyLevelTypes.EASY,
      customPrompt: "",
      options: {
        includeHints: false,
        includeExplanations: false,
        shuffleOptions: false,
        enableNegativeMarking: false,
      },
    },
  };
};
