import clsx from "clsx";
import { Center } from "..";
import { ComponentProps } from "react";

export const TabItem = (
  props: ComponentProps<"div"> & { active?: boolean },
) => {
  return (
    <Center
      {...props}
      className={clsx(
        "h-8 cursor-pointer rounded-md border px-3 transition-all",
        props.active
          ? "border-gray-200 bg-white text-blue-500 shadow-sm"
          : "border-transparent text-gray-600 hover:bg-gray-100",
        props.className,
      )}
    />
  );
};
