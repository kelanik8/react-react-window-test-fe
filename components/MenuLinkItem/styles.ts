import styled from "styled-components";

export const LinkItem = styled.div`
  --text-opacity: 1;
  --bg-opacity: 1;
  color: rgb(107, 114, 128, var(--text-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
  border: none;
  background: none;

  &:hover {
    background-color: rgb(243, 244, 246, var(--bg-opacity));
  }
`;
