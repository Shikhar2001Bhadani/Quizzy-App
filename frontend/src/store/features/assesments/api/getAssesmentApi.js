import { GET_ASSESSMENT_URL } from "../../../../constants";
import { apiSlice } from "../../../api";
import { setAssesment } from "../assesmentSlice";

const getAssesmentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAssesment: build.query({
      query: (id) => ({
        url: `${GET_ASSESSMENT_URL}/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data ?? {};
      },
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const { data } = await queryFulfilled;
        dispatch(
          setAssesment({
            value: data,
          }),
        );
      },
      providesTags: ["Assessments"],
    }),
  }),
});

export const { useGetAssesmentQuery } = getAssesmentApi;
