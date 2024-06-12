import { ReactNode, useState } from "react";
import { LayoutOption } from "./LayoutOption";
import { LAYOUT_TYPE, LayoutSettings, blockBgColors } from "./types";
import { arrayMoveImmutable } from "array-move";
import SortableList, { SortableItem } from "react-easy-sort";
import { Layout } from "./Layout";

function App() {
  const [layoutSettings, SetLayoutSettings] = useState<LayoutSettings>({
    type: "111",
    order: ["Text", "Image", "List"],
  });

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    SetLayoutSettings((ls) => ({
      ...ls,
      order: arrayMoveImmutable(ls.order, oldIndex, newIndex),
    }));
  };

  return (
    <div className="px-10 pt-10 space-y-10">
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
                <LayoutOption type={t}></LayoutOption>
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
        <p>渲染结果：</p>
        <Layout type={layoutSettings.type} className="w-400px bg-slate-50">
          {
            layoutSettings.order.map((item) => (
              <div
                className={`min-w-[100px] h-32 flex justify-center items-center ${blockBgColors[item]}`}
                key={item}
              >
                <p>{item}</p>
              </div>
            )) as [ReactNode, ReactNode, ReactNode]
          }
        </Layout>
      </div>

      <div>
        <p>数据结构：</p>
        <pre>{JSON.stringify(layoutSettings, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
