import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import BackOffice from "./pages/Backoffice.jsx"; 

const theme = createTheme(); // Crée un thème par défaut MUI

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/backoffice" element={<BackOffice />} /> 
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
