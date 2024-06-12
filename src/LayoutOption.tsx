import { FC } from "react";
import { LayoutType } from "./types";
import { Layout } from "./Layout";

export const LayoutOption: FC<{
  type: LayoutType;
}> = ({ type }) => (
  <Layout type={type}>
    <div className="bg-gray-100 min-h-10 min-w-10"></div>
    <div className="bg-gray-200 min-h-10 min-w-10"></div>
    <div className="bg-gray-300 min-h-10 min-w-10"></div>
  </Layout>
);
