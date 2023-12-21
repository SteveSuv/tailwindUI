import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { isClient } from "../utils";

export const Portal = ({ children }: PropsWithChildren) => {
  return isClient ? createPortal(children, document.body) : null;
};
