import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
    <Router>
    <Navbar title="TextUtils"  about="About | TextUtils"/>
      <Routes>
      <Route exact path="/" element={<Main heading="Enter Your text below"/>} />
      <Route exact path="/about" element={<About heading="Enter Your text below"/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
