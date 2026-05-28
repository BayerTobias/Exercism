type TeamStats = {
  name: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  p: number;
};

export class Tournament {
  private header = "Team                           | MP |  W |  D |  L |  P";

  tally(input: string): string {
    if (!input.trim()) {
      return this.header;
    }

    const teams: Record<string, TeamStats> = {};

    const matches = input.split("\n");

    for (const match of matches) {
      const [team1Name, team2Name, result] = match.split(";");

      if (!teams[team1Name]) {
        teams[team1Name] = this.createTeam(team1Name);
      }

      if (!teams[team2Name]) {
        teams[team2Name] = this.createTeam(team2Name);
      }

      const team1 = teams[team1Name];
      const team2 = teams[team2Name];

      team1.mp++;
      team2.mp++;

      switch (result) {
        case "win":
          team1.w++;
          team1.p += 3;

          team2.l++;
          break;

        case "loss":
          team1.l++;

          team2.w++;
          team2.p += 3;
          break;

        case "draw":
          team1.d++;
          team1.p++;

          team2.d++;
          team2.p++;
          break;
      }
    }

    const sortedTeams = Object.values(teams).sort((a, b) => {
      if (b.p !== a.p) {
        return b.p - a.p;
      }

      return a.name.localeCompare(b.name);
    });

    const lines: string[] = [this.header];

    for (const team of sortedTeams) {
      lines.push(
        `${team.name.padEnd(30)} | ${String(team.mp).padStart(2)} | ${String(team.w).padStart(2)} | ${String(team.d).padStart(2)} | ${String(team.l).padStart(2)} | ${String(team.p).padStart(2)}`,
      );
    }

    return lines.join("\n");
  }

  private createTeam(name: string): TeamStats {
    return {
      name,
      mp: 0,
      w: 0,
      d: 0,
      l: 0,
      p: 0,
    };
  }
}
