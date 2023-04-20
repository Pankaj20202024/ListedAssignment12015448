import "./App.css";
import SingIn from "./components/singin/SingIn";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SingUp from "./components/signup/SingUp";
import Home from "./components/Home";
import UserChoice from "./components/choice/UserChoice";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserChoice />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
