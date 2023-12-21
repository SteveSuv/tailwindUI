import { useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Portal } from "..";

export const Drawer = (props: {
  visible: boolean;
  onHide: () => void;
  children: ReactNode;
}) => {
  const { visible, onHide, children } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <Portal>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-10 flex h-screen w-screen items-start justify-center bg-gray-200/50 backdrop-blur-md"
            onClick={onHide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="z-10 w-screen overflow-scroll rounded-none"
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
