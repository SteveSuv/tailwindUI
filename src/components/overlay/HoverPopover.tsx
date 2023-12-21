import Tippy from "@tippyjs/react/headless";
import { ReactNode, useState } from "react";
import { Instance, Placement } from "tippy.js";
import { useSpring, motion } from "framer-motion";
import { isClient } from "../utils";

const TippyTrigger = {
  hover: "mouseenter focus",
  click: "click",
  focus: "focusin",
  manual: "manual",
};

export type PopoverProps = {
  children: ReactNode;
  render: (tp: Instance) => ReactNode;
  placement?: Placement;
  interactive?: boolean;
  trigger?: keyof typeof TippyTrigger;
  showDelay?: number;
  hideDelay?: number;
};

export const HoverPopover = (props: PopoverProps) => {
  const {
    children,
    render,
    placement = "bottom",
    interactive = true,
    trigger = TippyTrigger.hover,
    showDelay = 150,
    hideDelay = 0,
  } = props;

  const [instance, setInstance] = useState<Instance>();

  const opacity = useSpring(0);
  const y = useSpring(1);

  if (!isClient) return null;

  return (
    <Tippy
      animation
      delay={[showDelay, hideDelay]}
      onCreate={setInstance}
      trigger={trigger}
      interactive={interactive}
      placement={placement}
      onMount={() => {
        y.set(0);
        opacity.set(1);
      }}
      onHide={(tp) => {
        const cleanup = y.on("change", (value) => {
          if (value <= 1) {
            cleanup();
            tp.unmount();
          }
        });
        y.set(1);
        opacity.set(0);
      }}
      render={(attr) => {
        return (
          <motion.div style={{ y, opacity }} {...attr}>
            {render(instance!)}
          </motion.div>
        );
      }}
      zIndex={9}
    >
      <div>{children}</div>
    </Tippy>
  );
};
