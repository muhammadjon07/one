import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";

import Contact from "../../Components/contact/top/index";
import Twice from "../../Components/contact/twice/index";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      <div style={{ backgroundColor: "#A745FF" }}>
        <Contact />
      </div>
      <div style={{}}>
        <Twice />
      </div>
      {/* {content} */}
    </>
  );
};
