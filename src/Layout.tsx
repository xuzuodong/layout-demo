import {
  Attributes,
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { LayoutType } from "./types";

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

const FullWidthBlock = ({ children }: PropsWithChildren) => (
  <ChildrenWithClassName className="w-full">{children}</ChildrenWithClassName>
);

const Flex1Block = ({ children }: PropsWithChildren) => (
  <ChildrenWithClassName className="flex-1">{children}</ChildrenWithClassName>
);

export const Layout: FC<{
  type: LayoutType;
  children: [ReactNode, ReactNode, ReactNode];
  className?: string;
}> = ({ type, children, className }) => {
  const Layouts: Record<LayoutType[number], ReactNode> = {
    "111": (
      <div className={className}>
        <Flex1Block>{children[0]}</Flex1Block>
        <Flex1Block>{children[1]}</Flex1Block>
        <Flex1Block>{children[2]}</Flex1Block>
      </div>
    ),
    "21": (
      <div className={className}>
        <div className="flex">
          <Flex1Block>{children[0]}</Flex1Block>
          <Flex1Block>{children[1]}</Flex1Block>
        </div>
        <div className="flex">
          <FullWidthBlock>{children[2]}</FullWidthBlock>
        </div>
      </div>
    ),
    "12": (
      <div className={className}>
        <div className="flex">
          <FullWidthBlock>{children[0]}</FullWidthBlock>
        </div>
        <div className="flex">
          <Flex1Block>{children[1]}</Flex1Block>
          <Flex1Block>{children[2]}</Flex1Block>
        </div>
      </div>
    ),
    "3": (
      <div className={`flex ${className}`}>
        <Flex1Block>{children[0]}</Flex1Block>
        <Flex1Block>{children[1]}</Flex1Block>
        <Flex1Block>{children[2]}</Flex1Block>
      </div>
    ),
  };

  return Layouts[type];
};
