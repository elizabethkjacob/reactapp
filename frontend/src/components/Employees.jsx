import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axiosInstance from "../axiosinterceptor";
import { Link, useNavigate } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

const Employees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const handleAddEmployee = () => {
    navigate("/add");
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = sessionStorage.getItem("userToken");
        const response = await axiosInstance.get(
          "http://localhost:3005/admin/employees",
          {
            headers: {
              token: token,
            },
          }
        );
        setEmployees(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = (employeeId) => {
    axiosInstance
      .delete(`http://localhost:3005/admin/employees/${employeeId}`)
      .then((response) => {
        alert(response.data.message);
        setEmployees(
          employees.filter((employee) => employee._id !== employeeId)
        );
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const handleUpdate = (employeeId) => {
    setSelectedEmployeeId(employeeId);
  };

  
  return (
    <div className="mt-5">
      <div className="container" style={{ paddingTop: "20px" }}>
        <Button
          style={{
            float: "right",
            marginTop: "1px",
            marginBottom: "12px", 
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={handleAddEmployee}
        >
          Create
        </Button>
        <table className="table table-success table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Position</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.pos}</td>
                <td>{employee.display}</td>
                <td className="d-flex justify-content-between">
                 
                  
                  <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to={`/employees/${employee._id}`}
                    onClick={() => handleUpdate(employee._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedEmployeeId && <UpdateEmployee employeeId={selectedEmployeeId} />}
    </div>
  );
};

export default Employees;
