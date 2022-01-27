import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Overview from "pages/Overview";
import "./AppContainer.scss";

export const AppContainer: React.FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
      </Switch>
    </Suspense>
  );
};
