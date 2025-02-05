import Header from './components/header';
import MainPage  from './pages/mainpage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CoursesPage from './pages/coursespage';
import CoursesInfo from './pages/courseinfo';
import ContactUs from './pages/contactus';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CoursesInfo />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
