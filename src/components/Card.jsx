import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { remove, update } from "../features/model";

const Card = ({ value, id }) => {
  return (
    <div className="relative border-2 border-gray-100 py-1 px-10 my-10">
      <div className="absolute right-0 top-0 py-1 px-3">
        <button onClick={() => remove(id)}>
          <MdOutlineClose />
        </button>
      </div>

      <div className="">
        <span className="absolute left-0 top-0 bg-gray-100 py-1 px-3  ">
          {id}
        </span>
        <input
          value={value}
          onChange={(e) => update({ id, message: e.target.value })}
        />
      </div>
      <div className="flex justify-between">
        <div>Igor</div>
        <div>16 июля</div>
      </div>
    </div>
  );
};

export default Card;
