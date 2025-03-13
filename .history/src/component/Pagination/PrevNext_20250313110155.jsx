import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";

function PrevNext() {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-12-25"));
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date("2024-12-01"));
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

  const changeMonth = (delta) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + delta);
    setCurrentMonth(newMonth);
  };

  const NormalCalendar = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    const daysInMonth = lastDayOfMonth.getDate();

    const firstDayOfWeek = firstDayOfMonth.getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }

    return (
      <div
        className="calendar"
        style={{
          top: calendarPosition.top,
          left: calendarPosition.left,
        }}
      >
        <div
          className="calendar-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => changeMonth(-1)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <GrFormPrevious style={{ fontSize: "1.2rem" }} />
          </button>
          <div style={{ fontWeight: "bold" }}>
            {currentMonth.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <button
            onClick={() => changeMonth(1)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <MdNavigateNext style={{ fontSize: "1.2rem" }} />
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
          }}
        >
          {weekdays.map((day) => (
            <div
              key={day}
              style={{
                textAlign: "center",
                padding: "5px",
                fontWeight: "bold",
                fontSize: "0.8rem",
                color: "#666",
              }}
            >
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            if (day === null) {
              return (
                <div key={`empty-${index}`} style={{ padding: "5px" }}></div>
              );
            }

            const dateToCheck = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day
            );
            const isSelected =
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === currentMonth.getMonth() &&
              selectedDate.getFullYear() === currentMonth.getFullYear();

            const isToday =
              new Date().getDate() === day &&
              new Date().getMonth() === currentMonth.getMonth() &&
              new Date().getFullYear() === currentMonth.getFullYear();

            return (
              <button
                key={day}
                onClick={() => {
                  const newDate = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    day
                  );
                  handleDateChange(newDate);
                }}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#ffe3c3" : "white",
                  border: isToday ? "1px solid orange" : "none",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                {day}
              </button>
            );
          })}
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

      {showCalendar && <NormalCalendar />}
    </>
  );
}

export default PrevNext;
