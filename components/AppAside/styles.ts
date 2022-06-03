import styled, { css } from "styled-components";

export const MenuNavigator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 25px;
  overflow-y: auto;
`;

export const MenuContainer = styled.div`
  border: 1px solid #e5e7eb;
  --bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--bg-opacity));
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  display: flex;
  width: 18%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
`;
