import React from "react";
import "./App.css";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import { EmployeesProvider } from "./Employees";
import EmployeeProfile from "./EmployeeProfile";
import NavBar from "./NavBar";
import Search from "./Search";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Form from "./Form";

export default function App() {
  return (
    <React.Fragment>
      <EmployeesProvider>
        <header
          style={{
            height: "155px",
            fontFamily: "Verdana ",
            fontWeight: "bold",
            fontSize: "50",
          }}
        >
          <NavBar />
        </header>
        <div className="form"></div>
        <div className="app">
          <div className="homePage">
            <div>
              <Header headerValue="Employee Directory" />
            </div>
            <Search />
            <div className="employeeListWrapper ">
              <div className="employeeList ">
                <EmployeeList />
              </div>
            </div>
          </div>
          <div className="employeePage">
            <div>
              <Header
                headerValue="Employees"
                icons={
                  <KeyboardArrowLeft
                    style={{
                      fontSize: "48px",
                      color: "rgb(52, 147, 211)",
                      marginLeft: "-150px",
                      marginTop: "-10px",
                    }}
                  />
                }
              />
            </div>
            <div className="employeeProfile">
              <EmployeeProfile />
            </div>
          </div>
        </div>
      </EmployeesProvider>
    </React.Fragment>
  );
}

//export default App;
