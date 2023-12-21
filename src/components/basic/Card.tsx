import clsx from "clsx";
import { ComponentProps } from "react";

export const Card = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("rounded-lg border bg-white", props.className)}
    />
  );
};
