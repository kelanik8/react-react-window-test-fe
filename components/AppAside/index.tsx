import { useRecoilState, useRecoilValue } from "recoil";
import { AppLogo, MenuLinkItem } from "..";
import { activeBlockAtom } from "../../atoms/activeBlockAtom";
import { blocksListsAtom } from "../../atoms/blocksAtom";
import { ITextBlock } from "../../data/document";
import { MenuContainer, MenuNavigator } from "./styles";

export default function AppAside() {
  const [activeBlock, setActiveBlock] = useRecoilState(activeBlockAtom);
  const textBlocks = useRecoilValue(blocksListsAtom);

  const onMenuClick = (id: string) => {
    console.log(id);
    setActiveBlock(id);
  };

  return (
    <MenuContainer>
      <MenuNavigator>
        <AppLogo />
        {textBlocks.map((block: ITextBlock) => (
          <>
            <MenuLinkItem
              key={`text-block-${block.id}`}
              text={`${block.orderNumber} ${block.text}`}
              menuClick={onMenuClick}
              id={block.id}
              active={block.id === activeBlock}
            />
          </>
        ))}
      </MenuNavigator>
    </MenuContainer>
  );
}
