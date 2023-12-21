import clsx from "clsx";
import { ComponentProps } from "react";

export const Col = (props: ComponentProps<"div">) => {
  return (
    <div {...props} className={clsx("flex w-fit flex-col", props.className)} />
  );
};
