import { Home, Checkout,Feedback } from "../components/pages";
import { RouteI } from "../interfaces";
enum routePaths {
  Home = "/",
  Checkout = "/checkout",
  Feedback = "/feedback",
}

const routes: Array<RouteI> = [
  {
    path: routePaths.Home,
    component: Home,
  },
  {
    path: routePaths.Checkout,
    component: Checkout,
  },
  {
    path: routePaths.Feedback,
    component: Feedback,
  },
];

export { routePaths, routes };
