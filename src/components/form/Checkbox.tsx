import { ComponentProps } from "react";

export const Checkbox = (props: ComponentProps<"input">) => {
  return <input type="checkbox" defaultValue="false" {...props} />;
};
