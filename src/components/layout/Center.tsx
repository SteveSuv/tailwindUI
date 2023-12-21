import clsx from "clsx";
import { ComponentProps } from "react";

export const Center = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        "flex flex-col items-center justify-center",
        props.className,
      )}
    />
  );
};
