import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function PrevNext() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "0.2rem" }}>
      <GrFormPrevious
        style={{ cursor: "pointer", color: "black", fontSize: "1.5rem" }}
      />{" "}
      <MdNavigateNext />
    </div>
  );
}

export default PrevNext;
