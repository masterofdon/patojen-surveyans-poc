import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ChartsPage } from "../pages/charts";

export const AppRoutes = () => {

  const ROUTES = [
    {
      path: "/",
      name: "Home",
      element: <HomePage />,
      children: []
    },
    {
      path: "/charts",
      name: "Charts",
      element: <ChartsPage />,
      children: []
    }
  ];

  const element = useRoutes([...ROUTES]);

  return (
    <>{element}</>
  );
};