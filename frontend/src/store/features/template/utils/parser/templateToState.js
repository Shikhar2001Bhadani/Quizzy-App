export const templateToState = (template) => {
  return {
    ...template,
    questionTypes: template?.questionsTemplates.map((template) => ({
      type: template.type,
      data: {
        ...template,
        options: template.metadata,
      },
    })),
  };
};
