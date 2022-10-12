import React from "react";
import { useContext } from "react";
import { EmployeesContext } from "./Employees";
import Arrow from "./Arrow";

function EmployeeProfile() {
  const { empContext, newEmployee } = useContext(EmployeesContext);
  //console.log("Emp Context", empContext);

  return (
    <div>
      {newEmployee
        .filter((item) => item.id === empContext.id)
        .map((e) => {
          return (
            <div key={e.id}>
              <div className="border">
                <img src={e.img} alt="friend" width="120" height="120" />
                <p>
                  <span style={{ fontWeight: "bold" }}> {e.name}</span>
                  <br />
                  <span> {e.occupation}</span>{" "}
                </p>
              </div>
              <div className="border">
                <p>
                  <span style={{ fontWeight: "bold" }}> Phone </span>
                  <br />
                  <span> {e.callOffice}</span>{" "}
                </p>
                <div className="arr">
                  {" "}
                  <Arrow />{" "}
                </div>
              </div>
              <div className="border">
                <p>
                  <span style={{ fontWeight: "bold" }}> Mobile </span>
                  <br />
                  <span> {e.callMobile}</span>{" "}
                </p>
                <div className="arr">
                  {" "}
                  <Arrow />{" "}
                </div>
              </div>
              <div className="border">
                <p>
                  <span style={{ fontWeight: "bold" }}> SMS </span>
                  <br />
                  <span> {e.sms}</span>{" "}
                </p>
                <div className="arr">
                  {" "}
                  <Arrow />{" "}
                </div>
              </div>
              <div className="border">
                <p>
                  <span style={{ fontWeight: "bold" }}> Email </span>
                  <br />
                  <span> {e.email}</span>{" "}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default EmployeeProfile;
