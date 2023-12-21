// import { ReactNode } from "react";
// import { ClickPopover } from "./ClickPopover";
// import { ChevronDown } from "lucide-react";
// import clsx from "clsx";
// import { Card, List, Row } from "..";

// type IListItem = { content: ReactNode; disabled?: boolean };

// export const Dropdown = (props: {
//   list: IListItem[];
//   className?: string;
//   onItemClick?: (item: IListItem, index: number) => void;
//   activeIndex?: number;
// }) => {
//   const { list, onItemClick, activeIndex = 0, className } = props;
//   const activeItem = list[activeIndex];

//   return (
//     <ClickPopover
//       placement="bottom-start"
//       render={(tp) => (
//         <Card>
//           <List
//             className="gap-1"
//             activeIndex={activeIndex}
//             onItemClick={(index) => {
//               onItemClick?.(list[index], index);
//               tp.hide();
//             }}
//             list={list.map(({ content }, index) => {
//               return <div key={index}>{content}</div>;
//             })}
//           />
//         </Card>
//       )}
//     >
//       <Row
//         className={clsx(
//           "cursor-pointer gap-1 rounded-lg border bg-gray-100 px-2 py-1 text-sm text-gray-700 transition-all hover:border-blue-300",
//           className,
//         )}
//         aria-expanded
//         onClick={(e) => e.preventDefault()}
//       >
//         {activeItem.content} <ChevronDown />
//       </Row>
//     </ClickPopover>
//   );
// };
