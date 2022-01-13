import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function DataGridForNBATeams() {
  const [data, setData] = useState([]);

  const getNBATeamData = async () => {
    await axios.get("https://www.balldontlie.io/api/v1/teams").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getNBATeamData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "city", headerName: "City", width: 150 },
    { field: "abbreviation", headerName: "Abbreviations", width: 150 },
    { field: "conference", headerName: "Conference", width: 150 },
    { field: "division", headerName: "Division", width: 150 },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    abbreviation: row.abbreviation,
    city: row.city,
    conference: row.conference,
    division: row.division,
  }));

  console.log(data);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default DataGridForNBATeams;
