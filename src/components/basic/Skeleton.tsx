import clsx from "clsx";
import { ComponentProps } from "react";

export const Skeleton = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        "h-10 w-10 animate-pulse rounded-full bg-gray-200",
        props.className,
      )}
    />
  );
};
