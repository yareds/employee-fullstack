import React from "react";
import { useContext } from "react";
import { EmployeesContext } from "./Employees";

function EmployeeList() {
  const { newEmployee, clickHandler } = useContext(EmployeesContext);

  return (
    <>
      {newEmployee.map((employee) => {
        return (
          <div
            className="employeesList"
            key={employee.id}
            onClick={() => {
              clickHandler(employee);
            }}
          >
            <img src={employee.img} alt="" width="65" height="65" />
            <p>
              <span style={{ fontWeight: "bold" }}> {employee.name}</span>{" "}
              <br />
              <span style={{ color: "gray" }}> {employee.occupation}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default EmployeeList;
