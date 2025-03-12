import { useEffect } from "react";
import { FiX, FiCheck, FiEye, FiEyeOff } from "react-icons/fi";

const ColumnVisibilityModal = ({
  isOpen,
  onClose,
  columns,
  columnVisibility,
  setColumnVisibility,
}) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [isOpen, onClose]);

  // Select/deselect all columns
  const toggleAllColumns = (value) => {
    const newVisibility = {};
    columns.forEach((column) => {
      if (column.id !== "select" && column.id !== "Action") {
        newVisibility[column.id] = value;
      }
    });
    setColumnVisibility(newVisibility);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all duration-300 ease-in-out"
        style={{
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          animation: "modalFadeIn 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="mr-2"></span>
            Configuration
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Toggle All Section */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between">
            <button
              onClick={() => toggleAllColumns(true)}
              className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded hover:bg-green-100 border border-green-200 flex items-center transition-colors"
            >
              <FiCheck className="mr-1" /> Show All
            </button>
            <button
              onClick={() => toggleAllColumns(false)}
              className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded hover:bg-red-100 border border-red-200 flex items-center transition-colors"
            >
              <FiEyeOff className="mr-1" /> Hide All
            </button>
          </div>
        </div>

        {/* Column List */}
        <div
          className="max-h-64 overflow-y-auto px-6 py-3 divide-y divide-gray-100"
          style={{ scrollbarWidth: "thin" }}
        >
          {columns.map((column) => {
            if (column.id === "select" || column.id === "Action") return null;

            const isVisible = columnVisibility[column.id] !== false;

            return (
              <div
                key={column.id}
                className="py-2 flex items-center justify-between hover:bg-gray-50 rounded px-2 -mx-2 transition-colors"
              >
                <label
                  htmlFor={`column-${column.id}`}
                  className="cursor-pointer flex-grow flex items-center"
                >
                  <span className="font-medium text-gray-700">
                    {typeof column.header === "string"
                      ? column.header
                      : column.id}
                  </span>
                </label>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    id={`column-${column.id}`}
                    checked={isVisible}
                    onChange={() => {
                      setColumnVisibility((prev) => ({
                        ...prev,
                        [column.id]: prev[column.id] === false,
                      }));
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor={`column-${column.id}`}
                    className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in ${
                      isVisible ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in ${
                        isVisible ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-3 py-5 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 font-medium flex items-center"
          >
            Apply Changes
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ColumnVisibilityModal;
