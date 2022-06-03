import { useRecoilValue } from "recoil";
import { AppLogo, MenuLinkItem } from "..";
import { blocksListsAtom } from "../../atoms/blocksAtom";
import { MenuContainer, MenuNavigator } from "./styles";

export default function AppAside() {
  const blocksLists = useRecoilValue(blocksListsAtom);
  return (
    <MenuContainer>
      <MenuNavigator>
        <AppLogo />
        {JSON.stringify(blocksLists)}
        <MenuLinkItem text="Link 1" />
        <MenuLinkItem text="Link 2" />
        <MenuLinkItem text="Link 3" />
      </MenuNavigator>
    </MenuContainer>
  );
}
