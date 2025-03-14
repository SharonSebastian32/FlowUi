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
          <span id="group-selecion" onClick={clearSelection}>
            <IoMdCloseCircleOutline id="close-circle-outline" />
          </span>
        )}
      </div>

      {isOpen && (
        <div
          className="dropdown-menu"
           
        >
          {uniqueTeams.map((team) => (
            <div id="team-d"
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
