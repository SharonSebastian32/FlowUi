import { flexRender } from "@tanstack/react-table";
import 
const EmployeeTableHeader = ({ table }) => {
  return (
    <thead className="bg-gray-50">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider cursor-pointer"
              onClick={header.column.getToggleSortingHandler()}
              title={
                header.column.getCanSort()
                  ? header.column.getNextSortingOrder() === "asc"
                    ? "Sort ascending"
                    : header.column.getNextSortingOrder() === "desc"
                    ? "Sort descending"
                    : "Clear sort"
                  : undefined
              }
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: <FaAngleUp />,
                desc: " 🔽",
              }[header.column.getIsSorted() ] ?? null}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default EmployeeTableHeader;