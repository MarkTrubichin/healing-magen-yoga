import Header from './components/header';
import MainPage  from './pages/mainpage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CoursesPage from './pages/coursespage';
import CoursesInfo from './pages/courseinfo';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CoursesInfo />} />

      </Routes>
    </Router>
  );
}

export default App;
