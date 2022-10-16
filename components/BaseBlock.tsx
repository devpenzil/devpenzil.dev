import React, { useState } from "react";
import Image from "next/image";
import { avatar } from "../data/asset";
import Refresh from "../asset/icons/Refresh";
function BaseBlock() {
  const [position, Setposition] = useState(3);
  const changeAvatar = () => {
    Setposition(position === 4 ? 0 : position + 1);
  };
  return (
    <div className="flex flex-col justify-around h-full ">
      <div className="w-full flex justify-between">
        <div>
          <Image src={avatar[position]} height={150} width={150} />
        </div>
        <div>
          <button
            className="border-2 border-slate-300 px-3 py-2 rounded-full text-xs flex items-center group "
            onClick={changeAvatar}
          >
            <div className="group-hover:rotate-180 duration-500">
              <Refresh />
            </div>
            switch avatar
          </button>
        </div>
      </div>
      <div className="overflow-scroll">
        👋 Hi! I'm Liu Menghua, you can call me "Huazi". A wild artist engaged
        in UI design. Currently keen on modeling learning and copying and
        pasting code.
      </div>
    </div>
  );
}

export default BaseBlock;
