import { AppLogo, MenuLinkItem } from "..";
import { MenuContainer, MenuNavigator } from "./styles";

export default function AppAside() {
  return (
    <MenuContainer>
      <MenuNavigator>
        <AppLogo />
        <MenuLinkItem text="Link 1" />
        <MenuLinkItem text="Link 2" />
        <MenuLinkItem text="Link 3" />
      </MenuNavigator>
    </MenuContainer>
  );
}
