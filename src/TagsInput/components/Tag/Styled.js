import styled from "@emotion/styled";

export const RootContainer = styled.div`
  margin-right: 8px;
  padding: 2px 4px;
  border: 3px solid black;
  display: flex;
  background: white;

  box-shadow: 4px 2px 0px rgba(0, 0, 0, 1);
`;

export const Button = styled.button`
  margin-right: 2px;
  border: none;
  background: none;
  outline: none;
  font-weight: 700;
  font-size: 24px;
  margin-top: 2px;
  line-height: 16px;
`;

export const TagName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px;
  overflow: hidden;
  transition: all ease 0.2s;
  font-weight: 600;

  :hover {
    max-width: 300px;
  }
`;
