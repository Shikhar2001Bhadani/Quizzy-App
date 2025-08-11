import { GET_SUBMISSION_URL } from "../../../../constants";
import { apiSlice } from "../../../api";

const getSubmissionApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getSubmission: build.query({
      query: (id) => ({
        url: `${GET_SUBMISSION_URL}/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? {};
      },
      providesTags: ["Submissions"],
    }),
  }),
});

export const { useGetSubmissionQuery } = getSubmissionApi;
