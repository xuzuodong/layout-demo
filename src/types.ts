/**
 * 共 2 种排列方向, 用于布局设置中的排列方向选择
 */
export const LAYOUT_DIRECTION = [
  "horizontal", // 排列方向为水平, 即内部视图横向排列
  "vertical", // 排列方向为垂直, 即内部视图纵向排列
] as const;

export type LayoutDirection = typeof LAYOUT_DIRECTION[number];

/**
 * 共 4 种布局类型
 *
 * 对于每种布局类型, 使用由若干位数字组成的字符串表示,
 * 字符串长度表示视图的排数, 数字的大小表示该排的内部视图数
 *
 * 该表示方法的好处是可拓展,
 * 后续可以通过增加数组元素数量来添加更多排,
 * 也可以增加数字大小来添加更多内部视图,
 * 不过本 Demo 在视图层并未实现可扩展的特性
 */
export const LAYOUT_TYPE = [
  "111", // 三排布局, 每排显示一个内部视图
  "21", // 两排布局, 第一排显示两个内部视图, 第二排显示一个内部视图
  "12", // 同上, 第一排显示一个内部视图, 第二排显示两个内部视图
  "3", // 仅一排布局, 该排内部显示全部三个视图
] as const;

export type LayoutType = typeof LAYOUT_TYPE[number];

/**
 * 用于存储布局设置的数据结构,
 * 由布局类型 (type) , 排列顺序 (order) , 方向 (direction) 确定
 */
export interface LayoutSettings {
  direction: LayoutDirection;
  type: LayoutType;
  order: ("Text" | "Image" | "List")[];
}

export const blockBgColors = {
  Text: "bg-pink-100",
  Image: "bg-blue-100",
  List: "bg-yellow-100",
};
