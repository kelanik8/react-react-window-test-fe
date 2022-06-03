import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { blocksListsAtom } from "../atoms/blocksAtom";
import {
  AnnouncementWidget,
  AppContainer,
  AppContentContainer,
  Aside,
  ErrorBoundary,
  ListView,
} from "../components";
import { BLOCK_LIST_DATA } from "../data/document";

const Home: NextPage = () => {
  const [_, setBlockList] = useRecoilState(blocksListsAtom);
  setBlockList(BLOCK_LIST_DATA);

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
