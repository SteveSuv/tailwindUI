import clsx from "clsx";
import { ComponentProps } from "react";

export const Button = (
  props: ComponentProps<"button"> & { variant?: "primary" | "" },
) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-2 text-sm font-semibold shadow-sm transition-all",
        props.variant === "primary"
          ? "bg-blue-500 text-white"
          : "border bg-white text-gray-700",
        props.disabled
          ? "!cursor-not-allowed !bg-gray-100 !text-gray-400"
          : "hover:brightness-95 active:scale-95",
        props.className,
      )}
    />
  );
};
