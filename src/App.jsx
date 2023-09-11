import "./App.css";
import { Route, Routes } from "react-router";
import EasyReviewHome from "./routes/EasyReviewHome";
import Browser from "./routes/browser/Browser";
import GetStarted from "./routes/getstarted/GetStarted";
import Question from "./routes/question/question";
import Note from "./routes/notes/note";
import Feedback from "./routes/getfeedback/feedback";
import Howitworks from "./routes/howitworks/howitworks";
import Contact from "./routes/contact/contact";
import AboutUs from "./routes/about/aboutus";
import Pricing from "./routes/pricing/pricing";
import Blog from "./routes/blog/blog";
import Generate from "./routes/generate/generate";
import Billing from "./routes/billing/billing";
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
        <Route path="/generate" element={<Generate />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>  
      
    </>
  );
}

export default App;
