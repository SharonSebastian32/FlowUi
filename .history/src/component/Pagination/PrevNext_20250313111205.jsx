import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { PiListBulletsBold } from "react-icons/pi";
import { useState } from "react";
import "./PrevNext.css";

function PrevNext() {
  const [selectedDate, setSelectedDate] = useState("2025-01-01");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.7rem",
          position: "relative",
        }}
      >
        <GrFormPrevious
          style={{
            backgroundColor: "#ffe3c3",
            cursor: "pointer",
            color: "black",
            fontSize: "1.5rem",
          }}
        />
        <MdNavigateNext
          style={{
            cursor: "pointer",
            backgroundColor: "#ffe3c3",
            color: "black",
            fontSize: "1.5rem",
          }}
        />
      </div>
      <PiListBulletsBold
        style={{
          cursor: "pointer",
          backgroundColor: "#ffe3c3",
          color: "black",
          fontSize: "1.5rem",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "0.7rem" }}>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-input"
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
          }}
        />
      </div>
    </>
  );
}

export default PrevNext;
