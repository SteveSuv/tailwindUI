import clsx from "clsx";
import { ComponentProps } from "react";

export const Row = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("flex h-full items-center", props.className)}
    />
  );
};
