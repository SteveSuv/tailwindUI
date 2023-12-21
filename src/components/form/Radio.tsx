import { ComponentProps } from "react";

export const Radio = (props: ComponentProps<"input">) => {
  return <input type="radio" {...props} />;
};
