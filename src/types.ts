export const LAYOUT_TYPE = ['111', '21', '12', '3'] as const;

export type LayoutType = typeof LAYOUT_TYPE[number];

export interface LayoutSettings {
    type: LayoutType;
    order: ("Text" | "Image" | "List")[];
}

export const blockBgColors = {
    Text: "bg-pink-100",
    Image: "bg-blue-100",
    List: "bg-yellow-100",
}