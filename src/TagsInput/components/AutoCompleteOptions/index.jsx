import React, { memo } from "react";
import * as Styled from "./Styled";

const AutoCompleteOptions = ({ options, addTag }) => {
  if (options.length === 0) {
    return <></>;
  }

  return (
    <Styled.RootContainer>
      {options.map(({ hex, name }) => (
        <Styled.Option key={hex} onClick={() => addTag(name.toLowerCase())}>
          {name.toLowerCase()}
        </Styled.Option>
      ))}
    </Styled.RootContainer>
  );
};

export default memo(AutoCompleteOptions);
