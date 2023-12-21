import clsx from "clsx";
import { ComponentProps } from "react";

export const RowDivider = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("my-1 h-[1px] bg-gray-200", props.className)}
    />
  );
};
