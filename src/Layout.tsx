import {
  Attributes,
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { LayoutDirection, LayoutType } from "./types";

const ChildrenWithClassName = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        className: `${
          child.props.className ? child.props.className + " " : ""
        }${className}`,
      } as Partial<unknown> & Attributes); // Add the type assertion here
    }
    return child;
  });
};

const FilledSizeBlock = ({ children }: PropsWithChildren) => (
  <ChildrenWithClassName className="w-full h-full">
    {children}
  </ChildrenWithClassName>
);

const Flex1Block = ({ children }: PropsWithChildren) => (
  <ChildrenWithClassName className="flex-1">{children}</ChildrenWithClassName>
);

export const Layout: FC<{
  type: LayoutType;
  direction: LayoutDirection;
  children: [ReactNode, ReactNode, ReactNode];
  containerClassName?: string;
}> = ({ type, direction, children, containerClassName }) => {
  const Layouts: Record<LayoutType[number], ReactNode> = {
    "111": (
      <>
        <Flex1Block>{children[0]}</Flex1Block>
        <Flex1Block>{children[1]}</Flex1Block>
        <Flex1Block>{children[2]}</Flex1Block>
      </>
    ),
    "21": (
      <>
        <div
          className={`flex flex-1 ${
            direction === "horizontal" ? "flex-col sm:flex-row" : "flex-col"
          }`}
        >
          <Flex1Block>{children[0]}</Flex1Block>
          <Flex1Block>{children[1]}</Flex1Block>
        </div>
        <div className="flex-1">
          <FilledSizeBlock>{children[2]}</FilledSizeBlock>
        </div>
      </>
    ),
    "12": (
      <>
        <div className="flex-1">
          <FilledSizeBlock>{children[0]}</FilledSizeBlock>
        </div>
        <div
          className={`flex flex-1 ${
            direction === "horizontal" ? "flex-col sm:flex-row" : "flex-col"
          }`}
        >
          <Flex1Block>{children[1]}</Flex1Block>
          <Flex1Block>{children[2]}</Flex1Block>
        </div>
      </>
    ),
    "3": (
      <>
        <div
          className={`flex flex-1 ${
            direction === "horizontal" ? "flex-col sm:flex-row" : "flex-col"
          }`}
        >
          <Flex1Block>{children[0]}</Flex1Block>
          <Flex1Block>{children[1]}</Flex1Block>
          <Flex1Block>{children[2]}</Flex1Block>
        </div>
      </>
    ),
  };
  return (
    <div
      className={`flex ${
        direction === "horizontal" ? "flex-col" : "flex-col sm:flex-row"
      } ${containerClassName || ""}`}
    >
      {Layouts[type]}
    </div>
  );
};
