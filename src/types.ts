export const LAYOUT_TYPE = ['111', '21', '12', '3'] as const;

export type LayoutType = typeof LAYOUT_TYPE[number];