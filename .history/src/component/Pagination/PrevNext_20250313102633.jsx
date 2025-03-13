import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function PrevNext() {
  return (
    <div className="flex flw gap-2">
      <GrFormPrevious /> <MdNavigateNext />
    </div>
  );
}

export default PrevNext;
