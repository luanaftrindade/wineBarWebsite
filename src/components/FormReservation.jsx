import * as React from 'react';
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';

export function FormReservation() {
  const [inputs, setInputs] = useState({});
  const [howManyPeople, setHowManyPeople] = useState("1");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeReservationNumber = (event) => {
    setHowManyPeople(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div>
      <form className="formReservation" onSubmit={handleSubmit}>
        <label>
          Enter your first name:
          <input
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your last name:
          <input
            type="text"
            name="lastName"
            value={inputs.lastName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your phone number:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Do you want a reservation for how many people?
          <select
            value={howManyPeople}
            onChange={handleChangeReservationNumber}
          >
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </label>
        <label>
          Select the date:
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label="Basic date time picker" />
            </DemoContainer>
          </LocalizationProvider>
        </label>
        
        <input type="submit" />
      </form>
    </div>
  );
}
