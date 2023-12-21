import clsx from "clsx";
import { ComponentProps } from "react";

export const ListItem = (
  props: ComponentProps<"div"> & { disabled?: boolean },
) => {
  return (
    <div
      {...props}
      className={clsx(
        "flex items-center rounded-lg px-3 py-2 text-gray-800 transition-all",
        props.disabled
          ? "cursor-not-allowed"
          : "cursor-pointer hover:bg-gray-100",
        props.className,
      )}
    />
  );
};
