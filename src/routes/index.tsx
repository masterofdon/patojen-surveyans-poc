import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";

export const AppRoutes = () => {

  const ROUTES = [
    {
      path: "/",
      name: "Home",
      element: <HomePage />,
      children: []
    },
    {
      path: "/about",
      name: "About",
      element: <div>About Page</div>,
      children: []
    }
  ];

  const element = useRoutes([...ROUTES]);

  return (
    <>{element}</>
  );
};