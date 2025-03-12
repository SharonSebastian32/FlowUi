import { useEffect, useCallback } from "react";
import { FiX, FiCheck, FiEye, FiEyeOff } from "react-icons/fi";

// Define color constants for consistency
const COLORS = {
  orange: {
    primary: '#F97316',  // Vibrant orange
    hover: '#EA580C',    // Darker orange for hover
    light: '#FFF7ED',    // Light orange background
  },
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    700: '#374151',
  },
  black: {
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
};

const ColumnVisibilityModal = ({
  isOpen,
  onClose,
  columns,
  columnVisibility,
  setColumnVisibility,
}) => {
  // Memoize event handlers
  const handleEscape = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  // Memoize toggle function
  const toggleAllColumns = useCallback((value) => {
    const newVisibility = Object.fromEntries(
      columns
        .filter(col => col.id !== "select" && col.id !== "Action")
        .map(col => [col.id, value])
    );
    setColumnVisibility(newVisibility);
  }, [columns, setColumnVisibility]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-modalFadeIn">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b" style={{ backgroundColor: COLORS.gray[50], borderColor: COLORS.gray[200] }}>
          <h2 className="text-xl font-semibold flex items-center" style={{ color: COLORS.gray[700] }}>
            Configuration
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-orange-100 transition-colors"
            aria-label="Close"
          >
            <FiX size={20} style={{ color: COLORS.gray[700] }} />
          </button>
        </div>

        {/* Controls */}
        <div className="p-4 border-b" style={{ backgroundColor: COLORS.gray[50], borderColor: COLORS.gray[200] }}>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => toggleAllColumns(true)}
              className="flex items-center px-3 py-1.5 text-sm font-medium rounded transition-colors"
              style={{
                backgroundColor: COLORS.orange.light,
                color: COLORS.orange.primary,
                border: `1px solid ${COLORS.orange.primary}`,
              }}
            >
              <FiCheck className="mr-1" /> Show All
            </button>
            <button
              onClick={() => toggleAllColumns(false)}
              className="flex items-center px-3 py-1.5 text-sm font-medium rounded transition-colors"
              style={{
                backgroundColor: COLORS.orange.light,
                color: COLORS.orange.primary,
                border: `1px solid ${COLORS.orange.primary}`,
              }}
            >
              <FiEyeOff className="mr-1" /> Hide All
            </button>
          </div>
        </div>

        {/* Column List */}
        <div className="max-h-64 overflow-y-auto p-4 divide-y" style={{ divideColor: COLORS.gray[100] }}>
          {columns.map((column) => {
            if (column.id === "select" || column.id === "Action") return null;
            const isVisible = columnVisibility[column.id] !== false;

            return (
              <div
                key={column.id}
                className="py-2 px-2 flex items-center justify-between hover:bg-orange-50 rounded transition-colors"
              >
                <label
                  htmlFor={`column-${column.id}`}
                  className="cursor-pointer flex-grow text-gray-700 font-medium"
                >
                  {typeof column.header === "string" ? column.header : column.id}
                </label>
                <div className="relative w-10">
                  <input
                    type="checkbox"
                    id={`column-${column.id}`}
                    checked={isVisible}
                    onChange={() =>
                      setColumnVisibility(prev => ({
                        ...prev,
                        [column.id]: !prev[column.id],
                      }))
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor={`column-${column.id}`}
                    className={`block h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                      isVisible ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ${
                        isVisible ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t" style={{ backgroundColor: COLORS.gray[50], borderColor: COLORS.gray[200] }}>
          <button
            onClick={onClose}
            className="w-full px-3 py-2 text-white font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
            style={{ backgroundColor: COLORS.orange.primary }}
          >
            Apply Changes
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ColumnVisibilityModal;