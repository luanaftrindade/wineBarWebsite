import * as React from "react";
import { useState } from "react";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { NumberOfPeopleSelect } from "./NumberOfPeopleSelect";
import { DateTimeComponent } from "./DateTimeComponent";

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
        <FirstNameInput value={inputs.firstName} onChange={handleChange} />
        <LastNameInput value={inputs.LastName} onChange={handleChange} />
        <PhoneNumberInput value={inputs.phoneNumber} onChange={handleChange} />
        <NumberOfPeopleSelect
          value={howManyPeople}
          onChange={handleChangeReservationNumber}
        />

        <DateTimeComponent />
        <input type="submit" />
      </form>
    </div>
  );
}
