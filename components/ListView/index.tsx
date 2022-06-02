import { List, ListCount, ListTitle, ListViewItem } from "./styles";

export default function ListView() {
  return (
    <ListViewItem>
      <List>
        <ListCount>1.1</ListCount>
        <ListTitle>Title</ListTitle>
      </List>
      <List>
        <ListCount>1.1</ListCount>
        <ListTitle>Title</ListTitle>
      </List>
      <List>
        <ListCount>1.1</ListCount>
        <ListTitle>Title</ListTitle>
      </List>
    </ListViewItem>
  );
}
