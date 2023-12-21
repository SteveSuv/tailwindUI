import clsx from "clsx";
import { Row } from "..";

export const Switch = (props: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  const { checked, onChange } = props;

  return (
    <Row
      className="relative cursor-pointer select-none rounded-full shadow-sm"
      onClick={() => {
        onChange(!checked);
      }}
    >
      <div
        className={clsx(
          "h-6 w-12 rounded-full shadow-inner transition-all",
          checked ? "bg-blue-400" : "bg-gray-200",
        )}
      />
      <Row
        className={clsx(
          "absolute left-0 top-0 h-6 justify-end transition-all",
          checked ? "w-12" : "w-6",
        )}
      >
        <div className="h-6 w-6 rounded-full bg-white shadow" />
      </Row>
    </Row>
  );
};
