import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function PrevNext() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <GrFormPrevious /> <MdNavigateNext />
    </div>
  );
}

export default PrevNext;
