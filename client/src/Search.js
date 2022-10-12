import React from "react";
import { EmployeesContext } from "./Employees";
import { useContext, useState } from "react";

function SearchBar() {
  const { newEmployee } = useContext(EmployeesContext);
  const BarStyling = { width: "26rem", border: "none", padding: "0.5rem" };

  //  console.log("Emp Context ID", EmployeesContext );

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log("search", searchInput);
  };
  const searchName = searchInput
    ? newEmployee.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : null;

  return (
    <div>
      <div className="search">
        <input
          style={BarStyling}
          value={searchInput}
          placeholder={"Search Employees"}
          onChange={handleSearch}
        ></input>
      </div>

      {searchName?.map((person) => {
        return (
          <div className="employeesList" key={person.id}>
            <img src={person.img} alt="friend" width="65" height="65" />
            <p>
              <span style={{ fontWeight: "bold" }}> {person.name}</span> <br />
              <span style={{ color: "gray" }}> {person.occupation}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBar;
