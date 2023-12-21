import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export const Breadcrumb = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
      {items.map(({ title, href }, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={index}>
            <a
              className={clsx(
                "cursor-pointer hover:text-blue-500 hover:underline",
                isLast && "font-bold text-blue-500",
              )}
              href={href}
            >
              {title}
            </a>
            {!isLast && <ChevronRight size={12} />}
          </Fragment>
        );
      })}
    </div>
  );
};
