import Header from "./Components/Header";
import "./index.css";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/Stats";
import FeedbackForm from "./Components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./Components/AboutIcon";
import FeedbackProvider from "./Components/FeedbackContext";
function App() {
  
  return (
    <FeedbackProvider>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackStats />
                  <FeedbackForm />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
