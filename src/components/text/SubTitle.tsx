import clsx from "clsx";
import { ComponentProps } from "react";

export const SubTitle = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx("text-xl font-semibold text-gray-700", props.className)}
    />
  );
};
