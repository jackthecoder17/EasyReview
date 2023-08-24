import "./App.css";
import { Route, Routes } from "react-router";
import EasyReviewHome from "./components/EasyReviewHome";
import Browser from "./components/browser/Browser";
import GetStarted from "./components/getstarted/GetStarted";
import Question from "./components/question/question";
import Note from "./components/notes/note";
import Feedback from "./components/getfeedback/feedback";
import Howitworks from "./components/howitworks/howitworks";
import Contact from "./components/contact/contact";
import AboutUs from "./components/about/aboutus";
import Pricing from "./components/pricing/pricing";
import Blog from "./components/blog/blog";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EasyReviewHome />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/question" element={<Question />} />
        <Route path="/note" element={<Note />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>  
      
    </>
  );
}

export default App;
