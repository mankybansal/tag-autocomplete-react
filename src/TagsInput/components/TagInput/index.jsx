import React, { memo, useState, useCallback, useEffect } from "react";
import * as Styled from "./Styled";

const TagInput = ({ tags, addTag, onChange }) => {
  const [value, setValue] = useState("");

  const handleKeypress = useCallback(
    ({ key }) => {
      if (key === "Enter" && value !== "") {
        addTag(value);
        setValue("");
      }
    },
    [addTag, value]
  );

  // Reset value when tags change
  useEffect(() => {
    setValue("");
    onChange("");
  }, [tags, onChange]);

  const handleChange = useCallback(
    ({ currentTarget }) => {
      setValue(currentTarget.value);
      onChange(currentTarget.value);
    },
    [onChange]
  );

  return (
    <Styled.Input
      onKeyPress={handleKeypress}
      onChange={handleChange}
      value={value}
      placeholder={"type a color..."}
    />
  );
};

export default memo(TagInput);
