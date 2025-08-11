import { GET_ALL_ASSESSMENTS_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const getAllAssesmentsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllAssesments: build.query({
      query: () => ({
        url: GET_ALL_ASSESSMENTS_URL,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? [];
      },
      providesTags: ["Assessments"],
    }),
  }),
});

export const { useGetAllAssesmentsQuery } = getAllAssesmentsApi;
