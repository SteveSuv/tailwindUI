import { ReactNode } from "react";
import { HoverPopover } from "./HoverPopover";

export const Tooltip = ({
  content,
  children,
}: {
  content?: ReactNode;
  children: ReactNode;
}) => {
  if (!content) return <>{children}</>;

  return (
    <HoverPopover
      placement="top"
      interactive={false}
      render={() => (
        <div className="rounded-lg bg-gray-800/90 px-2 py-1 text-white shadow-md backdrop-blur-sm">
          {content}
        </div>
      )}
    >
      {children}
    </HoverPopover>
  );
};
