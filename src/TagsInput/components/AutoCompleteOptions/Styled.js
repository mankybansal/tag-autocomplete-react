import styled from "@emotion/styled";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  max-height: 200px;
  overflow-y: scroll;
  position: fixed;
  margin-top: 50px;
  background: white;
  width: 500px;
`;

export const Option = styled.div`
  padding: 2px 8px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;

  :hover {
    background: #eee;
  }
`;
