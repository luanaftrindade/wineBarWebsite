import React, { useState } from "react";

// regex to match numbers between 1 and 9 digits 
const validPhoneNumber = /^\d{1,9}$/;

export function PhoneNumberInput() {
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
