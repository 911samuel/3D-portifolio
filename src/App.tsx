import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import { About, Contact, Home, Projects}  from "./pages/index"


function App() {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
