export function getMatchDetailsForTheFinals(matches, teams) {
  const teamMap = {};

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    teamMap[team.ID] = team;
  }

  const matchesWithDetails = [];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const teamA = teamMap[match.ATeamID] || {};
    const teamB = teamMap[match.BTeamID] || {};

    matchesWithDetails.push({
      ...match,
      TeamA: teamA,
      TeamB: teamB,
    });
  }

  return matchesWithDetails;
}
