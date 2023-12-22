import clsx from "clsx";
import { ComponentProps } from "react";

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className={clsx(
        "rounded-lg border bg-gray-100 p-3 text-sm outline-none ring-blue-300 ring-offset-2 transition-all  focus:bg-transparent focus:shadow-sm focus:ring-1",
        props.disabled ? "cursor-not-allowed" : "hover:bg-transparent",
        props.className,
      )}
    />
  );
};
