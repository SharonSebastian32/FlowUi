import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function PrevNext() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GrFormPrevious /> <MdNavigateNext />
    </div>
  );
}

export default PrevNext;
