import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MedicationDashboard from "./MedicationDashboard";
import IncidentReport from "./IncidentReport";

const App = () => (
  <Router > 
    <Routes>
      <Route path="/" element={<MedicationDashboard />} />
      <Route path="/incident-report" element={<IncidentReport />} />
    </Routes>
  </Router>
);

export default App;
