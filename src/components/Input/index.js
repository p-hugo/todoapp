import React, { useState } from "react";
import PropTypes from "prop-types";
import InputPresenter from "./Input.presenter";
import InputSkin from "./InputSkin";

export default function Input({ handleUpdate }) {
  const [value, setValue] = useState("");
  const [active, setActive] = useState("");

  /**
   * Sends the value to the parent component to handle the update
   * and resets the value of the input.
   */
  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      handleUpdate(value);
      setValue("");
    }
  };

  return (
    <InputSkin active={active}>
      <InputPresenter
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder="I plan to..."
      />
    </InputSkin>
  );
}

Input.propTypes = {
  handleUpdate: PropTypes.func
};
