import {
  LayoutDashboard,
  BookTemplate,
  TestTubeDiagonal,
  Send,
} from "lucide-react";

export const sidebarTopElements = [
  {
    label: "Dashboard",
    to: "/teacher/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Templates",
    to: "/teacher/templates",
    icon: <BookTemplate />,
  },
  {
    label: "Assesments",
    to: "/teacher/assesments",
    icon: <TestTubeDiagonal />,
  },
  {
    label: "Submissions",
    to: "/teacher/submissions",
    icon: <Send />,
  },
];
