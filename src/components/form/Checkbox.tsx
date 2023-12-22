import clsx from "clsx";
import { ComponentProps } from "react";

export const Checkbox = (props: ComponentProps<"input">) => {
  return (
    <input
      type="checkbox"
      {...props}
      className={clsx(
        "h-4 w-4",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.className,
      )}
    />
  );
};
