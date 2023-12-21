// import { ComponentProps, ReactNode } from "react";
// import { ListItem } from "./ListItem";
// import clsx from "clsx";
// import { RowDivider } from "./RowDivider";
// import { Check } from "lucide-react";
// import { Col } from "..";

// export const List = (
//   props: ComponentProps<"div"> & {
//     list: ReactNode[];
//     border?: boolean;
//     onItemClick?: (index: number) => void;
//     activeIndex?: number;
//     listItemClass?: string;
//   },
// ) => {
//   return (
//     <Col className={clsx("min-w-[130px] p-1", props.className)}>
//       {props.list.map((item, index) => {
//         const isActive = props.activeIndex === index;
//         return (
//           <div key={index}>
//             {!!index && !!props.border && <RowDivider />}

//             <ListItem
//               disabled={isActive}
//               className={clsx(
//                 "justify-between",
//                 isActive && "bg-blue-50 !text-blue-500",
//                 props.listItemClass,
//               )}
//               onClick={() => props.onItemClick?.(index)}
//             >
//               {item}
//               {isActive && <Check />}
//             </ListItem>
//           </div>
//         );
//       })}
//     </Col>
//   );
// };
