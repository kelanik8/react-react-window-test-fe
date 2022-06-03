import { useRecoilValue } from "recoil";
import { AppLogo, MenuLinkItem } from "..";
import { blocksListsAtom } from "../../atoms/blocksAtom";
import { ITextBlock } from "../../data/document";
import { MenuContainer, MenuNavigator } from "./styles";

export default function AppAside() {
  const textBlocks = useRecoilValue(blocksListsAtom);
  return (
    <MenuContainer>
      <MenuNavigator>
        <AppLogo />
        {textBlocks.map((block: ITextBlock) => (
          <MenuLinkItem
            key={`text-block-${block.id}`}
            text={`${block.orderNumber} ${block.text}`}
          />
        ))}
      </MenuNavigator>
    </MenuContainer>
  );
}
