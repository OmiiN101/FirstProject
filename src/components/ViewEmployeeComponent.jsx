import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    if (id !== "-1") {
      // Fetch existing employee details
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          let employeeData = res.data;
          setEmployee({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            emailId: employeeData.emailId,
          });
        })
        .catch((error) => {
          console.error("Error fetching employee details", error);
        });
    }
  }, [id]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label>Employee First Name:</label>
            <div>{employee.firstName}</div>
          </div>
          <div className="row">
            <label>Employee Last Name:</label>
            <div>{employee.lastName}</div>
          </div>
          <div className="row">
            <label>Employee Email:</label>
            <div>{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
