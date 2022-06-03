import { CSSProperties } from "react";
import { ListCount } from "./styles";

export default function ListView({
  index,
  style,
}: {
  index: number;
  style: CSSProperties;
}) {
  return (
    <ListCount
      className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      style={style}>
      <div>Row {index}</div>
    </ListCount>
  );
}
