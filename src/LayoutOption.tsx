import { FC } from "react";
import { LayoutType } from "./types";

export const LayoutOption: FC<{
  type: LayoutType;
}> = (props) => {
  const Block1 = (props: { width?: string }) => (
    <div
      className={`bg-pink-100 h-10`}
      style={{ width: props.width || "40px" }}
    ></div>
  );
  const Block2 = (props: { width?: string }) => (
    <div
      className={`bg-blue-100 h-10`}
      style={{ width: props.width || "40px" }}
    ></div>
  );
  const Block3 = (props: { width?: string }) => (
    <div
      className={`bg-yellow-100 h-10`}
      style={{ width: props.width || "40px" }}
    ></div>
  );

  switch (props.type) {
    case "111":
      return (
        <div className="flex">
          <Block1></Block1>
          <Block2></Block2>
          <Block3></Block3>
        </div>
      );
    case "21":
      return (
        <div>
          <div className="flex">
            <Block1></Block1>
            <Block2></Block2>
          </div>
          <div className="flex">
            <Block3 width="100%"></Block3>
          </div>
        </div>
      );
    case "12":
      return (
        <div>
          <div className="flex">
            <Block1 width="100%"></Block1>
          </div>
          <div className="flex">
            <Block2></Block2>
            <Block3></Block3>
          </div>
        </div>
      );
    case "3":
      return (
        <div className="flex">
          <Block1></Block1>
          <Block2></Block2>
          <Block3></Block3>
        </div>
      );
  }
};
