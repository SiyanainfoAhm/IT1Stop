
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Services from "../pages/services/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";
import Projects from "../pages/projects/page";
import PrivacyPolicy from "../pages/privacy-policy/page";
import TermsOfService from "../pages/terms-of-service/page";
import SecurityStatement from "../pages/security-statement/page";
import GovernmentCompliance from "../pages/government-compliance/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
  },
  {
    path: "/security-statement",
    element: <SecurityStatement />,
  },
  {
    path: "/government-compliance",
    element: <GovernmentCompliance />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
