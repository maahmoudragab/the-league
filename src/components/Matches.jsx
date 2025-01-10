function Matchs() {
  const data = [
    {
      roundTitle: "الجولة الأولى",
      roundDate: "الجمعة 12 / 12",
      matches: [
        {
          team1: { name: "فريق 1", logo: "/user-images/user.png" },
          team2: { name: "فريق 2", logo: "/user-images/user.png" },
          time: "04:00",
          ended: null,
        },
        {
          team1: { name: "فريق 3", logo: "/user-images/user.png" },
          team2: { name: "فريق 4", logo: "/user-images/user.png" },
          time: null,
          ended: { team1Score: 1, team2Score: 1 },
        },
        {
          team1: { name: "فريق 3", logo: "/user-images/user.png" },
          team2: { name: "فريق 4", logo: "/user-images/user.png" },
          time: null,
          ended: { team1Score: 1, team2Score: 1 },
        },
      ],
    },
    {
      roundTitle: "الجولة الأولى",
      roundDate: "الجمعة 12 / 12",
      matches: [
        {
          team1: { name: "فريق 1", logo: "/user-images/user.png" },
          team2: { name: "فريق 2", logo: "/user-images/user.png" },
          time: "04:00",
          ended: null,
        },
        {
          team1: { name: "فريق 3", logo: "/user-images/user.png" },
          team2: { name: "فريق 4", logo: "/user-images/user.png" },
          time: null,
          ended: { team1Score: 1, team2Score: 1 },
        },
        {
          team1: { name: "فريق 3", logo: "/user-images/user.png" },
          team2: { name: "فريق 4", logo: "/user-images/user.png" },
          time: null,
          ended: { team1Score: 1, team2Score: 1 },
        },
      ],
    },
  ];

  return (
    <div className="matches">
      {data.map((round, index) => (
        <div className="round" key={index}>
          <h2 className="round-title">{round.roundTitle}</h2>
          <h2 className="round-date">{round.roundDate}</h2>
          {round.matches.map((match, matchIndex) => (
            <div className="match" key={matchIndex}>
              <div className="team">
                <img src={match.team1.logo} alt={match.team1.name} />
                <h3>{match.team1.name}</h3>
              </div>
              <div className="details">
                {match.ended ? (
                  <div className="ended">
                    <h4>{match.ended.team1Score}</h4>
                    <h3>انتهت</h3>
                    <h4>{match.ended.team2Score}</h4>
                  </div>
                ) : (
                  <h3 className="time">{match.time}</h3>
                )}
              </div>
              <div className="team">
                <h3>{match.team2.name}</h3>
                <img src={match.team2.logo} alt={match.team2.name} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Matchs;
