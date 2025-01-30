import React, { useEffect } from 'react';
import Header from './components/header';
import { fetchData } from './api';
import MainPage  from './pages/mainpage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CoursesPage from './pages/coursespage';




function App() {
  useEffect(() => {
    fetchData().catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
