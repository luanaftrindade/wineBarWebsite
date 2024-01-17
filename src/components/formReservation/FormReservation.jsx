import * as React from "react";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { PhoneNumberInput } from "./PhoneNumberInput";

export function FormReservation() {
  const [inputs, setInputs] = useState({});

  const [howManyPeople, setHowManyPeople] = useState("1");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
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
        <FirstNameInput />
        <LastNameInput />
        <PhoneNumberInput />
        <label>
          Do you want a reservation for how many people?
          <select
            value={howManyPeople}
            onChange={handleChangeReservationNumber}
          >
            {["One", "Two", "Three", "Four", "Five", "Six"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
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
