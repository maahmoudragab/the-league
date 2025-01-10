const topPlayers = [
  { name: "Player 1", goals: 20, team: "فريق 1" },
  { name: "Player 2", goals: 18, team: "فريق 1" },
  { name: "Player 2", goals: 18, team: "فريق 1" },
];

function TopScorers() {
  return (
    <div className="table-players">
      <table>
        <thead>
          <tr>
            <th>اسم اللاعب</th>
            <th>الفريق</th>
            <th>الأهداف</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopScorers;
