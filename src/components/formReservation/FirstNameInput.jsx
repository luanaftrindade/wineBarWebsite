export function FirstNameInput({ value, onChange}) {
    return (
      <label>
        Enter your first name:
        <input
          type="text"
          name="firstName"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }