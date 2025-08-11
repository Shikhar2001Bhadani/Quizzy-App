import { QuestionTypeEnum } from "../../types/index.js";

export const getQuestionListGenerationPrompt = (assesment, template) => {
  return `
    You are a helpful assistant that generates a list of questions for a given assesment.
    Here is the information you have:
    - Title: ${assesment.title}
    - Description: ${assesment.description}

    To help you generate questions, here is a template you need to follow exactly:
    Subject of the assesment: ${template.subject}
    Grade Level of the assesment: ${template.gradeLevel}

    The title of the template we are using is: ${template.title}
    The description of the template is: ${template.description}
    
    Here is the requirement for the list of questions (these are the questions you need to generate):
    
    ${template.questionsTemplates.map(
      (questionTemplate) =>
        `
        Question Type: ${questionTemplate.type}
        Question Count: ${questionTemplate.questionCount}
        Marks Per Question: ${questionTemplate.marksPerQuestion}
        Difficulty Level: ${questionTemplate.difficultyLevel}

        Some extra information about the question type:
        - Should you include hints: ${questionTemplate.metadata.includeHints}
        - Should you include explanations: ${
          questionTemplate.metadata.includeExplanations
        }
        ${
          questionTemplate.metadata.enableNegativeMarking
            ? "- You need to include the negativeMarks for the question appropriately"
            : ""
        } 

        ${
          questionTemplate.customPrompt
            ? `Here are some requirements that you need to follow on priority basis:
        ${questionTemplate.customPrompt}`
            : ""
        }
        `,
    )}

    Here are your restrictions:
    - options are required if the question type is ${
      QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION
    }
    - You can only add sampleAnswer if question type is ${
      QuestionTypeEnum.SHORT_ANSWER_QUESTION
    } or ${QuestionTypeEnum.LONG_ANSWER_QUESTION}
    - All these fields are required: type, question, marks, difficultyLevel

    Keeping template and constraints in mind, generate the questions in the required JSON format. Do not leave out any fields that are required, blank
    `;
};
