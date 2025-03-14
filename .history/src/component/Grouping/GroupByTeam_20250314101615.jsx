import { useState, useRef, useEffect } from "react";
import { MdGroups } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./GrupByTeam.css";
const GroupByTeamDropdown = ({ uniqueTeams, handleGroupByTeam }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const onTeamSelect = (team) => {
    setSelectedTeam(team);
    handleGroupByTeam(team);
    setIsOpen(false);
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    setSelectedTeam("");
    handleGroupByTeam("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="dropdown-toggle"
        onClick={toggleDropdown}
        style={{
          backgroundColor: selectedTeam ? "#f0f0f0" : "white",
        }}
      >
        <div id="group-by-team">
          <span>
            <MdGroups
              style={{
                color: "orange",
                height: "20px",
                width: "20px",
              }}
            />
          </span>
          <span>{selectedTeam || "Group By"}</span>
        </div>
        {selectedTeam && (
          <span
            onClick={clearSelection}
            style={{
              marginLeft: "8px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#666",
              cursor: "pointer",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <IoMdCloseCircleOutline
              style={{
                color: "red",
                height: "35px",
                width: "20px",
              }}
            />
          </span>
        )}
      </div>

      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "4px",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            zIndex: 1000,
            maxHeight: "300px",
          }}
        >
          {uniqueTeams.map((team) => (
            <div
              key={team}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor: selectedTeam === team ? "#f0f0f0" : "white",
                transition: "background-color 0.2s ease",
              }}
              onClick={() => onTeamSelect(team)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selectedTeam === team ? "#f0f0f0" : "white")
              }
            >
              {team}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupByTeamDropdown;
