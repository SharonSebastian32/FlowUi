import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";

function PrevNext() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.2rem" }}>
        <GrFormPrevious
          style={{ cursor: "pointer", color: "black", fontSize: "1.5rem" }}
        />{" "}
        <MdNavigateNext
          style={{ cursor: "pointer", color: "black", fontSize: "1.5rem" }}
        />
      </div>

      <FaCalendarAlt
        style={{
          cursor: "pointer",
          color: "orange",
          fontSize: "0.8rem",
        }}
      />
    </>
  );
}

export default PrevNext;
