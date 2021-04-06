import React, { memo } from "react";
import * as Styled from "./Styled";
import Tag from "../Tag";

const TagsContainer = ({ tags, removeTag }) => (
  <Styled.RootContainer>
    {tags.map((tag, i) => (
      <Tag removeTag={removeTag} key={`tag-${i}`} tag={tag} />
    ))}
  </Styled.RootContainer>
);

export default memo(TagsContainer);
