import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "./components/containers/Layout";
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Schedule from './pages/Schedule';
import NoPage from './pages/NoPage';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/schedule" element={<Schedule/>}/>
          <Route exact path="/workouts" element={<Workouts/>}/>
          <Route exact path="*" element={<NoPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
