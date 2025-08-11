import { SUBMIT_ASSESSMENT_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const submitAssesmentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    submitAssesment: build.mutation({
      query: ({ body, id }) => ({
        url: `${SUBMIT_ASSESSMENT_URL}/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Submissions"],
    }),
  }),
});

export const { useSubmitAssesmentMutation } = submitAssesmentApi;
