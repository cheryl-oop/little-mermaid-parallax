import { createBrowserRouter } from "react-router";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import { LittleMermaidPage } from "../pages/littleMermaidPage";
import { LibraryPage } from "../pages/LibraryPage";
import { MakingOfPage } from "../pages/MakingOfPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/librarypage",
      element: <LibraryPage />,
    },
    {
      path: "/librarypage/:projectId",
      element: <DetailPage />,
    },
    {
      path: "/littleMermaidPage",
      element: <LittleMermaidPage />,
    },
    {
      path: "/makingof",
      element: <MakingOfPage />,
    },
  ],
  {
    basename: "/FrontEnd-Little_Mermaid-Cheryl_Aitchedji/", // 👈 Second argument
  },
);
