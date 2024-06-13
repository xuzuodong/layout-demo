import { ReactNode, useState } from "react";
import { LayoutOption } from "./LayoutOption";
import {
  LAYOUT_DIRECTION,
  LAYOUT_TYPE,
  LayoutSettings,
  blockBgColors,
} from "./types";
import { arrayMoveImmutable } from "array-move";
import SortableList, { SortableItem } from "react-easy-sort";
import { Layout } from "./Layout";

function App() {
  const [layoutSettings, SetLayoutSettings] = useState<LayoutSettings>({
    type: "111",
    order: ["Text", "Image", "List"],
    direction: "horizontal",
  });

  const directionOptions = {
    horizontal: "横向",
    vertical: "纵向",
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    SetLayoutSettings((ls) => ({
      ...ls,
      order: arrayMoveImmutable(ls.order, oldIndex, newIndex),
    }));
  };

  return (
    <div className="px-10 py-10 space-y-10">
      <p className="text-gray-500 text-sm">
        TIP: 调整窗口大小至 &lt; 600px 以查看手机端响应式布局
      </p>

      <fieldset>
        <legend className="pb-4">设置排列方向：</legend>
        <div className="flex space-x-2">
          {LAYOUT_DIRECTION.map((d) => (
            <div key={d} className="flex space-x-2">
              <input
                type="radio"
                id={d}
                name={d}
                value={d}
                checked={d === layoutSettings.direction}
                onChange={() => {
                  SetLayoutSettings((ls) => ({ ...ls, direction: d }));
                }}
              />
              <label htmlFor={d}>
                {directionOptions[d]}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="pb-4">设置布局方式：</legend>
        <div className="flex space-x-2">
          {LAYOUT_TYPE.map((t) => (
            <div key={t} className="flex space-x-2">
              <input
                type="radio"
                id={t}
                name="drone"
                value={t}
                checked={t === layoutSettings.type}
                onChange={() => {
                  SetLayoutSettings((ls) => ({ ...ls, type: t }));
                }}
              />
              <label htmlFor={t} className="bg-indigo-50 p-2">
                <LayoutOption type={t} direction={layoutSettings.direction}></LayoutOption>
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div>
        <p className="pb-4">设置顺序 (拖拽下方元素以排序)：</p>
        <SortableList onSortEnd={onSortEnd} className="flex space-x-2">
          {layoutSettings.order.map((item) => (
            <SortableItem key={item}>
              <div
                className={`cursor-grab px-2 rounded select-none ${blockBgColors[item]}`}
              >
                {item}
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </div>

      <div>
        <p className="pb-4">渲染结果：</p>
        <Layout
          type={layoutSettings.type}
          direction={layoutSettings.direction}
          containerClassName="w-400px bg-slate-50"
        >
          {
            layoutSettings.order.map((item) => (
              <div
                className={`min-w-[100px] min-h-32 flex justify-center items-center ${blockBgColors[item]}`}
                key={item}
              >
                <p>{item}</p>
              </div>
            )) as [ReactNode, ReactNode, ReactNode]
          }
        </Layout>
      </div>

      <div>
        <p className="pb-4">数据结构：</p>
        <pre>{JSON.stringify(layoutSettings, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
