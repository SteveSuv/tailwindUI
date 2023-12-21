import clsx from "clsx";
import { ComponentProps } from "react";

export const ColDivider = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("mx-1 w-[1px] bg-gray-200", props.className)}
    />
  );
};
