import React, {FC, useState} from "react";

interface CheckSubButtonProps {
  name: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const CheckSubButton: FC<CheckSubButtonProps> = ({name, isActive, isCompleted, onClick}) => {
  const getClassNames = () => {
    const names = ["check-main__check-crit"]
    if (isActive) names.push("check-crit-active");
    return names.join(" ");
  }
  const getColor = () => {
    if (isCompleted) return "green";
    return "#C4C4C4";
  }

  return (
    <button className={getClassNames()} onClick={onClick}>
      <svg className="check-main__check-crit-svg" width="2vw" height="2vw" viewBox="-4 -2 32 32" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14 27.3333C12.1556 27.3333 10.4222 26.9831 8.80002 26.2827C7.1778 25.5831 5.76669 24.6333 4.56669 23.4333C3.36669 22.2333 2.41691 20.8222 1.71735 19.2C1.01691 17.5778 0.666687 15.8444 0.666687 14C0.666687 12.1555 1.01691 10.4222 1.71735 8.79999C2.41691 7.17777 3.36669 5.76666 4.56669 4.56666C5.76669 3.36666 7.1778 2.41643 8.80002 1.71599C10.4222 1.01643 12.1556 0.666656 14 0.666656C15.8445 0.666656 17.5778 1.01643 19.2 1.71599C20.8222 2.41643 22.2334 3.36666 23.4334 4.56666C24.6334 5.76666 25.5831 7.17777 26.2827 8.79999C26.9831 10.4222 27.3334 12.1555 27.3334 14C27.3334 15.8444 26.9831 17.5778 26.2827 19.2C25.5831 20.8222 24.6334 22.2333 23.4334 23.4333C22.2334 24.6333 20.8222 25.5831 19.2 26.2827C17.5778 26.9831 15.8445 27.3333 14 27.3333ZM21.5334 10.7333L12.1334 20.1333L6.46669 14.4667L8.33335 12.6L12.1334 16.4L19.6667 8.86666L21.5334 10.7333Z"
            fill={getColor()} />
      </svg>
      {name}
    </button>
  )
}

export default CheckSubButton;
