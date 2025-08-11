import { CREATE_TEMPLATE_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const createTemplateApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createTemplate: build.mutation({
      query: (body) => ({
        url: CREATE_TEMPLATE_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Templates"],
    }),
  }),
});

export const { useCreateTemplateMutation } = createTemplateApi;
