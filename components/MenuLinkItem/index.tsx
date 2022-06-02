import { LinkItem } from "./styles";

export interface MenuLinkItemProps {
  text: string;
}

export default function MenuLinkItem({ text }: MenuLinkItemProps) {
  return <LinkItem>{text}</LinkItem>;
}
