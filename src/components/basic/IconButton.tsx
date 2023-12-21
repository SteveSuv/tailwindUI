import clsx from "clsx";
import { ComponentProps } from "react";

export const IconButton = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        "cursor-pointer rounded-lg p-2 text-gray-500 ring-gray-200 transition-all hover:bg-gray-100 hover:ring-1 active:scale-95",
        props.className,
      )}
    />
  );
};
