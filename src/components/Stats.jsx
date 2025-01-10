import { useState, useMemo } from "react";

const rows = [
  {
    team: "اسم الفريق",
    pl: 30,
    w: 9,
    d: 3,
    l: 2,
    gf: 2,
    ga: 2,
    gd: 2,
    pts: 2,
  },
  {
    team: "اسم الفريق",
    pl: 28,
    w: 8,
    d: 4,
    l: 2,
    gf: 3,
    ga: 2,
    gd: 3,
    pts: 3,
  },
  {
    team: "اسم الفريق",
    pl: 32,
    w: 10,
    d: 2,
    l: 2,
    gf: 4,
    ga: 3,
    gd: 1,
    pts: 4,
  },
  {
    team: "اسم الفريق",
    pl: 32,
    w: 10,
    d: 2,
    l: 2,
    gf: 4,
    ga: 3,
    gd: 1,
    pts: 4,
  },
  {
    team: "اسم الفريق",
    pl: 32,
    w: 10,
    d: 2,
    l: 2,
    gf: 4,
    ga: 3,
    gd: 1,
    pts: 4,
  },
];

const headCells = [
  { id: "rank", label: "" },
  { id: "team", label: "اسم الفريق" },
  { id: "pl", label: "PL" },
  { id: "w", label: "W" },
  { id: "d", label: "D" },
  { id: "l", label: "L" },
  { id: "gf", label: "GF" },
  { id: "ga", label: "GA" },
  { id: "gd", label: "GD" },
  { id: "pts", label: "PTS" },
];

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0)
    : (a, b) =>
        a[orderBy] < b[orderBy] ? -1 : a[orderBy] > b[orderBy] ? 1 : 0;
};

function Stats() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("pl");

  const handleRequestSort = (property) => {
    if (property === "team" || property === "rank") return;

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = useMemo(() => {
    return [...rows].sort(getComparator(order, orderBy)); // استخدام نسخة جديدة من الصفيف
  }, [order, orderBy]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headCells.map((headCell) => (
              <th
                key={headCell.id}
                onClick={() => handleRequestSort(headCell.id)}
              >
                {headCell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, index) => (
            <tr key={`${row.team}-${index}`}>
              <td>{index + 1}</td>
              <td>{row.team}</td>
              <td>{row.pl}</td>
              <td>{row.w}</td>
              <td>{row.d}</td>
              <td>{row.l}</td>
              <td>{row.gf}</td>
              <td>{row.ga}</td>
              <td>{row.gd}</td>
              <td>{row.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;
