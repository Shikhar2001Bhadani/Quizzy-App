import { GET_ALL_TEMPLATES_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api";

const getAllTemplatesApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllTemplates: build.query({
      query: () => ({
        url: GET_ALL_TEMPLATES_URL,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? [];
      },
      providesTags: ["Templates"],
    }),
  }),
});

export const { useGetAllTemplatesQuery } = getAllTemplatesApi;
