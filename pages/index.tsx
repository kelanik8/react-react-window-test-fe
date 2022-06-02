import type { NextPage } from "next";
import {
  AnnouncementWidget,
  AppContainer,
  AppContentContainer,
  Aside,
  ErrorBoundary,
  ListView,
} from "../components";

const Home: NextPage = () => {
  return (
    <div id="index-module">
      <AppContainer>
        <ErrorBoundary>
          <Aside />
        </ErrorBoundary>
        <ErrorBoundary>
          <AppContentContainer>
            <ListView />
            <ListView />
          </AppContentContainer>
        </ErrorBoundary>
      </AppContainer>
      <AnnouncementWidget />
    </div>
  );
};

export default Home;
