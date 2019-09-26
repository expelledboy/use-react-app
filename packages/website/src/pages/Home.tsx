import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

interface IHomePage extends RouteComponentProps {}

const HomePage: FC<IHomePage> = () => (
  <div className="App">
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  </div>
);

export default HomePage;
