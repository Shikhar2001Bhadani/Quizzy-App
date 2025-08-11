export const stateToTemplate = (state) => {
  return {
    ...state,
    questionTypes: undefined,
    questionTemplates: state.questionTypes?.map((questionType) => ({
      type: questionType.type,
      ...(questionType.data ?? {}),
      options: undefined,
      metadata: questionType.data?.options ?? {},
    })),
  };
};
