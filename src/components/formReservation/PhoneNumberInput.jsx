export function PhoneNumberInput({ value, onChange }) {
  return (
    <label>
      Enter your phone number:
      <input
        type="number"
        name="phoneNumber"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
