// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import EmployeeService from "../services/EmployeeService";

// const CreateUpdateEmployeeComponent = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//   });

//   useEffect(() => {
//     EmployeeService.getEmployeeById(id).then((res) => {
//       let employeeData = res.data;
//       setEmployee({
//         firstName: employeeData.firstName,
//         lastName: employeeData.lastName,
//         emailId: employeeData.emailId,
//       });
//     });
//   }, [id]);

//   const updateEmployee = (e) => {
//     e.preventDefault();
//     EmployeeService.updateEmployee(id, employee)
//       .then((response) => {
//         console.log("Employee updated successfully", response);
//         window.location.replace("/employees");
//       })
//       .catch((error) => {
//         console.error("Error updating employee", error);
//       });
//     console.log("employee =>" + JSON.stringify(employee));
   
//   };

//   const changeFirstNameHandler = (event) => {
//     setEmployee({ ...employee, firstName: event.target.value });
//   };

//   const changeLastNameHandler = (event) => {
//     setEmployee({ ...employee, lastName: event.target.value });
//   };

//   const changeEmailHandler = (event) => {
//     setEmployee({ ...employee, emailId: event.target.value });
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="card col-md-6 offset-md-3 offset-md-3 ">
//             <h3 className="text-center">Edit Employee</h3>
//             <div className="card-body">
//               <form>
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input
//                     placeholder="First Name"
//                     name="firstName"
//                     className="form-control"
//                     value={employee.firstName}
//                     onChange={changeFirstNameHandler}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Last Name</label>
//                   <input
//                     placeholder="Last Name"
//                     name="lastName"
//                     className="form-control"
//                     value={employee.lastName}
//                     onChange={changeLastNameHandler}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Email ID</label>
//                   <input
//                     placeholder="Email Id"
//                     name="Email Id"
//                     className="form-control"
//                     value={employee.emailId}
//                     onChange={changeEmailHandler}
//                   />
//                 </div>
//                 <button
//                   className="btn btn-success"
//                   onClick={updateEmployee}
//                 >
//                   Save
//                 </button>
//                 <Link
//                   to="/employees"
//                   className="btn btn-danger"
//                   style={{ marginLeft: "10px" }}
//                 >
//                   Cancel
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateUpdateEmployeeComponent;
