import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ReactArticle from "./Components/Blogs/React";
import TailwindArticle from "./Components/Blogs/Tailwind";
import ExpressArticle from "./Components/Blogs/Express";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/React" element={<ReactArticle/>} />
        <Route path="/Tailwind" element={<TailwindArticle/>} />
        <Route path="/Express" element={<ExpressArticle/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
