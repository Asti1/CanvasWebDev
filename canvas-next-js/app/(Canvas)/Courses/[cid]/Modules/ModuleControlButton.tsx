import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckMark";
import { BsPlus } from "react-icons/bs";
export default function ModuleControlButton() {
  return (
    <div className="float-end">
      {/* <GreenCheckmark /> */}
      <BsPlus className="fs-4" />
    </div>
  );
}
