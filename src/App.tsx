import { ReactNode, useState } from "react";
import { LayoutOption } from "./LayoutOption";
import { LAYOUT_TYPE, LayoutType, blockBgColors } from "./types";
import { arrayMoveImmutable } from "array-move";
import SortableList, { SortableItem } from "react-easy-sort";
import { Layout } from "./Layout";

function App() {
  const [layoutType, setLayoutType] = useState<LayoutType>("111");
  const [order, setOrder] = useState<("Text" | "Image" | "List")[]>([
    "Text",
    "Image",
    "List",
  ]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setOrder((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <div className="px-10 pt-10 space-y-10">
      <fieldset>
        <legend className="pb-4">设置布局方式:</legend>
        <div className="flex space-x-2">
          {LAYOUT_TYPE.map((t) => (
            <div key={t} className="flex space-x-2">
              <input
                type="radio"
                id={t}
                name="drone"
                value={t}
                checked={t === layoutType}
                onChange={() => {
                  setLayoutType(t);
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
        <p className="pb-4">顺序 (拖拽下方元素以排序):</p>
        <SortableList onSortEnd={onSortEnd} className="flex space-x-2">
          {order.map((item) => (
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
        <Layout type={layoutType} className="w-400px bg-slate-50">
          {
            order.map((item) => (
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
    </div>
  );
}

export default App;
