import { CREATE_ASSESSMENT_USING_AI_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const createAssesmentUsingAIApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createAssesmentUsingAI: build.mutation({
      query: (body) => ({
        url: CREATE_ASSESSMENT_USING_AI_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Assessments"],
    }),
  }),
});

export const { useCreateAssesmentUsingAIMutation } = createAssesmentUsingAIApi;
