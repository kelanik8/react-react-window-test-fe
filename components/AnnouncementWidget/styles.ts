import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
`;

export const Announcement = styled.div`
  --bg-opacity: 1;
  --text-opacity: 1;
  color: rgb(255, 255, 255, var(--text-opacity));
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: rgb(79, 70, 229, var(--bg-opacity));
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  cursor: pointer;

  span {
    color: rgb(255, 255, 255, var(--text-opacity));
  }
`;
