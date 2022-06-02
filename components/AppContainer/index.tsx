import { PropsWithChildren } from "react";
import { Container } from "./styles";

export interface AppContainerProps {}

export default function AppContainer({
  children,
  ...props
}: PropsWithChildren<AppContainerProps>) {
  return <Container>{children}</Container>;
}
