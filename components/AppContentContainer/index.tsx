import { CSSProperties, PropsWithChildren, useRef } from "react";
import { ContentContainer } from "./styles";

import { FixedSizeList as List } from "react-window";
import { ListView } from "..";

const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

export interface AppContentContainerProps {}

export default function AppContentContainer({
  children,
  ...props
}: PropsWithChildren<AppContentContainerProps>) {
  const listRef = useRef<any>();

  const scrollToRow200Auto = () => {
    listRef.current.scrollToItem(200);
  };
  const scrollToRow250Smart = () => {
    listRef.current.scrollToItem(250, "smart");
  };
  const scrollToRow300Center = () => {
    listRef.current.scrollToItem(300, "center");
  };

  return (
    <ContentContainer>
      <div>
        <button className="ExampleButton" onClick={scrollToRow200Auto}>
          Scroll to row 200 (align: auto)
        </button>
        <button className="ExampleButton" onClick={scrollToRow250Smart}>
          Scroll to row 250 (align: smart)
        </button>
        <button className="ExampleButton" onClick={scrollToRow300Center}>
          Scroll to row 300 (align: center)
        </button>
      </div>
      <List
        className="List"
        height={850}
        itemCount={1000}
        itemSize={35}
        ref={listRef}
        width={"100%"}>
        {Row}
      </List>
    </ContentContainer>
  );
}
