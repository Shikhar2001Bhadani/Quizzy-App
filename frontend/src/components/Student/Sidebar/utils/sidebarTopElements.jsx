import {
  LayoutDashboard,
  BookTemplate,
  TestTubeDiagonal,
  Send,
} from "lucide-react";

export const sidebarTopElements = [
  {
    label: "Dashboard",
    to: "/student/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Assesments",
    to: "/student/assesments",
    icon: <TestTubeDiagonal />,
  },
  {
    label: "Submissions",
    to: "/student/submissions",
    icon: <Send />,
  },
];
