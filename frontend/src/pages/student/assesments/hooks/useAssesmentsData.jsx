import { useNavigate } from "react-router-dom";
import { useGetAllAssesmentsQuery } from "../../../../store/features/assesments/api";
import { Loader, Play } from "lucide-react";
import { useStartAssesmentMutation } from "../../../../store/features/submissions/api";

export const useAssesmentsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllAssesmentsQuery();
  const [triggerStartAssesment, { isLoading }] = useStartAssesmentMutation();

  const rows = data.map((assessment) => ({
    ...assessment,
  }));

  const actions = [
    {
      icon: isLoading ? (
        <Loader size={20} className="animate-spin" />
      ) : (
        <Play size={20} className="text-blue-500" />
      ),
      onClick: async (row) => {
        if (isLoading) return;
        const data = await triggerStartAssesment({
          assesmentId: row._id,
        }).unwrap();
        navigate(
          `/student/assesments/${row._id}?submissionId=${data.submission?._id}`,
        );
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
