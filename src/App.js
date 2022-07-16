import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [Mode, SetMode]=useState("light");
  const [alert, setAlert]=useState(null);
  const showAlert =(message,type,color)=>{
setAlert({
  msg:message,
  type:type,
  color
});
setTimeout(()=>{
  setAlert(null)
},3000
);
  }
  const toggleMode = () => { 
    if (Mode==="light") {
      SetMode("dark");
      document.body.style.backgroundColor="#001d68";
      showAlert("Dark mode has been enabled","Success","success");
    }else{
      SetMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "Success", "primary");
    }
  }
  return (
   <>
    <Navbar title={"Text Utils Blog"} mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    {/* <Navbar /> */}
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />
  {/* <About /> */}
    </div>
    
   </>
  );
}

export default App;
