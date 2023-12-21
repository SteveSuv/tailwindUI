import clsx from "clsx";
import { ComponentProps } from "react";

export const Overlay = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        "fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-200/50 backdrop-blur-md",
        props.className,
      )}
    />
  );
};
