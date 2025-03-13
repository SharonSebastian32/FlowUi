import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { HiMenuAlt1 } from "react-icons/hi";

import { MdOutlineNavigateNext } from "react-icons/md";

import { useState, useRef, useEffect } from "react";
import "./PrevNext.css";
function PrevNext() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-01-01"));
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date("2025-12-31"));
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
    if (showCalendar && calendarIconRef.current) {
      const rect = calendarIconRef.current.getBoundingClientRect();
      setCalendarPosition({
        top: rect.bottom + window.scrollY + 500,
        left: rect.left + window.scrollX,
      });
    }
  }, [showCalendar]);

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
          top: `${calendarPosition.top}px`,
          left: `${calendarPosition.right}px`,
          position: "absolute",
        }}
      >
        <div className="calendar-header">
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
      <div id="date-picker-container">
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.7rem" }}
        >
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
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.7rem",
            }}
          >
            <GrFormPrevious
              onClick={() => {
                alert("Previous Button Clicked");
              }}
            />
            <MdOutlineNavigateNext
              onClick={() => {
                alert("Previous Button Clicked");
              }}
            />
          </span>
          <span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.7rem",
              }}
            >
              {" "}
              <PiListBulletsBold />
              <div style={{
                 margin
                backgroundColor: "orange",
                borderRadius: "50%"
              }}><HiMenuAlt1 /></div>
              
            </div>
          </span>
        </div>
      </div>

      {showCalendar && <NormalCalendar />}
    </>
  );
}

export default PrevNext;
