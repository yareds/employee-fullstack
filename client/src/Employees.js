import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const EmployeesContext = createContext("");

export function EmployeesProvider(props) {
  const [newEmployee, setNewEmployee] = useState([]);
  const [addNewEmployee, setAddNewEmployee] = useState({
    img: "",
    name: "",
    occupation: "",
  });

  axios.defaults.baseURL = "http://localhost:5000/";

  const getAllEmployees = async () => {
    const response = await axios.get("/api/employees/allemployees");
    setNewEmployee(response.data);
  };

  useEffect(() => {
    console.log("show employee");
    getAllEmployees();
  }, []);

  const addEmployee = (img, name, occupation) => {
    setNewEmployee([
      ...newEmployee,
      { id: newEmployee.length + 1, img, name, occupation },
    ]);
  };

  const { img, name, occupation } = addNewEmployee;

  const handleSubmit = async (event) => {
    if (img === "" || name === "" || occupation === "") {
      return;
    }

    event.preventDefault();
    addEmployee(img, name, occupation);

    await axios.post("/api/employees/addemployee", newEmployee);

    setAddNewEmployee({
      img: "",
      name: "",
      occupation: "",
    });
  };

  const handleChange = (event) => {
    setAddNewEmployee({
      ...newEmployee,
      [event.target.name]: event.target.value,
    });
  };

  const [empContext, setEmpContext] = useState("");

  const clickHandler = (id) => {
    //console.log("button clicked", id);
    setEmpContext(id);
  };

  return (
    <EmployeesContext.Provider
      value={{
        newEmployee,
        clickHandler,
        empContext,
        handleSubmit,
        handleChange,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesContext;
