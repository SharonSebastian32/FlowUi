import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";

function PrevNext() {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-12-25"));
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarIconRef = useRef(null);
  const calendarRef = useRef(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  useEffect(() => {
    if (showCalendar && calendarIconRef.current) {
      const rect = calendarIconRef.current.getBoundingClientRect();
      setCalendarPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [showCalendar]);

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        calendarIconRef.current &&
        !calendarIconRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SimpleCalendar = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
          }}
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(day);
                handleDateChange(newDate);
              }}
              style={{
                padding: "5px",
                cursor: "pointer",
                backgroundColor:
                  selectedDate.getDate() === day ? "#ffe3c3" : "white",
              }}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
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
        <span className="font-semibold text-sm text-black">
          {formatDate(selectedDate)}
        </span>
        <FaCalendarAlt
          ref={calendarIconRef}
          onClick={toggleCalendar}
          style={{
            cursor: "pointer",
            color: "orange",
            fontSize: "1rem",
          }}
        />
      </div>

      {showCalendar && (
        <div
          ref={calendarRef}
          style={{
            position: "absolute",
            zIndex: 1000,
            top: `${calendarPosition.top}px`,
            left: `${calendarPosition.left}px`,
          }}
        >
          <SimpleCalendar />
        </div>
      )}
    </>
  );
}

export default PrevNext;
