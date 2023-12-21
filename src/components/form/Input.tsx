import clsx from "clsx";
import { ComponentProps, LegacyRef, forwardRef } from "react";

export const Input = forwardRef(
  (props: ComponentProps<"input">, ref?: LegacyRef<HTMLInputElement>) => {
    return (
      <input
        {...props}
        ref={ref}
        className={clsx(
          "rounded-lg border bg-gray-100 p-3 text-sm outline-none ring-blue-300 ring-offset-2 transition-all  focus:bg-transparent focus:shadow-sm focus:ring-1",
          props.disabled ? "cursor-not-allowed" : "hover:bg-transparent",
          props.className,
        )}
      />
    );
  },
);
