import React from "react";
import { getRandomColor } from "../../utils/generateColor";

export default function TagItem({ tag }) {
  let color = getRandomColor();
  return (
    <li>
      <span
        className={`inline-block h-5 whitespace-nowrap rounded-[45px] ] px-2.5 text-sm capitalize text-[#F4F5F6]`}
        style={{ backgroundColor: color }}
      >
        {tag}
      </span>
    </li>
  );
}
