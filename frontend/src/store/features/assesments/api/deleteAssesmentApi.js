import { DELETE_ASSESMENT_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const deleteAssesmentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    deleteAssesment: build.mutation({
      query: (id) => ({
        url: `${DELETE_ASSESMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Assessments"],
    }),
  }),
});

export const { useDeleteAssesmentMutation } = deleteAssesmentApi;
