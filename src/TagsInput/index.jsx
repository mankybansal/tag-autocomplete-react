import React, { useCallback, useState } from "react";

import * as Styled from "./Styled";
import colors from "../colors.json";

import TagsContainer from "./components/TagsContainer";
import TagInput from "./components/TagInput";
import AutoCompleteOptions from "./components/AutoCompleteOptions";

const TagsInput = () => {
  const [tags, setTags] = useState([{ name: "foo" }, { name: "bar" }]);
  const [options, setOptions] = useState([]);

  const addTag = useCallback(
    (value) => {
      const existingTag = tags.find(
        ({ name }) => name.toLowerCase() === value.toLowerCase()
      );

      if (existingTag) {
        return;
      }

      const newTag = { name: value };
      setTags([...tags, newTag]);
    },
    [tags]
  );

  const removeTag = useCallback(
    ({ name: removeName }) => {
      const existingTagIdx = tags.findIndex(
        ({ name }) => name.toLowerCase() === removeName.toLowerCase()
      );

      const newTags = [...tags];
      newTags.splice(existingTagIdx, 1);

      setTags(newTags);
    },
    [tags]
  );

  const handleChange = useCallback(
    (value) => {
      if (value === "") {
        setOptions([]);
        return;
      }
      const matchedColors = colors.filter((color) => {
        const colorName = color.name.toLowerCase();
        const isInTags = tags.find((tag) => tag.name === colorName);
        const hasValue = colorName.includes(value.toLowerCase());
        return !isInTags && hasValue;
      });
      setOptions(matchedColors);
    },
    [tags]
  );

  return (
    <Styled.RootContainer>
      <Styled.TagInputContainer>
        <TagsContainer removeTag={removeTag} tags={tags} />
        <TagInput tags={tags} onChange={handleChange} addTag={addTag} />
      </Styled.TagInputContainer>
      <AutoCompleteOptions addTag={addTag} options={options} />
    </Styled.RootContainer>
  );
};

export default TagsInput;
