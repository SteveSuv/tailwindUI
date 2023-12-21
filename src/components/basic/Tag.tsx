import clsx from "clsx";
import { ComponentProps } from "react";

export const Tag = (props: ComponentProps<"span"> & { active?: boolean }) => {
  return (
    <span
      {...props}
      className={clsx(
        "inline-flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 text-xs font-medium",
        props.active ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500",
        props.className,
      )}
    />
  );
};
