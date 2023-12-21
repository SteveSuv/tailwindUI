import clsx from "clsx";
import { ComponentProps, LegacyRef, forwardRef } from "react";

export const Textarea = forwardRef(
  (props: ComponentProps<"textarea">, ref?: LegacyRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={clsx(
          "rounded-lg border bg-gray-50 p-3 text-sm outline-none ring-blue-300 ring-offset-2 transition-all hover:bg-transparent focus:bg-transparent focus:shadow-sm focus:ring-1",
          props.className,
        )}
      />
    );
  },
);
