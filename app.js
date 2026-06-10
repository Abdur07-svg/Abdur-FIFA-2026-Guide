const fixtures = [
  ["2026-06-12", "12:30 AM", "Mexico vs South Africa", "Group A", "Mexico City"],
  ["2026-06-12", "7:30 AM", "South Korea vs Czechia", "Group A", "Zapopan"],
  ["2026-06-13", "12:30 AM", "Canada vs Bosnia and Herzegovina", "Group B", "Toronto"],
  ["2026-06-13", "6:30 AM", "USA vs Paraguay", "Group D", "Los Angeles"],
  ["2026-06-14", "12:30 AM", "Qatar vs Switzerland", "Group B", "Santa Clara"],
  ["2026-06-14", "3:30 AM", "Brazil vs Morocco", "Group C", "New Jersey"],
  ["2026-06-14", "6:30 AM", "Haiti vs Scotland", "Group C", "Foxborough"],
  ["2026-06-14", "9:30 AM", "Australia vs Turkey", "Group D", "Vancouver"],
  ["2026-06-14", "10:30 PM", "Germany vs Curacao", "Group E", "Houston"],
  ["2026-06-15", "1:30 AM", "Netherlands vs Japan", "Group F", "Arlington"],
  ["2026-06-15", "4:30 AM", "Ivory Coast vs Ecuador", "Group E", "Philadelphia"],
  ["2026-06-15", "7:30 AM", "Sweden vs Tunisia", "Group F", "Guadalajara"],
  ["2026-06-15", "9:30 PM", "Spain vs Cape Verde", "Group H", "Atlanta"],
  ["2026-06-16", "12:30 AM", "Belgium vs Egypt", "Group G", "Seattle"],
  ["2026-06-16", "3:30 AM", "Saudi Arabia vs Uruguay", "Group H", "Miami"],
  ["2026-06-16", "6:30 AM", "Iran vs New Zealand", "Group G", "Los Angeles"],
  ["2026-06-17", "12:30 AM", "France vs Senegal", "Group I", "New Jersey"],
  ["2026-06-17", "3:30 AM", "Iraq vs Norway", "Group I", "Foxborough"],
  ["2026-06-17", "6:30 AM", "Argentina vs Algeria", "Group J", "Kansas City"],
  ["2026-06-17", "9:30 AM", "Austria vs Jordan", "Group J", "Santa Clara"],
  ["2026-06-17", "10:30 PM", "Portugal vs DR Congo", "Group K", "Houston"],
  ["2026-06-18", "1:30 AM", "England vs Croatia", "Group L", "Arlington"],
  ["2026-06-18", "4:30 AM", "Ghana vs Panama", "Group L", "Toronto"],
  ["2026-06-18", "7:30 AM", "Uzbekistan vs Colombia", "Group K", "Mexico City"],
  ["2026-06-18", "9:30 PM", "Czechia vs South Africa", "Group A", "Atlanta"],
  ["2026-06-19", "12:30 AM", "Switzerland vs Bosnia and Herzegovina", "Group B", "Los Angeles"],
  ["2026-06-19", "3:30 AM", "Canada vs Qatar", "Group B", "Vancouver"],
  ["2026-06-19", "6:30 AM", "Mexico vs South Korea", "Group A", "Zapopan"],
  ["2026-06-20", "12:30 AM", "USA vs Australia", "Group D", "Seattle"],
  ["2026-06-20", "3:30 AM", "Scotland vs Morocco", "Group C", "Foxborough"],
  ["2026-06-20", "6:00 AM", "Brazil vs Haiti", "Group C", "Philadelphia"],
  ["2026-06-20", "8:30 AM", "Turkey vs Paraguay", "Group D", "Santa Clara"],
  ["2026-06-20", "10:30 PM", "Netherlands vs Sweden", "Group F", "Houston"],
  ["2026-06-21", "1:30 AM", "Germany vs Ivory Coast", "Group E", "Toronto"],
  ["2026-06-21", "5:30 AM", "Ecuador vs Curacao", "Group E", "Kansas City"],
  ["2026-06-21", "9:30 AM", "Tunisia vs Japan", "Group F", "Guadalajara"],
  ["2026-06-21", "9:30 PM", "Spain vs Saudi Arabia", "Group H", "Atlanta"],
  ["2026-06-22", "12:30 AM", "Belgium vs Iran", "Group G", "Los Angeles"],
  ["2026-06-22", "3:30 AM", "Uruguay vs Cape Verde", "Group H", "Miami"],
  ["2026-06-22", "6:30 AM", "New Zealand vs Egypt", "Group G", "Vancouver"],
  ["2026-06-22", "10:30 PM", "Argentina vs Austria", "Group J", "Arlington"],
  ["2026-06-23", "2:30 AM", "France vs Iraq", "Group I", "Philadelphia"],
  ["2026-06-23", "5:30 AM", "Norway vs Senegal", "Group I", "Toronto"],
  ["2026-06-23", "8:30 AM", "Jordan vs Algeria", "Group J", "Santa Clara"],
  ["2026-06-23", "10:30 PM", "Portugal vs Uzbekistan", "Group K", "Houston"],
  ["2026-06-24", "1:30 AM", "England vs Ghana", "Group L", "Foxborough"],
  ["2026-06-24", "4:30 AM", "Panama vs Croatia", "Group L", "Toronto"],
  ["2026-06-24", "7:30 AM", "Colombia vs DR Congo", "Group K", "Zapopan"],
  ["2026-06-25", "12:30 AM", "Switzerland vs Canada", "Group B", "Vancouver"],
  ["2026-06-25", "12:30 AM", "Bosnia and Herzegovina vs Qatar", "Group B", "Seattle"],
  ["2026-06-25", "3:30 AM", "Morocco vs Haiti", "Group C", "Atlanta"],
  ["2026-06-25", "3:30 AM", "Scotland vs Brazil", "Group C", "Miami"],
  ["2026-06-25", "6:30 AM", "South Africa vs South Korea", "Group A", "Guadalajara"],
  ["2026-06-25", "6:30 AM", "Czechia vs Mexico", "Group A", "Mexico City"],
  ["2026-06-26", "1:30 AM", "Curacao vs Ivory Coast", "Group E", "Philadelphia"],
  ["2026-06-26", "1:30 AM", "Ecuador vs Germany", "Group E", "New Jersey"],
  ["2026-06-26", "4:30 AM", "Tunisia vs Netherlands", "Group F", "Kansas City"],
  ["2026-06-26", "4:30 AM", "Japan vs Sweden", "Group F", "Arlington"],
  ["2026-06-26", "7:30 AM", "Turkey vs USA", "Group D", "Los Angeles"],
  ["2026-06-26", "7:30 AM", "Paraguay vs Australia", "Group D", "Santa Clara"],
  ["2026-06-27", "12:30 AM", "Norway vs France", "Group I", "Foxborough"],
  ["2026-06-27", "12:30 AM", "Senegal vs Iraq", "Group I", "Toronto"],
  ["2026-06-27", "5:30 AM", "Cape Verde vs Saudi Arabia", "Group H", "Houston"],
  ["2026-06-27", "5:30 AM", "Uruguay vs Spain", "Group H", "Zapopan"],
  ["2026-06-27", "8:30 AM", "New Zealand vs Belgium", "Group G", "Vancouver"],
  ["2026-06-27", "8:30 AM", "Egypt vs Iran", "Group G", "Seattle"],
  ["2026-06-28", "2:30 AM", "Panama vs England", "Group L", "New Jersey"],
  ["2026-06-28", "2:30 AM", "Croatia vs Ghana", "Group L", "Philadelphia"],
  ["2026-06-28", "5:00 AM", "Colombia vs Portugal", "Group K", "Miami"],
  ["2026-06-28", "5:00 AM", "DR Congo vs Uzbekistan", "Group K", "Atlanta"],
  ["2026-06-28", "7:30 AM", "Algeria vs Austria", "Group J", "Kansas City"],
  ["2026-06-28", "7:30 AM", "Jordan vs Argentina", "Group J", "Arlington"],
  ["2026-06-29", "12:30 AM", "Group A runners-up vs Group B runners-up", "Round of 32", "Los Angeles"],
  ["2026-06-29", "10:30 PM", "Group C winners vs Group F runners-up", "Round of 32", "Houston"],
  ["2026-06-30", "2:00 AM", "Group E winners vs Best third-placed team", "Round of 32", "Foxborough"],
  ["2026-06-30", "6:30 AM", "Group F winners vs Group C runners-up", "Round of 32", "Guadalajara"],
  ["2026-06-30", "10:30 PM", "Group E runners-up vs Group I runners-up", "Round of 32", "Arlington"],
  ["2026-07-01", "2:30 AM", "Group I winners vs Best third-placed team", "Round of 32", "New Jersey"],
  ["2026-07-01", "6:30 AM", "Group A winners vs Best third-placed team", "Round of 32", "Mexico City"],
  ["2026-07-01", "9:30 PM", "Group L winners vs Best third-placed team", "Round of 32", "Atlanta"],
  ["2026-07-02", "1:30 AM", "Group G winners vs Best third-placed team", "Round of 32", "Seattle"],
  ["2026-07-02", "1:30 AM", "Group D winners vs Best third-placed team", "Round of 32", "Santa Clara"],
  ["2026-07-02", "5:30 AM", "Group H winners vs Group J runners-up", "Round of 32", "Los Angeles"],
  ["2026-07-03", "12:30 AM", "Group K runners-up vs Group L runners-up", "Round of 32", "Toronto"],
  ["2026-07-03", "4:30 AM", "Group B winners vs Best third-placed team", "Round of 32", "Vancouver"],
  ["2026-07-03", "8:30 AM", "Group D runners-up vs Group G runners-up", "Round of 32", "Arlington"],
  ["2026-07-03", "11:30 PM", "Group J winners vs Group H runners-up", "Round of 32", "Miami"],
  ["2026-07-04", "3:30 AM", "Group K winners vs Best third-placed team", "Round of 32", "Kansas City"],
  ["2026-07-04", "7:00 AM", "Winner Match 73 vs Winner Match 75", "Round of 16", "Houston"],
  ["2026-07-04", "10:30 PM", "Winner Match 74 vs Winner Match 77", "Round of 16", "Philadelphia"],
  ["2026-07-05", "2:30 AM", "Winner Match 76 vs Winner Match 78", "Round of 16", "New Jersey"],
  ["2026-07-06", "1:30 AM", "Winner Match 79 vs Winner Match 80", "Round of 16", "Mexico City"],
  ["2026-07-06", "5:30 AM", "Winner Match 83 vs Winner Match 84", "Round of 16", "Arlington"],
  ["2026-07-07", "1:30 AM", "Winner Match 81 vs Winner Match 82", "Round of 16", "Seattle"],
  ["2026-07-07", "9:30 PM", "Winner Match 86 vs Winner Match 88", "Round of 16", "Atlanta"],
  ["2026-07-08", "1:30 AM", "Winner Match 85 vs Winner Match 87", "Round of 16", "Vancouver"],
  ["2026-07-10", "1:30 AM", "Winner Match 89 vs Winner Match 90", "Quarterfinal", "Foxborough"],
  ["2026-07-11", "12:30 AM", "Winner Match 93 vs Winner Match 94", "Quarterfinal", "Los Angeles"],
  ["2026-07-12", "2:30 AM", "Winner Match 91 vs Winner Match 92", "Quarterfinal", "Miami"],
  ["2026-07-12", "6:30 AM", "Winner Match 95 vs Winner Match 96", "Quarterfinal", "Kansas City"],
  ["2026-07-15", "12:30 AM", "Winner Match 97 vs Winner Match 98", "Semifinal", "Arlington"],
  ["2026-07-16", "12:30 AM", "Winner Match 99 vs Winner Match 100", "Semifinal", "Atlanta"],
  ["2026-07-19", "2:30 AM", "Loser Match 101 vs Loser Match 102", "Third-place match", "Miami"],
  ["2026-07-20", "12:30 AM", "Winner Match 101 vs Winner Match 102", "Final", "New Jersey"]
].map(([date, time, title, stage, venue], index) => ({
  id: index + 1,
  date,
  time,
  title,
  stage,
  venue
}));

const players = [
  { name: "Cristiano Ronaldo", team: "Portugal", role: "Captain scorer", note: "Ronaldo is NOT just a player for Portugal. He plays multiple critical roles at once on the world stage.", initials: "CR", chips: ["finishing", "leadership", "counters"] },
  { name: "Kylian Mbappe", team: "France", role: "Explosive forward", note: "Still the nightmare transition runner. France can win games by turning one loose pass into a sprint lane.", initials: "KM", chips: ["pace", "finishing", "big-stage"] },
  { name: "Lionel Messi", team: "Argentina", role: "Creator", note: "The defending champions still bend around his timing, passing angles, and set-piece gravity.", initials: "LM", chips: ["vision", "control", "legacy"] },
  { name: "Erling Haaland", team: "Norway", role: "Penalty-box force", note: "Norway's ceiling jumps if service arrives early. One touch can change the whole group.", initials: "EH", chips: ["power", "movement", "golden boot"] },
  { name: "Jude Bellingham", team: "England", role: "Midfield leader", note: "Carries the ball, attacks the box, and gives England a rare blend of edge and poise.", initials: "JB", chips: ["duels", "runs", "tempo"] },
  { name: "Vinicius Junior", team: "Brazil", role: "Left-side breaker", note: "If Brazil isolate him high and wide, fullbacks spend the night defending backwards.", initials: "VJ", chips: ["1v1", "speed", "chance creation"] },
];

const groups = [
  { group: "A", teams: [["mx", "Mexico", "Host"], ["za", "South Africa", "CAF"], ["kr", "South Korea", "AFC"], ["cz", "Czech Republic", "UEFA"]], breakdown: "A balanced opener group: home pressure for Mexico, South Korea's speed, and Czech structure." },
  { group: "B", teams: [["ca", "Canada", "Host"], ["ba", "Bosnia and Herzegovina", "UEFA"], ["qa", "Qatar", "AFC"], ["ch", "Switzerland", "UEFA"]], breakdown: "Canada get home energy, but Switzerland bring the most tournament-tested profile." },
  { group: "C", teams: [["br", "Brazil", "CONMEBOL"], ["ma", "Morocco", "CAF"], ["ht", "Haiti", "CONCACAF"], ["gb-sct", "Scotland", "UEFA"]], breakdown: "Brazil-Morocco is a heavyweight tone-setter; Scotland and Haiti make the group awkward." },
  { group: "D", teams: [["us", "United States", "Host"], ["py", "Paraguay", "CONMEBOL"], ["au", "Australia", "AFC"], ["tr", "Turkey", "UEFA"]], breakdown: "The U.S. face varied problems: Paraguay's bite, Australia's directness, Turkey's volatility." },
  { group: "E", teams: [["de", "Germany", "UEFA"], ["cw", "Curacao", "CONCACAF"], ["ci", "Ivory Coast", "CAF"], ["ec", "Ecuador", "CONMEBOL"]], breakdown: "Germany headline it, while Ecuador and Ivory Coast make second place fiercely contested." },
  { group: "F", teams: [["nl", "Netherlands", "UEFA"], ["jp", "Japan", "AFC"], ["se", "Sweden", "UEFA"], ["tn", "Tunisia", "CAF"]], breakdown: "Tactical group of the tournament candidate: pressing, structure, and very few soft minutes." },
  { group: "G", teams: [["be", "Belgium", "UEFA"], ["eg", "Egypt", "CAF"], ["ir", "Iran", "AFC"], ["nz", "New Zealand", "OFC"]], breakdown: "Belgium have the ranking edge; Egypt and Iran can turn matches into narrow margins." },
  { group: "H", teams: [["es", "Spain", "UEFA"], ["cv", "Cape Verde", "CAF"], ["sa", "Saudi Arabia", "AFC"], ["uy", "Uruguay", "CONMEBOL"]], breakdown: "Spain and Uruguay bring pedigree, but Cape Verde's debut makes this a story group." },
  { group: "I", teams: [["fr", "France", "UEFA"], ["sn", "Senegal", "CAF"], ["iq", "Iraq", "AFC"], ["no", "Norway", "UEFA"]], breakdown: "Star power everywhere: France's depth, Senegal's athleticism, and Haaland's finishing threat." },
  { group: "J", teams: [["ar", "Argentina", "CONMEBOL"], ["dz", "Algeria", "CAF"], ["at", "Austria", "UEFA"], ["jo", "Jordan", "AFC"]], breakdown: "Argentina start as the reference point; Austria and Algeria both have upset DNA." },
  { group: "K", teams: [["pt", "Portugal", "UEFA"], ["cd", "DR Congo", "CAF"], ["uz", "Uzbekistan", "AFC"], ["co", "Colombia", "CONMEBOL"]], breakdown: "Portugal and Colombia add glamour; Uzbekistan's debut makes every point feel historic." },
  { group: "L", teams: [["gb-eng", "England", "UEFA"], ["hr", "Croatia", "UEFA"], ["gh", "Ghana", "CAF"], ["pa", "Panama", "CONCACAF"]], breakdown: "England-Croatia gives the group instant bite, with Ghana capable of stretching anyone." }
];

const scheduleList = document.querySelector("#scheduleList");
const calendarMonths = document.querySelector("#calendarMonths");
const selectedDateTitle = document.querySelector("#selectedDateTitle");
const groupsGrid = document.querySelector("#groupsGrid");
const playerGrid = document.querySelector("#playerGrid");

let selectedDate = "2026-06-12";

function getFixturesByDate(date) {
  return fixtures.filter((fixture) => fixture.date === date);
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T12:00:00+05:30`));
}

function renderFixtures(date = selectedDate) {
  const dayFixtures = getFixturesByDate(date);
  selectedDate = date;
  selectedDateTitle.textContent = formatLongDate(date);
  scheduleList.innerHTML = dayFixtures
    .map((fixture) => `
      <article class="fixture">
        <span class="date-pill">${fixture.time} IST</span>
        <div>
          <h3>${fixture.title}</h3>
          <p>${fixture.stage} / ${fixture.venue}</p>
        </div>
        <span class="tag">Match ${fixture.id}</span>
        <span class="channel">${fixture.stage}</span>
      </article>
    `)
    .join("");
}

function renderCalendar() {
  const matchDates = new Set(fixtures.map((fixture) => fixture.date));
  const monthConfig = [
    { year: 2026, month: 5, name: "June 2026", days: 30 },
    { year: 2026, month: 6, name: "July 2026", days: 31 }
  ];

  calendarMonths.innerHTML = monthConfig.map((month) => {
    const firstDay = new Date(month.year, month.month, 1).getDay();
    const blanks = Array.from({ length: firstDay }, () => `<span class="calendar-blank"></span>`).join("");
    const days = Array.from({ length: month.days }, (_, index) => {
      const day = index + 1;
      const date = `${month.year}-${String(month.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const hasMatch = matchDates.has(date);
      const count = getFixturesByDate(date).length;
      return `
        <button
          class="calendar-day ${hasMatch ? "has-match" : ""} ${date === selectedDate ? "selected" : ""}"
          data-date="${date}"
          ${hasMatch ? "" : "disabled"}
          aria-label="${hasMatch ? `${formatLongDate(date)}, ${count} matches` : `${formatLongDate(date)}, no match`}"
        >
          <span>${day}</span>
          ${hasMatch ? `<small>${count}</small>` : ""}
        </button>
      `;
    }).join("");

    return `
      <section class="calendar-month">
        <h3>${month.name}</h3>
        <div class="calendar-weekdays" aria-hidden="true">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div class="calendar-grid">${blanks}${days}</div>
      </section>
    `;
  }).join("");

  calendarMonths.querySelectorAll(".calendar-day.has-match").forEach((button) => {
    button.addEventListener("click", () => {
      renderFixtures(button.dataset.date);
      renderCalendar();
    });
  });
}

function renderPlayers() {
  playerGrid.innerHTML = players.map((player) => `
    <article class="player-card">
      <div class="player-top">
        <div>
          <h3>${player.name}</h3>
          <p><strong>${player.team}</strong> / ${player.role}</p>
        </div>
        <div class="avatar" aria-hidden="true">${player.initials}</div>
      </div>
      <p>${player.note}</p>
      <div class="stat-row">${player.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderGroups(query = "") {
  const normalized = query.trim().toLowerCase();
  groupsGrid.innerHTML = groups
    .filter((group) => {
      const haystack = `${group.group} ${group.teams.map((team) => team[1]).join(" ")}`.toLowerCase();
      return haystack.includes(normalized);
    })
    .map((group) => `
      <article class="group-card">
        <div class="group-title">
          <h3>Group ${group.group}</h3>
          <span>${group.teams.length} teams</span>
        </div>
        <div class="teams">
          ${group.teams.map((team) => `
            <div class="team">
              <strong><img class="flag" src="https://flagcdn.com/w40/${team[0]}.png" alt="" loading="lazy" />${team[1]}</strong>
              <span>${team[2]}</span>
            </div>
          `).join("")}
        </div>
        <p class="breakdown">${group.breakdown}</p>
      </article>
    `)
    .join("");
}

document.querySelector("#teamSearch").addEventListener("input", (event) => {
  renderGroups(event.target.value);
});

renderFixtures();
renderCalendar();
renderPlayers();
renderGroups();
