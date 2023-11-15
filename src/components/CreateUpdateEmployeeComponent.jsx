import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateUpdateEmployeeComponent = () => {
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

  const saveEmployee = (e) => {
    e.preventDefault();

    if (id === "-1") {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log("Employee created successfully", response);
          window.location.replace("/employees");
        })
        .catch((error) => {
          console.error("Error creating employee", error);
        });
    } else {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          console.log("Employee updated successfully", response);
          window.location.replace("/employees");
        })
        .catch((error) => {
          console.error("Error updating employee", error);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const getTitle = () => {
    return id === "-1" ? "Add Employee" : "Update Employee";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">{getTitle()}</h3>
          <div className="card-body">
            <form onSubmit={saveEmployee}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  className="form-control"
                  value={employee.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={employee.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  placeholder="Email Id"
                  name="emailId"
                  className="form-control"
                  value={employee.emailId}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <Link to="/employees" className="btn btn-danger ml-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUpdateEmployeeComponent;
