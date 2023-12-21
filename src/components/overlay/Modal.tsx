import { useEffect, ReactNode, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Portal } from "..";

export const Modal = (props: {
  visible: boolean;
  onHide: () => void;
  children: ReactNode;
}) => {
  const { visible, onHide, children } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handleStopWheel = (e: WheelEvent) => {
    if (!ref.current?.contains(e.target as any)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (visible) {
      window.addEventListener("wheel", handleStopWheel, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener("wheel", handleStopWheel);
    };
  }, [visible]);

  return (
    <Portal>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-200/50 backdrop-blur-md"
            onClick={onHide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="max-h-[90vh] overflow-scroll rounded-xl p-0 shadow-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <div ref={ref}>{children}</div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
