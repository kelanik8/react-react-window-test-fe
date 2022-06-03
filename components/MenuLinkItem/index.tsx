import { LinkItem } from "./styles";

export interface MenuLinkItemProps {
  text: string;
  id: string;
  menuClick: Function;
  active: boolean;
}

export default function MenuLinkItem({
  text,
  id,
  menuClick,
  active,
}: MenuLinkItemProps) {
  const onMenuClick = () => {
    menuClick(id);
  };

  return (
    <LinkItem isActive={active} onClick={onMenuClick}>
      {text}
    </LinkItem>
  );
}
