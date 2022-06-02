import styled, { css } from "styled-components";

export const MenuNavigator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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

export const MenuLinkItem = styled.div`
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

  &:hover {
    background-color: rgb(243, 244, 246, var(--bg-opacity));
  }
`;
