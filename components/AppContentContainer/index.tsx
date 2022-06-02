import { PropsWithChildren } from "react";
import { ContentContainer } from "./styles";

export interface AppContentContainerProps {}

export default function AppContentContainer({
  children,
  ...props
}: PropsWithChildren<AppContentContainerProps>) {
  return <ContentContainer>{children}</ContentContainer>;
}
