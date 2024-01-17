export function LastNameInput({ value, onChange}) {
    return (
      <label>
        Enter your last name:
        <input
          type="text"
          name="lastName"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }