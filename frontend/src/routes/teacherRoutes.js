export const teacherRoutes = [
  {
    path: "/teacher",
    element: () => import("../pages/teacher"),
  },
  {
    path: "/teacher/dashboard",
    element: () => import("../pages/teacher/dashboard"),
  },
  //   Templates Pages
  {
    path: "/teacher/templates",
    element: () => import("../pages/teacher/templates"),
  },
  {
    path: "/teacher/templates/create",
    element: () => import("../pages/teacher/templates/create"),
  },
  {
    path: "/teacher/templates/:id",
    element: () => import("../pages/teacher/templates/create"),
  },
  //   Assesments Pages
  {
    path: "/teacher/assesments",
    element: () => import("../pages/teacher/assesments"),
  },
  {
    path: "/teacher/assesments/create",
    element: () => import("../pages/teacher/assesments/create"),
  },
  {
    path: "/teacher/assesments/:id",
    element: () => import("../pages/teacher/assesments/create"),
  },
  // Submissions Pages
  {
    path: "/teacher/submissions",
    element: () => import("../pages/teacher/submissions"),
  },
  {
    path: "/teacher/*",
    element: () => import("../pages/404"),
  },
];
