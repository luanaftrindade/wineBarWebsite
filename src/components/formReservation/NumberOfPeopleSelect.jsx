export function NumberOfPeopleSelect({ value, onChange }) {
  return (
    <label>
      Do you want a reservation for how many people?
      <select
        value={value}
        onChange={onChange}
      >
        {["One", "Two", "Three", "Four", "Five", "Six"].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}