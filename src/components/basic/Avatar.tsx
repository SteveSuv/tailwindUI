import { ComponentProps } from "react";
import clsx from "clsx";
import { Center } from "..";

export const Avatar = (
  props: ComponentProps<"div"> & { name?: string; src?: string | null },
) => {
  const { name = "", src = "" } = props;

  return (
    <Center
      className={clsx(
        "h-9 w-9 cursor-pointer overflow-hidden rounded-lg bg-gray-100 hover:brightness-95",
        props.onClick && "active:scale-95",
        props.className,
      )}
    >
      {src ? (
        <img className="h-full w-full" src={src} title={name} />
      ) : (
        <Center className="h-full w-full bg-blue-50 uppercase text-blue-500">
          {name.slice(-2)}
        </Center>
      )}
    </Center>
  );
};
