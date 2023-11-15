// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import EmployeeService from "../services/EmployeeService";

// class CreateEmployeeComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       emailId: "",
//     };
//     this.changeFirstNameHandler  = this.changeFirstNameHandler.bind(this)
//     this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
//     this.changeEmailHandler = this.changeEmailHandler.bind(this)
//   }

//   saveEmployee = (e) => {
//     e.preventDefault();
//     let employee = {
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       emailId: this.state.emailId,
//     };
//     console.log("employee =>" + JSON.stringify(employee));
//     // Perform actions like API calls or state updates here
//     EmployeeService.createEmployee(employee).then((res) => {
//       window.location.replace("/employees");
//     });
//   };

//   changeFirstNameHandler = (event) => {
//     this.setState({ firstName: event.target.value });
//   };
//   changeLastNameHandler = (event) => {
//     this.setState({ lastName: event.target.value });
//   };
//   changeEmailHandler = (event) => {
//     this.setState({ emailId: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="card col-md-6 offset-md-3 offset-md-3 ">
//               <h3 className="text-center">Add Employee</h3>
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <label>First Name</label>
//                     <input
//                       placeholder="First Name"
//                       name="firstName"
//                       className="form-control"
//                       value={this.state.firstName}
//                       onChange={this.changeFirstNameHandler}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Last Name</label>
//                     <input
//                       placeholder="Last Name"
//                       name="lastName"
//                       className="form-control"
//                       value={this.state.lastName}
//                       onChange={this.changeLastNameHandler}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Email ID</label>
//                     <input
//                       placeholder="Email Id"
//                       name="Email Id"
//                       className="form-control"
//                       value={this.state.emailId}
//                       onChange={this.changeEmailHandler}
//                     />
//                   </div>
//                   <button
//                     className="btn btn-success"
//                     onClick={this.saveEmployee}
//                   >
//                     Save
//                   </button>
//                   <Link
//                     to="/employees"
//                     className="btn btn-danger"
//                     style={{ marginLeft: "10px" }}
//                   >
//                     Cancel
//                   </Link>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CreateEmployeeComponent;
