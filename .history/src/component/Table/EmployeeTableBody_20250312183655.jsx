import { flexRender } from "@tanstack/react-table";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const EmployeeTableBody = ({ table }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {table.getRowModel().rows.map((row) => {
        const isSelected = row.getIsSelected();
        return (
          <tr
            key={row.id}
            className={
              isSelected ? "bg-gray-200 hover:bg-gray-300" : "hover:bg-GRAY-100"
            }
            style={{
              backgroundColor: isSelected ? "#e5e7eb" : "white",
              transition: "background-color 0.2s ease",
            }}
            onClick={() => {
              if (row.getCanSelect()) {
                row.toggleSelected(!isSelected);
              }
            }}
          >
            {row.getVisibleCells().map((cell) => {
              const isGroupedCell = cell.getIsGrouped();
              const isAggregatedCell = cell.getIsAggregated();
              return (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  style={{
                    backgroundColor: isGroupedCell
                      ? "#f3f4f6"
                      : isAggregatedCell
                      ? "#f9fafb"
                      : isSelected
                      ? "#e5e7eb"
                      : "white",
                    fontWeight: isGroupedCell ? "bold" : "normal",
                  }}
                >
                  {cell.getIsGrouped() ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          row.getToggleExpandedHandler()();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {row.getIsExpanded() ? (
                          <BsChevronDown className="inline mr-2" />
                        ) : (
                          <BsChevronRight className="inline mr-2" />
                        )}
                      </button>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      ({row.subRows.length})
                    </>
                  ) : cell.getIsAggregated() ? (
                    <span>
                      {flexRender(
                        cell.column.columnDef.aggregatedCell ||
                          cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  ) : cell.getIsPlaceholder() ? null : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default EmployeeTableBody;
