import React, { memo, useCallback } from "react";
import * as Styled from "./Styled";

const Tag = ({ removeTag, tag }) => {
  const handleClick = useCallback(() => {
    removeTag(tag);
  }, [removeTag, tag]);

  return (
    <Styled.RootContainer>
      <Styled.Button onClick={handleClick}>&times;</Styled.Button>
      <Styled.TagName>{tag.name}</Styled.TagName>
    </Styled.RootContainer>
  );
};

export default memo(Tag);
