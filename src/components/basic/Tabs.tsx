import { ComponentProps } from "react";
import { Row } from "..";
import clsx from "clsx";

export const Tabs = (props: ComponentProps<"div">) => {
  return (
    <Row
      {...props}
      className={clsx(
        "gap-1 rounded-lg border bg-gray-50 p-1",
        props.className,
      )}
    />
  );
};
