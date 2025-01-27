import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MedicationDashboard from "./MedicationDashboard";
import IncidentReport from "./IncidentReport";

const App = () => (
  <Router basename="/recomed-dashboard"> {/* Update basename if hosted on a subpath */}
    <Routes>
      <Route path="/" element={<MedicationDashboard />} />
      <Route path="/incident-report" element={<IncidentReport />} />
    </Routes>
  </Router>
);

export default App;
