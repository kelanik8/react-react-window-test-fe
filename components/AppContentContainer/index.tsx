import { CSSProperties, PropsWithChildren, useRef, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { useRecoilValue } from "recoil";
import { activeBlockAtom } from "../../atoms/activeBlockAtom";
import {
  BLOCK_LIST_DATA,
  INestedTextBlock,
  ITextBlock,
} from "../../data/document";

import { ContentContainer } from "./styles";

const generateItems = (data: ITextBlock[]) => {
  const items: { id: string; orderNumber: string; text: string }[] = [];

  data.forEach((item) => {
    items.push({
      id: item.id,
      orderNumber: item.orderNumber,
      text: item.text,
    });

    item.data?.forEach((nestedItem: INestedTextBlock) => {
      items.push({
        id: nestedItem.id,
        orderNumber: nestedItem.orderNumber,
        text: nestedItem.text,
      });
    });
  });
  return items;
};

const Row = ({
  data,
  index,
  style,
}: {
  index: number;
  style: CSSProperties;
  data: any;
}) => {
  const item = data[index];

  return <div style={style}>{item.orderNumber}</div>;
};

export interface AppContentContainerProps {}

export default function AppContentContainer({
  children,
  ...props
}: PropsWithChildren<AppContentContainerProps>) {
  const activeBlock = useRecoilValue(activeBlockAtom);

  const listRef = useRef<any>();

  const itemData = generateItems(BLOCK_LIST_DATA);

  useEffect(() => {
    if (activeBlock) {
      scrollTo(parseInt(activeBlock));
    }
  }, [activeBlock]);

  const scrollTo = (to: number) => {
    listRef.current.scrollToItem(to, "smart");
  };

  return (
    <ContentContainer>
      <List
        className="List"
        height={850}
        itemCount={itemData.length}
        itemData={itemData}
        itemSize={35}
        ref={listRef}
        width={"100%"}>
        {Row}
      </List>
    </ContentContainer>
  );
}
