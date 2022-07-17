import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [Mode, SetMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "#001d68";
      showAlert("Dark mode has been enabled", "Success", "success");
      document.title = "Dark Mode Enabled";
      setInterval(() => {
        document.title = "TextUtils is Amezing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success", "primary");
    }
  };
  return (
    <>
      <Router>
        <Navbar title={"Text Utils Blog"} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={Mode}
              />
            }
          />
          <Route path="about/*" exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
