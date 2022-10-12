import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { EmployeesContext } from "./Employees";

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #1e81b0;
`;

const EmployeeName = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 100%;
`;

const EmployeeOccupation = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border: 2px solid #1e81b0;
  border-radius: 1rem;
  padding-top: 10px;
  width: 600px;
  height: 100%;
  flex-wrap: wrap;
  margin-left: 500px auto;
  margin: 10px auto;
  margin-bottom: -5px;
`;

const Button = styled.button`
  width: 20%;
  padding: 0.5rem 0;
  background-color: #03a9f4;
  color: white;
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 5px;
  &:hover {
    background-color: #1e81b0;
    color: #fff;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const Label = styled.label`
  color: #333;
  display: inline-block;
  width: 150px;
  text-align: right;
`;

const Form = function () {
  const { handleChange, handleSubmit, newEmployee } =
    useContext(EmployeesContext);

  const { img, name, occupation } = newEmployee;
  return (
    <>
      <StyledForm>
        <Title>Insert new employee</Title>
        <div style={{ display: "flex", gap: "8px" }}>
          <Label forhtml="name"> Name: </Label>
          <EmployeeName
            type="text"
            name="name"
            value={name}
            id="name"
            placeholder="Employee name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Label forhtml="price">Occupation: </Label>
          <EmployeeOccupation
            type="text"
            name="occupation"
            value={occupation}
            id="price"
            placeholder="occupation"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>
            <label for="imageFile">Select image:</label>
            <input
              type="file"
              id="imageFile"
              name="prfile picture"
              accept=".jpg, .jpeg, .png"
              multiple
              value={img}
              onChange={(e) => handleChange(e)}
            />
          </p>
        </div>

        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </StyledForm>
    </>
  );
};

export default Form;
