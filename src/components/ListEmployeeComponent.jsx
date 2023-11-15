import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    EmployeeService.getEmployees().then((res) => {
      if (this._isMounted) {
        this.setState({ employees: res.data });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  editEmployee(id) {
    // window.location.replace(`/update-employee/${id}`)
    window.location.replace(`/add-employee/${id}`);
  }
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employee: this.state.employees.filter((employee) => employee.id !== id),
      });
    });
    window.location.replace(`/employees`);
  }
  viewEmployee(id) {
    window.location.replace(`/view-employee/${id}`);
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <Link to="/add-employee/-1" className="btn btn-primary">
            Add Employee
          </Link>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.editEmployee(employee.id)}
                    >
                      Update
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-info"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
