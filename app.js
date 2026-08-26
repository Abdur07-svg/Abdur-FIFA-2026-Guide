/* ===== FIFA World Cup 2026 Archive — App ===== */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Real Vector SVG Icons ---------- */
const ICONS = {
  trophy: `<svg class="svg-icon svg-trophy gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"></path><path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2Z"></path></svg>`,
  star: `<svg class="svg-icon gold fill-current" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  boot: `<svg class="svg-icon gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-3a2 2 0 0 1 2-2h4l4-5h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M4 19h16"></path><circle cx="8" cy="16" r="1"></circle><circle cx="14" cy="16" r="1"></circle></svg>`,
  glove: `<svg class="svg-icon gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg>`,
  bolt: `<svg class="svg-icon gold fill-current" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  search: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  calendar: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  list: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
  sparkles: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`,
  cross: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

/* ---------- Confetti Celebration ---------- */
function runConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const resizeHandler = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resizeHandler);

  const colors = ["#ffd700", "#ff9f1c", "#2dd4a7", "#4f8dff", "#ff5d73", "#ffffff", "#c084fc"];
  const pieces = [];
  const count = 130;

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * width,
      y: Math.random() * height - height * 0.8,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3.5 + 2.5,
      speedX: Math.random() * 2.5 - 1.25,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 7 - 3.5,
      opacity: 1
    });
  }

  let startTime = Date.now();
  function animate() {
    ctx.clearRect(0, 0, width, height);
    const elapsed = Date.now() - startTime;
    let alive = false;

    pieces.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      if (elapsed > 2800) p.opacity -= 0.02;

      if (p.opacity > 0 && p.y < height + 40) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
        ctx.restore();
      }
    });

    if (alive && elapsed < 5500) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }
  requestAnimationFrame(animate);
}

/* ---------- Helpers ---------- */
const STAGES = ["Group Stage", "Round of 32", "Round of 16", "Quarter-final", "Semi-final", "Third-place Match", "Final"];

function fmtDate(iso) {
  return new Date(iso + "T12:00:00+05:30").toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", timeZone: "Asia/Kolkata"
  });
}

function stageTagClass(stage) {
  if (stage === "Group Stage") return "stage-group";
  if (stage === "Final" || stage === "Third-place Match") return "stage-final";
  return "stage-ko";
}

/* Returns flag <img> + team name span */
function teamLabel(name) {
  return `<span class="team-label">${flagImgOf(name)} <span>${esc(name)}</span></span>`;
}

function matchRowHTML(m) {
  const v = VENUES[m.venue];
  const r = RESULTS[m.no];
  const stageLabel = m.stage === "Group Stage" ? `Group ${m.group} · MD${m.matchday}` : m.stage;
  
  let homeWon = false, awayWon = false;
  if (r) {
    if (r[0] > r[1]) homeWon = true;
    else if (r[1] > r[0]) awayWon = true;
    else if (r.length >= 4) {
      homeWon = r[2] > r[3];
      awayWon = r[3] > r[2];
    }
  }

  const trophySvg = `<span style="color:var(--gold);display:inline-flex;margin-left:4px;">${ICONS.trophy}</span>`;
  const homeMiddle = `<span class="team-label ${homeWon ? 'winner' : ''}">${flagImgOf(m.home)} <span style="${homeWon ? 'font-weight:700;color:#fff;' : ''}">${esc(m.home)}${homeWon ? trophySvg : ''}</span></span>`;
  const awayMiddle = `<span class="team-label ${awayWon ? 'winner' : ''}">${flagImgOf(m.away)} <span style="${awayWon ? 'font-weight:700;color:#fff;' : ''}">${esc(m.away)}${awayWon ? trophySvg : ''}</span></span>`;

  const middle = r
    ? `<span class="score" style="font-weight:800;color:var(--gold);">${r[0]} – ${r[1]}${r.length >= 4 ? ` <small style="font-size:0.7em;color:var(--muted)">(${r[2]}-${r[3]}p)</small>` : ''}</span>`
    : '<span class="vs">VS</span>';
  const timeTag = r
    ? '<span class="tag time ft">FT</span>'
    : `<span class="tag time">${esc(m.istFullDateTime)}</span>`;
  return `
    <div class="match-row ${homeWon ? 'winner-home' : awayWon ? 'winner-away' : ''}">
      <div class="match-no"><strong>${m.no}</strong><span>Match</span></div>
      <div>
        <div class="match-teams">${homeMiddle}${middle}${awayMiddle}</div>
        <div class="match-meta">${v ? v.flag : ''} ${v ? esc(v.name) : ''} · ${v ? esc(v.city) : ''} · ${esc(m.time)} local</div>
      </div>
      <div class="match-tags">
        <span class="tag ${stageTagClass(m.stage)}">${esc(stageLabel)}</span>
        ${timeTag}
      </div>
    </div>`;
}

/* ---------- Calendar ---------- */
const matchesByDate = {};
MATCHES.forEach((m) => (matchesByDate[m.istDate] = matchesByDate[m.istDate] || []).push(m));
let selectedDate = null;

function renderCalendar() {
  const months = [[2026, 5, "June 2026"], [2026, 6, "July 2026"]];
  const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  $("#calendar").innerHTML = months.map(([y, mo, label]) => {
    const firstDow = new Date(Date.UTC(y, mo, 1)).getUTCDay();
    const days = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate();
    let cells = dows.map((d) => `<div class="cal-dow">${d}</div>`).join("");
    for (let i = 0; i < firstDow; i++) cells += '<div class="cal-day off"></div>';
    for (let d = 1; d <= days; d++) {
      const iso = `${y}-${String(mo + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dayMatches = matchesByDate[iso];
      const cls = ["cal-day", dayMatches ? "has-match" : "", iso === selectedDate ? "selected" : ""].join(" ");
      cells += dayMatches
        ? `<button type="button" class="${cls}" data-date="${iso}"><span>${d}</span><span class="count">${dayMatches.length}</span></button>`
        : `<div class="${cls}"><span>${d}</span></div>`;
    }
    return `<div class="cal-month"><h3>${label}</h3><div class="cal-grid">${cells}</div></div>`;
  }).join("");
}

function renderDayPanel() {
  const el = $("#day-panel");
  if (!selectedDate || !matchesByDate[selectedDate]) {
    el.innerHTML = '<p class="result-count">Select a highlighted date to see its completed matches.</p>';
    return;
  }
  const ms = matchesByDate[selectedDate];
  el.innerHTML = `
    <div class="day-block">
      <h3>${fmtDate(selectedDate)} · ${ms.length} match${ms.length > 1 ? "es" : ""}</h3>
      ${ms.map(matchRowHTML).join("")}
    </div>`;
}

function initCalendar() {
  const finalDate = "2026-07-20";
  selectedDate = matchesByDate[finalDate] ? finalDate : Object.keys(matchesByDate).sort()[0] || "2026-06-12";
  renderCalendar();
  renderDayPanel();
  $("#calendar").addEventListener("click", (e) => {
    const btn = e.target.closest(".cal-day.has-match");
    if (!btn) return;
    selectedDate = btn.dataset.date;
    renderCalendar();
    renderDayPanel();
  });
}

/* ---------- List view ---------- */
function renderSchedule() {
  const stage = $("#f-stage").value;
  const group = $("#f-group").value;
  const city = $("#f-city").value;
  const q = $("#f-search").value.trim().toLowerCase();

  const filtered = MATCHES.filter((m) => {
    const v = VENUES[m.venue];
    if (stage && m.stage !== stage) return false;
    if (group && m.group !== group) return false;
    if (city && v.city !== city) return false;
    if (q) {
      const hay = `${m.home} ${m.away} ${v.name} ${v.city} match ${m.no} #${m.no} ${m.stage} ${m.group ? "group " + m.group : ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  $("#result-count").textContent = `Showing ${filtered.length} of ${MATCHES.length} matches`;

  const byDate = {};
  filtered.forEach((m) => (byDate[m.istDate] = byDate[m.istDate] || []).push(m));

  $("#schedule-list").innerHTML = Object.keys(byDate).sort().map((date) => `
    <div class="day-block">
      <h3>${fmtDate(date)}</h3>
      ${byDate[date].map(matchRowHTML).join("")}
    </div>`).join("") || '<p class="result-count">No matches found. Try clearing a filter.</p>';
}

function initFilters() {
  $("#f-stage").innerHTML = '<option value="">All stages</option>' + STAGES.map((s) => `<option>${s}</option>`).join("");
  $("#f-group").innerHTML = '<option value="">All groups</option>' + Object.keys(GROUPS).map((g) => `<option value="${g}">Group ${g}</option>`).join("");
  const cities = [...new Set(Object.values(VENUES).map((v) => v.city))].sort();
  $("#f-city").innerHTML = '<option value="">All host cities</option>' + cities.map((c) => `<option>${esc(c)}</option>`).join("");
  ["#f-stage", "#f-group", "#f-city"].forEach((id) => $(id).addEventListener("change", renderSchedule));
  $("#f-search").addEventListener("input", renderSchedule);
  $("#f-reset").addEventListener("click", () => {
    ["#f-stage", "#f-group", "#f-city", "#f-search"].forEach((id) => ($(id).value = ""));
    renderSchedule();
  });
}

function initViewToggle() {
  const calBtn = $("#view-cal"), listBtn = $("#view-list");
  if (!calBtn || !listBtn) return;
  calBtn.addEventListener("click", () => {
    calBtn.classList.add("active"); listBtn.classList.remove("active");
    $("#cal-wrap").classList.remove("hidden"); $("#list-wrap").classList.add("hidden");
  });
  listBtn.addEventListener("click", () => {
    listBtn.classList.add("active"); calBtn.classList.remove("active");
    $("#list-wrap").classList.remove("hidden"); $("#cal-wrap").classList.add("hidden");
  });
}

/* ---------- Tournament Awards ---------- */
function renderAwards() {
  const grid = $("#awards-grid");
  if (!grid || typeof TOURNAMENT_AWARDS === "undefined") return;

  grid.innerHTML = TOURNAMENT_AWARDS.map((a) => {
    const iconSvg = ICONS[a.iconKey] || ICONS.trophy;
    return `
      <div class="award-card" style="cursor:pointer;" data-team="${esc(a.team)}" title="Click to view ${esc(a.team)} matches">
        <div class="award-top">
          <div class="award-icon-box">${iconSvg}</div>
          <span class="award-badge-pill">${esc(a.badge)}</span>
        </div>
        <h3>${esc(a.title)}</h3>
        <div class="award-player-name">
          ${flagImgOf(a.team, 22)}
          <span>${esc(a.player)}</span>
        </div>
        <p class="award-role">${esc(a.role)} · ${esc(a.team)}</p>
        <p class="award-desc">${esc(a.desc)}</p>
        <span class="click-hint">View ${esc(a.team)} Journey &rarr;</span>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".award-card").forEach((card) => {
    card.addEventListener("click", () => {
      const team = card.dataset.team;
      if (team) openTeamModal(team);
    });
  });
}

/* ---------- Best Third-Place Teams ---------- */
function renderBestThird() {
  const table = computeStandings();
  const thirdPlaced = [];

  Object.keys(GROUPS).forEach((g) => {
    const ranked = sortedGroup(table, g);
    if (ranked[2]) {
      thirdPlaced.push({ ...ranked[2], rank: 3 });
    }
  });

  thirdPlaced.sort((a, b) =>
    b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.team.localeCompare(b.team)
  );

  const wrap = $("#best-third-table-wrap");
  if (!wrap) return;

  wrap.innerHTML = `
    <table class="group-table best-third-table">
      <thead>
        <tr>
          <th>#</th>
          <th class="tname">Team</th>
          <th>Group</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${thirdPlaced.map((s, i) => {
          const qualified = i < 8;
          const statusClass = qualified ? "bt-qualified" : "bt-eliminated";
          return `
            <tr class="team-row ${statusClass}" data-team="${esc(s.team)}" title="View ${esc(s.team)} stats">
              <td>${i + 1}</td>
              <td class="tname">
                <span class="team-label">
                  ${flagImgOf(s.team, 22)}
                  <span>${esc(s.team)}</span>
                </span>
              </td>
              <td><span class="bt-group-badge">${s.group}</span></td>
              <td>${s.p}</td>
              <td>${s.w}</td>
              <td>${s.d}</td>
              <td>${s.l}</td>
              <td>${s.gf - s.ga > 0 ? "+" : ""}${s.gf - s.ga}</td>
              <td class="pts">${s.pts}</td>
            </tr>`;
        }).join("")}
      </tbody>
    </table>
    <p class="bt-footnote">Top 8 third-placed teams qualified for the Round of 32. Rank determined by Points &rarr; Goal Difference &rarr; Goals Scored.</p>`;

  wrap.querySelectorAll(".team-row").forEach((row) => {
    row.addEventListener("click", () => openTeamModal(row.dataset.team));
  });
}

/* ---------- Standings ---------- */
function computeStandings() {
  const table = {};
  Object.entries(GROUPS).forEach(([g, teams]) => teams.forEach((t) => {
    table[t] = { team: t, group: g, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
  }));
  MATCHES.forEach((m) => {
    if (m.stage !== "Group Stage" || !RESULTS[m.no]) return;
    const [hg, ag] = RESULTS[m.no];
    const H = table[m.home], A = table[m.away];
    H.p++; A.p++;
    H.gf += hg; H.ga += ag;
    A.gf += ag; A.ga += hg;
    if (hg > ag) { H.w++; H.pts += 3; A.l++; }
    else if (hg < ag) { A.w++; A.pts += 3; H.l++; }
    else { H.d++; A.d++; H.pts++; A.pts++; }
  });
  return table;
}

function sortedGroup(table, g) {
  return GROUPS[g].map((t) => table[t]).sort((a, b) =>
    b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.team.localeCompare(b.team)
  );
}

function renderGroups() {
  const grid = $("#groups-grid");
  if (!grid) return;
  const table = computeStandings();
  grid.innerHTML = Object.keys(GROUPS).map((g) => `
    <article class="group-card">
      <h3>Group ${g}</h3>
      <table class="group-table">
        <thead><tr><th>#</th><th class="tname">Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead>
        <tbody>
          ${sortedGroup(table, g).map((s, i) => `
            <tr class="team-row" data-team="${esc(s.team)}" title="View ${esc(s.team)} stats">
              <td>${i + 1}</td>
              <td class="tname">
                <span class="team-label">
                  ${flagImgOf(s.team, 22)}
                  <span>${esc(s.team)}</span>
                </span>
              </td>
              <td>${s.p}</td><td>${s.w}</td><td>${s.d}</td><td>${s.l}</td>
              <td>${s.gf - s.ga > 0 ? "+" : ""}${s.gf - s.ga}</td>
              <td class="pts">${s.pts}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </article>`).join("");

  grid.addEventListener("click", (e) => {
    const row = e.target.closest(".team-row");
    if (row) openTeamModal(row.dataset.team);
  });
}

/* ---------- Team modal ---------- */
function openTeamModal(team) {
  if (!team) return;
  const table = computeStandings();
  const s = table[team] || { team, group: "-", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
  
  // All matches involving this team (all 104 matches)
  const fixtures = MATCHES.filter((m) => m.home === team || m.away === team);
  
  let totalW = 0, totalD = 0, totalL = 0, totalGF = 0, totalGA = 0;
  fixtures.forEach((m) => {
    const r = RESULTS[m.no];
    if (r) {
      const myGoals = m.home === team ? r[0] : r[1];
      const oppGoals = m.home === team ? r[1] : r[0];
      totalGF += myGoals;
      totalGA += oppGoals;
      if (myGoals > oppGoals) totalW++;
      else if (oppGoals > myGoals) totalL++;
      else if (r.length >= 4) {
        const myPens = m.home === team ? r[2] : r[3];
        const oppPens = m.home === team ? r[3] : r[2];
        if (myPens > oppPens) totalW++;
        else totalL++;
      } else {
        totalD++;
      }
    }
  });

  let placementTag = `Group ${s.group}`;
  if (team === "Spain") placementTag = "🏆 World Champions 2026 (1st Place)";
  else if (team === "Argentina") placementTag = "🥈 World Cup Runners-Up (2nd Place)";
  else if (team === "England") placementTag = "🥉 3rd Place Finish";
  else if (team === "France") placementTag = "🏅 4th Place Semi-Finalist";
  else if (fixtures.some(m => m.stage === "Quarter-final")) placementTag = "Quarter-Finalist";
  else if (fixtures.some(m => m.stage === "Round of 16")) placementTag = "Round of 16";
  else if (fixtures.some(m => m.stage === "Round of 32")) placementTag = "Round of 32";

  const stats = [
    [fixtures.length, "Matches"],
    [totalW, "Won"],
    [totalD, "Drawn"],
    [totalL, "Lost"],
    [totalGF, "Goals For"],
    [totalGA, "Goals Against"],
    [(totalGF - totalGA > 0 ? "+" : "") + (totalGF - totalGA), "Goal Diff"],
    [s.pts, "Group Pts"]
  ];

  $("#modal-body").innerHTML = `
    <div class="modal-head">
      <span class="modal-flag">${flagImgOf(team, 48)}</span>
      <div>
        <h3>${esc(team)}</h3>
        <p style="color:var(--gold);font-weight:600;font-size:0.9rem;margin-top:2px;">${placementTag}</p>
      </div>
    </div>
    <div class="stat-grid">
      ${stats.map(([v, l]) => `<div class="stat-box"><strong>${v}</strong><span>${l}</span></div>`).join("")}
    </div>
    <h4 class="fixtures-title">Tournament Journey &amp; Match Details (${fixtures.length} Matches)</h4>
    <div class="fixture-list">
      ${fixtures.map((m) => {
        const v = VENUES[m.venue];
        const r = RESULTS[m.no];
        const opp = m.home === team ? m.away : m.home;
        let outcome = "", res;
        if (r) {
          const my = m.home === team ? r[0] : r[1];
          const their = m.home === team ? r[1] : r[0];
          let isWin = my > their;
          let isLoss = my < their;
          let pensText = "";
          if (my === their && r.length >= 4) {
            const myP = m.home === team ? r[2] : r[3];
            const theirP = m.home === team ? r[3] : r[2];
            isWin = myP > theirP;
            isLoss = theirP > myP;
            pensText = ` (${r[2]}-${r[3]}p)`;
          }
          outcome = isWin ? "win" : isLoss ? "loss" : "draw";
          res = `<span class="fx-score ${outcome}">${r[0]} – ${r[1]}${pensText}</span>`;
        } else {
          res = `<span class="fx-time">${esc(m.istFullDateTime)}</span>`;
        }
        return `
          <div class="fixture-row ${outcome}">
            <span class="fx-no">M${m.no}</span>
            <div class="fx-teams">
              <span style="font-size:0.75rem;color:var(--muted);display:block;">${esc(m.stage)}</span>
              ${m.home === team ? "vs" : "@"} ${flagImgOf(opp, 18)} <strong>${esc(opp)}</strong>
            </div>
            ${res}
            <span class="fx-venue">${v ? esc(v.city) : ""}</span>
          </div>`;
      }).join("")}
    </div>`;
  $("#team-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeTeamModal() {
  const modal = $("#team-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function initModal() {
  const closeBtn = $("#modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeTeamModal);
  const teamModal = $("#team-modal");
  if (teamModal) {
    teamModal.addEventListener("click", (e) => {
      if (e.target === teamModal) closeTeamModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTeamModal();
  });
}

/* ---------- Podium and Champion Cards Click Handler ---------- */
function initChampionClicks() {
  // Main Champion card (Spain)
  const champCard = document.querySelector(".champion-card");
  if (champCard) {
    champCard.addEventListener("click", (e) => {
      // Don't duplicate if clicking a child button/link
      if (e.target.closest("a, button")) return;
      openTeamModal("Spain");
    });
  }

  // Podium cards (Spain, Argentina, England, France)
  document.querySelectorAll(".podium-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const team = card.dataset.team;
      if (team) openTeamModal(team);
    });
  });
}

/* ---------- Players ---------- */
function renderPlayers() {
  const grid = $("#players-grid");
  if (!grid || typeof PLAYERS === "undefined") return;
  grid.innerHTML = PLAYERS.map((p) => `
    <article class="player-card" style="cursor:pointer;" onclick="openTeamModal('${esc(p.country)}')">
      <div class="player-top">
        <span class="player-flag-wrap">${flagImgOf(p.country, 36)}</span>
        <div>
          <h3>${esc(p.name)}</h3>
          <p>
            <span class="team-label inline">${flagImgOf(p.country, 16)} <span>${esc(p.country)}</span></span>
            · ${esc(p.club)}
          </p>
        </div>
      </div>
      <span class="player-pos">${esc(p.pos)}</span>
      <p class="blurb">${esc(p.blurb)}</p>
      <span class="click-hint" style="margin-top:12px;">View ${esc(p.country)} Matches &rarr;</span>
    </article>`).join("");
}

/* ---------- Facts ---------- */
function renderFacts() {
  const grid = $("#facts-grid");
  if (!grid || typeof FACTS === "undefined") return;

  grid.innerHTML = FACTS.map((f, i) => {
    const flagCode = TEAM_FLAG_CODE[f.country] || 'un';
    const flagUrl = `https://flagpedia.net/data/flags/h80/${flagCode}.png`;
    return `
      <div class="fact-card" style="transition-delay: ${i * 80}ms; --fact-flag: url('${flagUrl}')">
        <div class="fact-num">${f.id}</div>
        <span class="fact-tag">${esc(f.tag)}</span>
        <p class="fact-text">${esc(f.text)}</p>
      </div>
    `;
  }).join("");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fact-card").forEach(card => observer.observe(card));
}

// Hamburger menu
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Back to top
const btt = document.getElementById('back-to-top');
if (btt) {
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 300);
  });
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Celebrate button
const celebBtn = document.getElementById('btn-celebrate');
if (celebBtn) {
  celebBtn.addEventListener('click', () => {
    runConfetti();
  });
}

/* ---------- Init ---------- */
runConfetti();
if ($("#calendar")) initCalendar();
if ($("#f-stage")) initFilters();
if ($("#view-cal")) initViewToggle();
if ($("#f-stage")) renderSchedule();
renderAwards();
renderGroups();
renderBestThird();
initModal();
initChampionClicks();
renderPlayers();
renderFacts();
