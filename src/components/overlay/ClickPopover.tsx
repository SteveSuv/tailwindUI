import { HoverPopover, PopoverProps } from "./HoverPopover";

export const ClickPopover = (props: PopoverProps) => {
  return <HoverPopover {...props} showDelay={0} trigger="click" />;
};
