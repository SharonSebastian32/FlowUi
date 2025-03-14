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
import mockData from "../../Data/MOCK_DATA.json";
import "../Styles/Employee.css";
import IndeterminateCheckbox from "../component/Tanstack/IndeterminateCheckbox.jsx";
import ColumnVisibilityModal from "../Utils/ColumnVisibilityModal.jsx";
import ActionMenu from "../Utils/ActionMenu.jsx";
import EmployeeTableHeader from "./Table/EmployeeTableHeader";
import EmployeeTableBody from "./Table/EmployeeTableBody";
import PaginationControls from "./Pagination/Pagination";
import GroupByTeamDropdown from "../component/Grouping/GroupByTeam.jsx";
import AdminInfo from "./Admin/AdminInfo.jsx";
import PrevNext from "./Pagination/PrevNext.jsx";

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

  const columns = useMemo(() => [
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
      cell: ({ row }) => <span id="name-span">{row.original.Name}</span>,
    },
    {
      accessorKey: "Team",
      id: "Team",
      accessorFn: (row) => `${row.Team}`,
      header: () => (
        <div id="team-header">
          <span>Team</span>
          <span id="question-span" style={{ marginLeft: "2.6px", cursor: "pointer" }}>
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
        <span style={{ color: "#0dc900" }}>{row.original.Productive_time}</span>
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
  ]);

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
    <div className="m-5">
      <div id="header">
        <GroupByTeamDropdown
          uniqueTeams={uniqueTeams}
          handleGroupByTeam={handleGroupByTeam}
        />

        <input
          id="search-box"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          type="text"
          placeholder="Search"
        />

        <div className="next-page">
          <PrevNext />
        </div>
        <AddMember id="add-member" />
        <Filter id="filter" />
        <Message id="message" />
        <div id="empty">
          <AdminInfo className="admin-info" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="border-collapse">
          <EmployeeTableHeader table={table} />
          <EmployeeTableBody table={table} />
        </table>
      </div>
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
