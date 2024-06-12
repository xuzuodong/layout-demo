/** 
 * 共 4 种布局类型
 * 
 * 对于每种布局类型, 使用由若干位数字组成的字符串表示,
 * 字符串长度表示视图的行数, 数字的大小表示该行的行内视图数
 * 
 * 该表示方法的好处是可拓展,
 * 后续可以通过增加数组元素数量来添加更多行,
 * 也可以增加数字大小来添加更多行内视图,
 * 不过本 Demo 在视图层并未实现可扩展的特性
 */
export const LAYOUT_TYPE = [
  "111", // 三行布局, 每行显示一个行内视图
  "21", // 两行布局, 第一行显示两个行内视图, 第二行显示一个行内视图
  "12", // 同上, 第一行显示一个行内视图, 第二行显示两个行内视图
  "3", // 仅一行布局, 该行内显示全部三个视图
] as const;

export type LayoutType = typeof LAYOUT_TYPE[number];

/**
 * 用于存储布局设置的数据结构,
 * 由布局类型 (type) 和排列顺序 (order) 确定
 */
export interface LayoutSettings {
  type: LayoutType;
  order: ("Text" | "Image" | "List")[];
}

export const blockBgColors = {
  Text: "bg-pink-100",
  Image: "bg-blue-100",
  List: "bg-yellow-100",
};
