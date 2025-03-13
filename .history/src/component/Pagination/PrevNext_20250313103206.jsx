import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";

function PrevNext() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          backgroundColor: "#ffe3c3",
        }}
      >
        <GrFormPrevious
          style={{
            backgroundColor: "#ffe3c3",
            cursor: "pointer",
            color: "black",
            fontSize: "1.5rem",
          }}
        />{" "}
        <MdNavigateNext
          style={{ cursor: "pointer", color: "black", fontSize: "1.5rem" }}
        />
      </div>

      <FaCalendarAlt
        style={{
          cursor: "pointer",
          color: "orange",
          fontSize: "1rem",
        }}
      />
    </>
  );
}

export default PrevNext;
