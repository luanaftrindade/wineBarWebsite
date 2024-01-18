import React, { useState } from "react";

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export function PhoneNumberInput() {
  // declare current state and state setter
  const [phone, setPhone] = useState("");
  const handleChange = ({ target }) => {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
  };

  return (
    <label>
      Enter your phone number:
      <input
        type="number"
        name="phoneNumber"
        value={phone}
        onChange={handleChange}
      />
    </label>
  );
}
