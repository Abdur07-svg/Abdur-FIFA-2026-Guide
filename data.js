/* ===== FIFA World Cup 2026 Guide — Data =====
   Fixtures and kickoff times based on official FIFA schedule.
   Verified against ESPN, Yahoo Sports, FOX Sports. */

const VENUES = {
  AZT: { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", flag: "🇲🇽", note: "Only stadium to host matches at three World Cups." },
  GDL: { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", flag: "🇲🇽", note: "Home of Chivas, famous volcanic-hill design." },
  MTY: { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", flag: "🇲🇽", note: "'El Gigante de Acero' with mountain views." },
  VAN: { name: "BC Place", city: "Vancouver", country: "Canada", flag: "🇨🇦", note: "Retractable roof on Canada's west coast." },
  TOR: { name: "BMO Field", city: "Toronto", country: "Canada", flag: "🇨🇦", note: "Expanded lakeside home of Toronto FC." },
  LA:  { name: "SoFi Stadium", city: "Los Angeles", country: "USA", flag: "🇺🇸", note: "$5B architectural marvel in Inglewood." },
  SF:  { name: "Levi's Stadium", city: "San Francisco Bay Area", country: "USA", flag: "🇺🇸", note: "Tech-forward venue in Santa Clara." },
  SEA: { name: "Lumen Field", city: "Seattle", country: "USA", flag: "🇺🇸", note: "One of the loudest grounds in North America." },
  DAL: { name: "AT&T Stadium", city: "Dallas", country: "USA", flag: "🇺🇸", note: "Giant-screen colossus hosting a semi-final." },
  HOU: { name: "NRG Stadium", city: "Houston", country: "USA", flag: "🇺🇸", note: "Air-conditioned dome in Texas heat." },
  KC:  { name: "Arrowhead Stadium", city: "Kansas City", country: "USA", flag: "🇺🇸", note: "Record-setting crowd noise." },
  ATL: { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", flag: "🇺🇸", note: "Pinwheel roof, semi-final stage." },
  MIA: { name: "Hard Rock Stadium", city: "Miami", country: "USA", flag: "🇺🇸", note: "Hosts the third-place match." },
  PHI: { name: "Lincoln Financial Field", city: "Philadelphia", country: "USA", flag: "🇺🇸", note: "Electric atmosphere in the City of Brotherly Love." },
  BOS: { name: "Gillette Stadium", city: "Boston", country: "USA", flag: "🇺🇸", note: "Foxborough's quarter-final stage." },
  NYC: { name: "MetLife Stadium", city: "New York / New Jersey", country: "USA", flag: "🇺🇸", note: "Stage for the 2026 World Cup Final." }
};

/* June 2026 DST: Mexico CDT (UTC-5), USA East EDT (UTC-4), Central CDT (UTC-5), Pacific PDT (UTC-7) */
const VENUE_TIMEZONES = {
  AZT: -300, GDL: -300, MTY: -300,
  VAN: -420, TOR: -240,
  LA: -420, SF: -420, SEA: -420,
  DAL: -300, HOU: -300, KC: -300,
  ATL: -240, MIA: -240, PHI: -240, BOS: -240, NYC: -240
};

const GROUPS = {
  A: ["Mexico", "South Africa", "South Korea", "Czechia"],
  B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Turkey"],
  E: ["Germany", "Curacao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};

/* flagpedia.net 2-letter ISO codes — used for <img> flags */
const TEAM_FLAG_CODE = {
  "Mexico": "mx", "South Africa": "za", "South Korea": "kr", "Czechia": "cz",
  "Canada": "ca", "Bosnia and Herzegovina": "ba", "Qatar": "qa", "Switzerland": "ch",
  "Brazil": "br", "Morocco": "ma", "Haiti": "ht", "Scotland": "gb-sct",
  "United States": "us", "Paraguay": "py", "Australia": "au", "Turkey": "tr", "India": "in",
  "Germany": "de", "Curacao": "cw", "Ivory Coast": "ci", "Ecuador": "ec",
  "Netherlands": "nl", "Japan": "jp", "Sweden": "se", "Tunisia": "tn",
  "Belgium": "be", "Egypt": "eg", "Iran": "ir", "New Zealand": "nz",
  "Spain": "es", "Cape Verde": "cv", "Saudi Arabia": "sa", "Uruguay": "uy",
  "France": "fr", "Senegal": "sn", "Iraq": "iq", "Norway": "no",
  "Argentina": "ar", "Algeria": "dz", "Austria": "at", "Jordan": "jo",
  "Portugal": "pt", "DR Congo": "cd", "Uzbekistan": "uz", "Colombia": "co",
  "England": "gb-eng", "Croatia": "hr", "Ghana": "gh", "Panama": "pa"
};

/* Returns an <img> flag tag for use in HTML */
function flagImgOf(team, size = 24) {
  const code = TEAM_FLAG_CODE[team];
  if (!code) return "⚽";
  return `<img src="https://flagpedia.net/data/flags/h80/${code}.png" alt="${team} flag" class="team-flag-img" width="${size}" height="${Math.round(size * 0.6)}" loading="lazy" onerror="this.style.display='none'">`;
}

/* Legacy emoji flag — kept for venue display only */
function flagOf(team) {
  return flagImgOf(team);
}

/* ===== RESULTS =====
   Update as tournament progresses. Format: matchNo: [homeGoals, awayGoals]
   Knockout penalties can be added as: matchNo: [homeGoals, awayGoals, homePens, awayPens] */
const RESULTS = {
  1: [2, 0], 2: [2, 1], 3: [1, 1], 4: [4, 1], 5: [1, 1], 6: [1, 1], 7: [0, 1], 8: [2, 0], 9: [7, 1], 10: [2, 2],
  11: [1, 0], 12: [5, 1], 13: [0, 0], 14: [1, 1], 15: [1, 1], 16: [2, 2], 17: [3, 1], 18: [1, 4], 19: [3, 0], 20: [3, 1],
  21: [1, 1], 22: [4, 2], 23: [1, 0], 24: [1, 3], 25: [1, 1], 26: [4, 1], 27: [6, 0], 28: [1, 0], 29: [2, 0], 30: [0, 1],
  31: [3, 0], 32: [0, 1], 33: [5, 1], 34: [2, 1], 35: [0, 0], 36: [0, 4], 37: [4, 0], 38: [0, 0], 39: [2, 2], 40: [1, 3],
  41: [2, 0], 42: [3, 0], 43: [3, 2], 44: [1, 2], 45: [5, 0], 46: [0, 0], 47: [0, 1], 48: [1, 0], 49: [2, 1], 50: [3, 1],
  51: [4, 2], 52: [0, 3], 53: [1, 0], 54: [0, 3],
};

const PAIRS = [[0, 1], [2, 3], [0, 2], [3, 1], [3, 0], [1, 2]];

/* Group-stage: [localDate, [[group, pairSlot, venueKey, localTime], ...]] */
const GS_PLAN = [
  ["2026-06-11", [["A",0,"AZT","14:00"],["A",1,"GDL","21:00"]]],
  ["2026-06-12", [["B",0,"TOR","15:00"],["D",0,"LA","18:00"]]],
  ["2026-06-13", [["B",1,"SF","12:00"],["C",0,"NYC","18:00"],["C",1,"BOS","21:00"],["D",1,"VAN","21:00"]]],
  ["2026-06-14", [["E",0,"HOU","12:00"],["F",0,"DAL","15:00"],["E",1,"PHI","19:00"],["F",1,"MTY","21:00"]]],
  ["2026-06-15", [["H",0,"ATL","12:00"],["G",0,"SEA","12:00"],["H",1,"MIA","18:00"],["G",1,"LA","18:00"]]],
  ["2026-06-16", [["I",0,"NYC","15:00"],["I",1,"BOS","18:00"],["J",0,"KC","20:00"],["J",1,"SF","21:00"]]],
  ["2026-06-17", [["K",0,"HOU","12:00"],["L",0,"DAL","15:00"],["L",1,"TOR","19:00"],["K",1,"AZT","21:00"]]],
  ["2026-06-18", [["A",3,"ATL","12:00"],["B",3,"LA","12:00"],["B",2,"VAN","15:00"],["A",2,"GDL","20:00"]]],
  ["2026-06-19", [["D",2,"SEA","12:00"],["C",3,"BOS","18:00"],["C",2,"PHI","20:30"],["D",3,"SF","20:00"]]],
  ["2026-06-20", [["F",2,"HOU","12:00"],["E",2,"TOR","16:00"],["E",3,"KC","19:00"],["F",3,"MTY","23:00"]]],
  ["2026-06-21", [["H",2,"ATL","12:00"],["G",2,"LA","12:00"],["H",3,"MIA","18:00"],["G",3,"VAN","18:00"]]],
  ["2026-06-22", [["J",2,"DAL","12:00"],["I",2,"PHI","17:00"],["I",3,"NYC","20:00"],["J",3,"SF","20:00"]]],
  ["2026-06-23", [["K",2,"HOU","12:00"],["L",2,"BOS","16:00"],["L",3,"TOR","19:00"],["K",3,"GDL","21:00"]]],
  ["2026-06-24", [["B",4,"VAN","12:00"],["B",5,"SEA","12:00"],["C",5,"MIA","18:00"],["C",4,"ATL","18:00"],["A",5,"AZT","20:00"],["A",4,"MTY","20:00"]]],
  ["2026-06-25", [["E",5,"PHI","16:00"],["E",4,"NYC","16:00"],["F",4,"DAL","18:00"],["F",5,"KC","18:00"],["D",4,"LA","19:00"],["D",5,"SF","19:00"]]],
  ["2026-06-26", [["I",4,"BOS","15:00"],["I",5,"TOR","15:00"],["H",5,"HOU","19:00"],["H",4,"GDL","19:00"],["G",4,"SEA","20:00"],["G",5,"VAN","20:00"]]],
  ["2026-06-27", [["L",4,"NYC","17:00"],["L",5,"PHI","17:00"],["K",4,"MIA","19:30"],["K",5,"ATL","19:30"],["J",4,"KC","21:00"],["J",5,"DAL","21:00"]]]
];

/* Knockout plan: [localDate, stage, home, away, venueKey, localTime] */
const KO_PLAN = [
  ["2026-06-28", "Round of 32", "Runner-up Group A", "Runner-up Group B", "LA", "12:00"],
  ["2026-06-29", "Round of 32", "Winner Group C", "Runner-up Group F", "HOU", "12:00"],
  ["2026-06-29", "Round of 32", "Winner Group E", "Best 3rd-placed (A/B/C/D/F)", "BOS", "16:30"],
  ["2026-06-29", "Round of 32", "Winner Group F", "Runner-up Group C", "MTY", "20:00"],
  ["2026-06-30", "Round of 32", "Runner-up Group E", "Runner-up Group I", "DAL", "12:00"],
  ["2026-06-30", "Round of 32", "Winner Group I", "Best 3rd-placed (C/D/F/G/H)", "NYC", "17:00"],
  ["2026-06-30", "Round of 32", "Winner Group A", "Best 3rd-placed (C/E/F/H/I)", "AZT", "20:00"],
  ["2026-07-01", "Round of 32", "Winner Group L", "Best 3rd-placed (E/H/I/J/K)", "ATL", "12:00"],
  ["2026-07-01", "Round of 32", "Winner Group G", "Best 3rd-placed (A/E/H/I/J)", "SEA", "13:00"],
  ["2026-07-01", "Round of 32", "Winner Group D", "Best 3rd-placed (B/E/F/I/J)", "SF", "17:00"],
  ["2026-07-02", "Round of 32", "Winner Group H", "Runner-up Group J", "LA", "12:00"],
  ["2026-07-02", "Round of 32", "Runner-up Group K", "Runner-up Group L", "TOR", "19:00"],
  ["2026-07-02", "Round of 32", "Winner Group B", "Best 3rd-placed (E/F/G/I/J)", "VAN", "20:00"],
  ["2026-07-03", "Round of 32", "Runner-up Group D", "Runner-up Group G", "DAL", "13:00"],
  ["2026-07-03", "Round of 32", "Winner Group J", "Runner-up Group H", "MIA", "18:00"],
  ["2026-07-03", "Round of 32", "Winner Group K", "Best 3rd-placed (D/E/I/J/L)", "KC", "20:30"],
  ["2026-07-04", "Round of 16", "Winner Match 75", "Winner Match 78", "HOU", "12:00"],
  ["2026-07-04", "Round of 16", "Winner Match 73", "Winner Match 76", "PHI", "17:00"],
  ["2026-07-05", "Round of 16", "Winner Match 74", "Winner Match 77", "NYC", "16:00"],
  ["2026-07-05", "Round of 16", "Winner Match 79", "Winner Match 80", "AZT", "19:00"],
  ["2026-07-06", "Round of 16", "Winner Match 83", "Winner Match 84", "DAL", "14:00"],
  ["2026-07-06", "Round of 16", "Winner Match 81", "Winner Match 82", "SEA", "17:00"],
  ["2026-07-07", "Round of 16", "Winner Match 87", "Winner Match 86", "ATL", "12:00"],
  ["2026-07-07", "Round of 16", "Winner Match 85", "Winner Match 88", "VAN", "13:00"],
  ["2026-07-09", "Quarter-final", "Winner Match 89", "Winner Match 90", "BOS", "16:00"],
  ["2026-07-10", "Quarter-final", "Winner Match 93", "Winner Match 94", "LA", "12:00"],
  ["2026-07-11", "Quarter-final", "Winner Match 91", "Winner Match 92", "MIA", "17:00"],
  ["2026-07-11", "Quarter-final", "Winner Match 95", "Winner Match 96", "KC", "20:00"],
  ["2026-07-14", "Semi-final", "Winner Match 97", "Winner Match 98", "DAL", "14:00"],
  ["2026-07-15", "Semi-final", "Winner Match 99", "Winner Match 100", "ATL", "15:00"],
  ["2026-07-18", "Third-place Match", "Loser Match 101", "Loser Match 102", "MIA", "17:00"],
  ["2026-07-19", "Final", "Winner Match 101", "Winner Match 102", "NYC", "15:00"]
];

/* ===== FIXED IST CONVERSION =====
   Keep UTC, use timeZone:'Asia/Kolkata' for display — no manual IST offset addition */
function toISTDateTime(date, time, venue) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const venueOffsetMinutes = VENUE_TIMEZONES[venue] ?? 0;
  /* Convert local venue time → UTC */
  const utcMillis = Date.UTC(year, month - 1, day, hour, minute) - venueOffsetMinutes * 60 * 1000;
  const utcDate = new Date(utcMillis);

  const istDate = utcDate.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const istTime = utcDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata"
  });
  const istFullDateTime = utcDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  }) + " IST";

  return { istDate, istTime, istFullDateTime };
}

function groupStandingsForKnockout() {
  const table = {};
  Object.entries(GROUPS).forEach(([g, teams]) => {
    teams.forEach((team) => {
      table[team] = { team, group: g, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    });
  });

  GS_PLAN.forEach(([, fixtures], dayIndex) => {
    fixtures.forEach(([g, slot], fixtureIndex) => {
      const matchNo = GS_PLAN.slice(0, dayIndex).reduce((sum, [, dayFixtures]) => sum + dayFixtures.length, 0) + fixtureIndex + 1;
      const result = RESULTS[matchNo];
      if (!result) return;

      const [homeIndex, awayIndex] = PAIRS[slot];
      const home = GROUPS[g][homeIndex];
      const away = GROUPS[g][awayIndex];
      const [hg, ag] = result;
      const H = table[home];
      const A = table[away];

      H.p++; A.p++;
      H.gf += hg; H.ga += ag;
      A.gf += ag; A.ga += hg;
      if (hg > ag) { H.w++; H.pts += 3; A.l++; }
      else if (hg < ag) { A.w++; A.pts += 3; H.l++; }
      else { H.d++; A.d++; H.pts++; A.pts++; }
    });
  });

  return table;
}

function compareTeamsForKnockout(a, b) {
  return b.pts - a.pts ||
    (b.gf - b.ga) - (a.gf - a.ga) ||
    b.gf - a.gf ||
    a.team.localeCompare(b.team);
}

function rankedGroupForKnockout(table, group) {
  return GROUPS[group].map((team) => table[team]).sort(compareTeamsForKnockout);
}

function bestThirdSlotAssignment(slots, bestThird) {
  const orderedSlots = [...slots].sort((a, b) => {
    const aCount = bestThird.filter((team) => a.allowedGroups.includes(team.group)).length;
    const bCount = bestThird.filter((team) => b.allowedGroups.includes(team.group)).length;
    return aCount - bCount;
  });
  const usedGroups = new Set();
  const assignment = {};

  function place(index) {
    if (index === orderedSlots.length) return true;
    const slot = orderedSlots[index];
    for (const team of bestThird) {
      if (!slot.allowedGroups.includes(team.group) || usedGroups.has(team.group)) continue;
      assignment[slot.label] = team;
      usedGroups.add(team.group);
      if (place(index + 1)) return true;
      usedGroups.delete(team.group);
      delete assignment[slot.label];
    }
    return false;
  }

  return place(0) ? assignment : {};
}

function knockoutSeedMap() {
  const table = groupStandingsForKnockout();
  const seeds = {};
  const thirdPlaced = [];

  Object.keys(GROUPS).forEach((group) => {
    const ranked = rankedGroupForKnockout(table, group);
    if (ranked.every((team) => team.p === 3)) {
      seeds[`Winner Group ${group}`] = ranked[0].team;
      seeds[`Runner-up Group ${group}`] = ranked[1].team;
      thirdPlaced.push(ranked[2]);
    }
  });

  const bestThird = thirdPlaced
    .filter((team) => team.p === 3)
    .sort(compareTeamsForKnockout)
    .slice(0, 8);

  const bestThirdSlots = [];
  KO_PLAN.forEach(([, , home, away]) => {
    [home, away].forEach((label) => {
      const match = label.match(/^Best 3rd-placed \(([^)]+)\)$/);
      if (match && !bestThirdSlots.some((slot) => slot.label === label)) {
        bestThirdSlots.push({
          label,
          allowedGroups: match[1].split("/").map((group) => group.trim())
        });
      }
    });
  });

  const bestThirdSeeds = bestThirdSlotAssignment(bestThirdSlots, bestThird);
  Object.entries(bestThirdSeeds).forEach(([label, team]) => {
    seeds[label] = team.team;
  });

  return seeds;
}

function winnerLoserFromResult(match, pick) {
  const result = RESULTS[match.no];
  if (!result) return null;
  let homeWon = result[0] > result[1];
  if (result[0] === result[1]) {
    if (result.length < 4 || result[2] === result[3]) return null;
    homeWon = result[2] > result[3];
  }
  if (pick === "Winner") return homeWon ? match.home : match.away;
  return homeWon ? match.away : match.home;
}

function resolveKnockoutTeam(label, seeds, matchesByNo) {
  if (seeds[label]) return seeds[label];

  const match = label.match(/^(Winner|Loser) Match (\d+)$/);
  if (!match) return label;

  const source = matchesByNo[Number(match[2])];
  if (!source) return label;

  return winnerLoserFromResult(source, match[1]) || label;
}

/* Build all 104 matches */
function buildMatches() {
  const matches = [];
  const matchesByNo = {};
  const seeds = knockoutSeedMap();
  let n = 1;
  GS_PLAN.forEach(([date, fixtures]) => {
    fixtures.forEach(([g, slot, venue, time]) => {
      const [a, b] = PAIRS[slot];
      const { istDate, istTime, istFullDateTime } = toISTDateTime(date, time, venue);
      const match = {
        no: n++, date: date, time: time, istDate: istDate, istTime: istTime, istFullDateTime: istFullDateTime, venue,
        stage: "Group Stage", group: g,
        home: GROUPS[g][a], away: GROUPS[g][b],
        matchday: slot < 2 ? 1 : slot < 4 ? 2 : 3
      };
      matches.push(match);
      matchesByNo[match.no] = match;
    });
  });
  KO_PLAN.forEach(([date, stage, home, away, venue, time]) => {
    const { istDate, istTime, istFullDateTime } = toISTDateTime(date, time, venue);
    const match = {
      no: n++,
      date: date,
      time: time,
      istDate: istDate,
      istTime: istTime,
      istFullDateTime: istFullDateTime,
      venue,
      stage,
      group: null,
      home: resolveKnockoutTeam(home, seeds, matchesByNo),
      away: resolveKnockoutTeam(away, seeds, matchesByNo)
    };
    matches.push(match);
    matchesByNo[match.no] = match;
  });
  return matches;
}

const MATCHES = buildMatches();

const PLAYERS = [
  { name: "Kylian Mbappe", country: "France", flagCode: "fr", club: "Real Madrid", pos: "Forward", blurb: "A World Cup winner at 19 and a hat-trick hero in the 2022 final. Now in his prime, he arrives chasing the one thing left: lifting the trophy as France's undisputed leader." },
  { name: "Lamine Yamal", country: "Spain", flagCode: "es", club: "Barcelona", pos: "Winger", blurb: "The teenage sensation who dazzled at Euro 2024. His left foot, audacity and vision make Spain's right flank the most-watched 30 meters of grass in the tournament." },
  { name: "Jude Bellingham", country: "England", flagCode: "gb-eng", club: "Real Madrid", pos: "Midfielder", blurb: "Box-to-box dominance, big-game goals and a captain's mentality. If England finally end the wait, Bellingham will be at the heart of it." },
  { name: "Vinicius Junior", country: "Brazil", flagCode: "br", club: "Real Madrid", pos: "Winger", blurb: "Electric pace, relentless dribbling and a flair for the decisive moment. Brazil's hopes of a sixth star ride on his shoulders." },
  { name: "Lionel Messi", country: "Argentina", flagCode: "ar", club: "Inter Miami", pos: "Forward", blurb: "The defending champion's farewell tour, on home-continent soil where he now plays his club football. Every touch could be a piece of history." },
  { name: "Erling Haaland", country: "Norway", flagCode: "no", club: "Manchester City", pos: "Striker", blurb: "The goal machine finally gets his World Cup debut as Norway return to the big stage. Expect records to feel nervous." },
  { name: "Jamal Musiala", country: "Germany", flagCode: "de", club: "Bayern Munich", pos: "Attacking Mid", blurb: "Slaloming runs and silk-smooth control. Musiala is the creative spark of a German side desperate to erase recent group-stage exits." },
  { name: "Cristiano Ronaldo", country: "Portugal", flagCode: "pt", club: "Al Nassr", pos: "Forward", blurb: "The greatest of all time returns to the World Cup stage with a point to prove. His leadership and goal-scoring prowess make him a nightmare for any defense." },
  { name: "Achraf Hakimi", country: "Morocco", flagCode: "ma", club: "Paris Saint-Germain", pos: "Right-back", blurb: "The world's most devastating attacking full-back leads the 2022 semi-finalists, who believe they can go even further this time." },
];

const FACTS = [
  {
    id: 1,
    text: "BRAZIL IS THE ONLY NATION TO PLAY EVERY WORLD CUP.",
    tag: "Eternal",
    country: "Brazil"
  },
  {
    id: 2,
    text: "MIROSLAV KLOSE HAS THE MOST WORLD CUP GOALS (16)",
    tag: "Legend",
    country: "Germany"
  },
  {
    id: 3,
    text: "Turkey's Hakan Şükür holds the record for the fastest goal in World Cup history, scoring just 11 seconds into a 2002 match !",
    tag: "Exclusive",
    country: "Turkey"
  },
  {
    id: 4,
    text: "INDIA ONCE QUALIFIED FOR THE 1950 WORLD CUP BUT DIDN'T PARTICIPATE DUE TO FINANCIAL ISSUES",
    tag: "History",
    country: "India"
  },
  {
    id: 5,
    text: "LIONEL MESSI IS THE ONLY PLAYER IN FIFA WORLD CUP HISTORY TO PLAY IN SIX WORLD CUPS, WIN THE WORLD CUP, AND CLAIM THE GOLDEN BALL AWARD TWICE.",
    tag: "GOAT",
    country: "Argentina"
  },
  {
    id: 6,
    text: "MOROCCO BECAME THE FIRST AFRICAN NATION TO REACH A MEN'S WORLD CUP SEMI-FINAL IN 2022.",
    tag: "Breakthrough",
    country: "Morocco"
  }
];