import clsx from "clsx";
import { ComponentProps } from "react";

export const Grid = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("grid grid-cols-4 gap-4", props.className)}
    />
  );
};
