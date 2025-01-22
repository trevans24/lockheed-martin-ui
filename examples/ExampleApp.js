import React, { Component } from 'react';
import './ExampleApp.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENT IMPORTS
import UINav from '../src/components/Navbars/UINav';

// Pages
import Home from './pages/Home';
import Typography from './pages/Typography';
import Navigations from './pages/Navigations';
import Buttons from './pages/Buttons';
import Inputs from './pages/Inputs';
import Dropdowns from './pages/Dropdowns';
import Selections from './pages/Selections';
import SearchTab from './pages/SearchTab';
import Cards from './pages/Cards';
import Confirmations from './pages/Confirmations';
import Tables from './pages/Tables';
import CalendarPicker from './pages/CalendarPicker';
import Schedules from './pages/Schedules';
import EventMatrix from './pages/EventMatrix';
import Constraints from './pages/Constraints';
import Forms from './pages/Forms';

const ExampleApp = () => {
  return (
    <Router>
      <div className="app">
        <UINav />
        <div className="page-content">
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/typography" element={Typography} />
            <Route path='/navigations' element={Navigations} />
            <Route path='/buttons' element={Buttons} />
            <Route path="/inputs" element={Inputs} />
            <Route path="/dropdowns" element={Dropdowns} />
            <Route path="/selections" element={Selections} />
            <Route path="/search-tabs" element={SearchTab} />
            <Route path="/cards" element={Cards} />
            <Route path="/confirmations" element={Confirmations} />
            <Route path="/tables" element={Tables} />
            <Route path="/calendar" element={CalendarPicker} />
            <Route path="/schedule" element={Schedules} />
            <Route path="/event-matrix" element={EventMatrix} />
            <Route path="/constraints" element={Constraints} />
            <Route path="/forms" element={Forms} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default ExampleApp