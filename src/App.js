import React from 'react';
import Navbar from './components/navbar/NavbarTemp';
import HomePage from './pages/homePage';
import ResultsPage from './pages/results';
import ActivityDetails from './pages/activityDetails';
import BookingAdvisor from './pages/bookingAdvisor';
import Finish from './pages/finish';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="w-full m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path='/activityDetails' element={<ActivityDetails />} />
          <Route path='/bookingAdvisor' element={<BookingAdvisor />} />
          <Route path='/finish' element={<Finish/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
