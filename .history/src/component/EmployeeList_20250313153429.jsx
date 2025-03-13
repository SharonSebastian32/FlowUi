import { useMemo, useState, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GrCircleQuestion } from "react-icons/gr";
import AddMember from "./Buttons/AddMember";
import Filter from "./Filter/Filter.jsx";
import Message from "./Message/Message.jsx";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";
import mockData from "/MOCK_DATA.json";
import "../Styles/Employee.css";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import ColumnVisibilityModal from "./ColumnVisibilityModal";
import ActionMenu from "./ActionMenu";
import EmployeeTableHeader from "./Table/EmployeeTableHeader";
import EmployeeTableBody from "./Table/EmployeeTableBody";
import PaginationControls from "./Pagination/Pagination";
import GroupByTeamDropdown from "./GroupByTeam";
import PrevNext from "./Pagination/PrevNext";
import AdminInfo from "./Admin/AdminInfo.jsx";

const EmployeeList = () => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [isColumnVisibilityModalOpen, setIsColumnVisibilityModalOpen] =
    useState(false);
  const [grouping, setGrouping] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [isGroupByTeamActive, setIsGroupByTeamActive] = useState(false);
  const [teamFilter, setTeamFilter] = useState("");

  const data = useMemo(() => mockData, []);
  const uniqueTeams = useMemo(() => {
    const teams = new Set(data.map((item) => item.Team));
    return Array.from(teams).sort();
  }, [data]);

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div onClick={(e) => e.stopPropagation()}>
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorFn: (row) => `${row.Name}`,
        id: "Name",
        header: "Name",
        cell: ({ row }) => (
          <span
            id="name-span"
            style={{
              color: "#000000",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            {row.original.Name}
          </span>
        ),
      },
      {
        accessorKey: "Team",
        id: "Team",
        accessorFn: (row) => `${row.Team}`,
        header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <span>Team</span>
            <span style={{ marginLeft: "2.6px", cursor: "pointer" }}>
              <GrCircleQuestion
                style={{
                  color: "black",
                  height: "20px",
                  width: "20px",
                }}
              />
            </span>
          </div>
        ),
      },
      {
        accessorKey: "Clock In",
        id: "Clock In",
        header: "Clock-In",
        accessorFn: (row) => `${row.Clock_in}`,
      },
      {
        accessorKey: "Clock Out",
        id: "Clock Out",
        header: "Clock-Out",
        accessorFn: (row) => `${row.Clock_out}`,
      },
      {
        accessorKey: "Productive",
        id: "Productive",
        header: "Productive",
        accessorFn: (row) => `${row.Productive_time}`,
        cell: ({ row }) => (
          <span style={{ color: "#0dc900" }}>
            {row.original.Productive_time}
          </span>
        ),
      },
      {
        accessorKey: "Unproductive",
        id: "Unproductive",
        header: "Unproductive",
        accessorFn: (row) => `${row.Unproductive_time}`,
        cell: ({ row }) => (
          <span style={{ color: "#ff2918" }}>
            {row.original.Unproductive_time}
          </span>
        ),
      },
      {
        accessorKey: "Neutral",
        id: "Neutral",
        header: "Neutral",
        accessorFn: (row) => `${row.Neutral_time}`,
      },
      {
        accessorKey: "Idle",
        id: "Idle",
        header: "Idle",
        accessorFn: (row) => `${row.Idle_time}`,
      },
      {
        accessorKey: "Action",
        id: "Action",
        header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <span>Action</span>
            <span
              style={{ marginLeft: "2.4px", cursor: "pointer" }}
              onClick={() => handleMenuItemClick("edit")}
            >
              <HiOutlineDotsVertical
                style={{
                  color: "gray",
                  height: "20px",
                  width: "30px",
                }}
              />
            </span>
          </div>
        ),
        cell: ({ row }) => (
          <ActionMenu
            row={row}
            openColumnVisibilityModal={toggleColumnVisibilityModal}
          />
        ),
      },
    ],
    []
  );

  const toggleColumnVisibilityModal = () => {
    setIsColumnVisibilityModalOpen(!isColumnVisibilityModalOpen);
  };

  const handleMenuItemClick = (action) => {
    switch (action) {
      case "edit":
        setIsColumnVisibilityModalOpen(true);
        break;
      case "delete":
        console.log("Delete clicked");
        break;
      default:
        break;
    }
  };

  const handleGroupByTeam = (team) => {
    if (team) {
      setGrouping(["Team"]);
      setIsGroupByTeamActive(true);
      setTeamFilter(team);
    } else {
      setGrouping([]);
      setIsGroupByTeamActive(false);
      setTeamFilter("");
    }
  };

  const columnFilters = useMemo(() => {
    const filters = [];
    if (teamFilter) {
      filters.push({ id: "Team", value: teamFilter });
    }
    return filters;
  }, [teamFilter]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      globalFilter: filtering,
      rowSelection,
      columnVisibility,
      grouping,
      expanded,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onGroupingChange: setGrouping,
    onExpandedChange: setExpanded,
    enableRowSelection: true,
    enableGrouping: true,
    enableColumnFilters: true,
  });

  useEffect(() => {
    if (isGroupByTeamActive) {
      setExpanded(
        table.getExpandedRowModel().rows.reduce((acc, row) => {
          acc[row.id] = true;
          return acc;
        }, {})
      );
    }
  }, [isGroupByTeamActive, table]);

  return (
    <div className="m-4">
      <div id="header">
        <GroupByTeamDropdown
          uniqueTeams={uniqueTeams}
          handleGroupByTeam={handleGroupByTeam}
        />

        <input
          id="search"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          type="text"
          placeholder="Search"
          className="border border-gray-400 w-96 px-3 py-2 rounded-lg ml-5"
        />
        <PrevNext />
        <AddMember />
        <Filter />
        <Message />
        <AdminInfo />
      </div>
      <table className="min-w-full">
        <EmployeeTableHeader table={table} />
        <EmployeeTableBody table={table} />
      </table>
      <PaginationControls table={table} />
      <ColumnVisibilityModal
        isOpen={isColumnVisibilityModalOpen}
        onClose={toggleColumnVisibilityModal}
        columns={columns}
        columnVisibility={columnVisibility}
        setColumnVisibility={setColumnVisibility}
      />
    </div>
  );
};

export default EmployeeList;
