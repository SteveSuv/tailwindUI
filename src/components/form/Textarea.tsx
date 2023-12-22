import clsx from "clsx";
import { ComponentProps } from "react";

export const Textarea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea
      {...props}
      className={clsx(
        "rounded-lg border bg-gray-50 p-3 text-sm outline-none ring-blue-300 ring-offset-2 transition-all hover:bg-transparent focus:bg-transparent focus:shadow-sm focus:ring-1",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.className,
      )}
    />
  );
};
