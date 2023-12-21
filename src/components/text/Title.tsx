import clsx from "clsx";
import { ComponentProps } from "react";

export const Title = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("text-2xl font-semibold text-gray-800", props.className)}
    />
  );
};
