import styled from "styled-components";

export const ListViewItem = styled.div`
  --border-opacity: 1;
  padding-bottom: 1.75rem;
  padding-top: 1.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  margin-bottom: 20px;
`;

export const List = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 0.75rem;
`;

export const ListTitle = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ListCount = styled.p`
  --text-opacity: 1;
  --bg-opacity: 1;
  color: rgb(59, 130, 246, var(--text-opacity));
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  font-weight: 700;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: rgb(239 246 255 / var(--bg-opacity));
  display: inline-block;
  border-radius: 0.5rem;
`;
