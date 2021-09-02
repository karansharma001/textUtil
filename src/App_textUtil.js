import React, { useState } from "react";
import Navbar from "./textUtils/Navbar";
import Textform from "./textUtils/Textform";
import About from "./textUtils/About";
import Alert from "./textUtils/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App_textUtil = () => {
  // Prop varibale to show alerts
  const [alert, setAlert] = useState(null);

  const showAlert = (msg) => {
    setAlert({
      msg: msg,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Prop varibale for Dark mode
  const [dark, setdark] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <Router>
        <Navbar title="NoobCoder" currentMode={dark} setMode={setdark} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About style={dark} />
          </Route>
          <Route exact path="/">
            <Textform
              heading="Enter the text to analyze"
              style={dark}
              alertFun={showAlert}
            />
          </Route>
        </Switch>
      </Router>

      {/* <Navbar title="NoobCoder" currentMode={dark} setMode={setdark} />
      <Alert alert={alert} />
      <Textform
        heading="Enter the text to analyze"
        style={dark}
        alertFun={showAlert}
      />
      <About style={dark} /> */}
    </>
  );
};

export default App_textUtil;
