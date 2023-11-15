import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import HomeComponent from "./components/HomeComponent";
// import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import CreateUpdateEmployeeComponent from "./components/CreateUpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/view-employee/:id"
              element={<ViewEmployeeComponent />}
            />
            <Route
              path="/add-employee/:id"
              element={<CreateUpdateEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

//<Route path="/add-employee" element={<CreateEmployeeComponent/>} />
//<Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>} />
export default App;
