import { useNavigate } from "react-router-dom";
import { EyeIcon } from "lucide-react";
import { useGetAllSubmissionsQuery } from "../../../../store/features/submissions/api";

export const useSubmissionsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllSubmissionsQuery();

  const rows = data.map((submission) => ({
    ...submission,
    assessment: submission.assesmentId?.title,
  }));

  const actions = [
    {
      icon: <EyeIcon size={20} className="text-blue-500" />,
      onClick: (row) => {
        navigate(`/student/submissions/${row._id}`);
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
