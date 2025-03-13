import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { useState } from "react";
import DatePicker from "react-datepicker"; // You'll need to install this: npm install react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Add this to your CSS imports

function PrevNext() {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-12-25"));
  const [showCalendar, setShowCalendar] = useState(false);

  // Format date to match your original format (December 25, 2024)
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Close calendar after selection
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.7rem",
          position: "relative", // Added for calendar positioning
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
        <span className="font-semibold text-sm text-black">
          {formatDate(selectedDate)}
        </span>
        <FaCalendarAlt
          onClick={toggleCalendar}
          style={{
            cursor: "pointer",
            color: "orange",
            fontSize: "1rem",
          }}
        />
      </div>

      {showCalendar && (
        <div style={{ position: "absolute", zIndex: 1000 }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline // Shows calendar without input
          />
        </div>
      )}
    </>
  );
}

export default PrevNext;
