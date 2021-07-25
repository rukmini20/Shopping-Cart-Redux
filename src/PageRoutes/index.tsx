
import { Switch, Route, } from "react-router-dom";
import { routes, } from "./routes";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";
import styles from './index.module.scss'
const PageRoutes = (props: any) => {

  return (
    <>  
      <HeadAppBar />
      <div className={styles.background}>
        <Switch>
          {routes.map((route: any) => (
              <Route exact key={route.path} path={route.path} component={route.component} />
          ))}{" "}
          <Route component={NotFound} />

        </Switch>
      </div>
    </>
  );
};
export default PageRoutes;
