import { useState } from "react";
import { LayoutOption } from "./LayoutOption";
import { LAYOUT_TYPE, LayoutType } from "./types";

function App() {
  const [layoutType, setLayoutType] = useState<LayoutType>("111");
  const [order, setOrder] = useState<("text" | "image" | "list")[]>([
    "text",
    "image",
    "list",
  ]);

  return (
    <div className="px-10 pt-10">
      <fieldset>
        <legend className="pb-4">Select a layout:</legend>

        <div>
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
        </div>
      </fieldset>
    </div>
  );
}

export default App;
