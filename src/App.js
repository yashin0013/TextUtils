import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
   <>
    <Navbar title={"Text Utils Blog"} />
    {/* <Navbar /> */}
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to analyze" /> */}
  <About />
    </div>
    
   </>
  );
}

export default App;
