import type { NextPage } from "next";
import {
  AnnouncementWidget,
  AppContainer,
  AppContentContainer,
  Aside,
  ListView,
} from "../components";

const Home: NextPage = () => {
  return (
    <div id="index-module">
      <AppContainer>
        <Aside />
        <AppContentContainer>
          <ListView />
          <ListView />
        </AppContentContainer>
      </AppContainer>
      <AnnouncementWidget />
    </div>
  );
};

export default Home;
