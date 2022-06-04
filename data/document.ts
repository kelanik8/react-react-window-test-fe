export interface ITextBlock {
  id: string;
  orderNumber: string;
  type: string;
  text: string;
  data?: INestedTextBlock[];
}

export interface INestedTextBlock {
  id: string;
  orderNumber: string;
  type: string;
  text: string;
}

export const BLOCK_LIST_DATA: ITextBlock[] = Array(30)
  .fill({})
  .map((_, index) => createTextBlock({ id: index }));

function createTextBlock({ id }: { id: number }) {
  return {
    id: `${id * 300}`,
    orderNumber: `${id + 1}.`,
    type: "title-block",
    text: "Lorem ipsum",
    data: Array(300)
      .fill({})
      .map((_, index) =>
        createNestedTextBlock({ parentId: id + 1, itemIndex: index })
      ),
  };
}

function createNestedTextBlock({
  parentId,
  itemIndex,
}: {
  parentId: string | number;
  itemIndex: string | number;
}) {
  return {
    id: `item-${parentId}-${itemIndex}`,
    orderNumber: `${parentId}.${itemIndex}`,
    type: "text-block",
    text: Math.random().toString(36).substr(2),
  };
}
