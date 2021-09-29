import React from "react";
// import classes from "./MySelect.module.css";

const MySelect = ({ disabled, options, defaultValue, value, onChange }) => {
  return (
    <select
      disabled={disabled}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(it =>
        <option key={it.value} value={it.value}>
          {it.name}
        </option>
      )}
    </select>
  )
};

export default MySelect;
