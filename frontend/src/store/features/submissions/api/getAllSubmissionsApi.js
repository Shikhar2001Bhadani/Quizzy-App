import { GET_ALL_SUBMISSIONS_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const getAllSubmissionsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllSubmissions: build.query({
      query: () => ({
        url: GET_ALL_SUBMISSIONS_URL,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? [];
      },
      providesTags: ["Submissions"],
    }),
  }),
});

export const { useGetAllSubmissionsQuery } = getAllSubmissionsApi;
