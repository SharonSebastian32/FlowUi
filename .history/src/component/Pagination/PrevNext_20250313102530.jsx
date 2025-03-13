import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function PrevNext() {
  return (
    <div className="flex justify-between gap-3">
      <MdNavigateNext />
      <GrFormPrevious />
    </div>
  );
}

export default PrevNext;
