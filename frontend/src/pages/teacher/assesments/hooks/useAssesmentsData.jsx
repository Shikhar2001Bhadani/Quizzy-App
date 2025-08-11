import { EyeIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetAllAssesmentsQuery,
  useDeleteAssesmentMutation,
} from "../../../../store/features/assesments/api";

export const useAssesmentsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllAssesmentsQuery();
  const [triggerDelete] = useDeleteAssesmentMutation();

  const rows = data.map((assessment) => ({
    ...assessment,
    template: assessment?.template ? (
      <Link
        className="text-blue-500 hover:text-blue-600 cursor-pointer underline"
        to={`/teacher/templates/${assessment.template._id}`}>
        {assessment.template.title}
      </Link>
    ) : null,
  }));

  const actions = [
    {
      icon: <EyeIcon size={20} className="text-blue-500" />,
      onClick: (row) => {
        navigate(`/teacher/assesments/${row._id}`);
      },
    },
    {
      icon: <TrashIcon size={20} className="text-red-500" />,
      onClick: (row) => {
        triggerDelete(row._id);
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
