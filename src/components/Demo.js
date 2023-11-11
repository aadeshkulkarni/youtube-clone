import React, { useMemo, useState } from "react";
import { nThPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => nThPrime(text),[text])

  return (
    <div className={`flex flex-col justify-center items-center font-3xl w-[400px] h-[300px] ${isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}>
      <div>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="px-4 py-2 rounded-full bg-green-600 text-white">
          Toggle
        </button>
      </div>
      <div>
        <input className="p-2 border border-gray-400 m-5 w-72 text-black rounded-full" type="number" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="p-8">{prime}</div>
    </div>
  );
};

export default Demo;
