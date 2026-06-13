/* ===== FIFA World Cup 2026 Guide — App ===== */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const KICKOFF = new Date(`${MATCHES[0].istDate}T${MATCHES[0].istTime}:00+05:30`);
const FINAL_END = new Date(`${MATCHES[MATCHES.length - 1].istDate}T${MATCHES[MATCHES.length - 1].istTime}:59+05:30`);

/* ---------- Countdown ---------- */
function renderCountdown() {
  const el = $("#countdown");
  const now = new Date();
  if (now >= KICKOFF && now <= FINAL_END) {
    el.innerHTML = '<div class="cd-live"><span class="dot"></span>The World Cup is LIVE — game on!</div>';
    return;
  }
  if (now > FINAL_END) {
    el.innerHTML = '<div class="cd-live">🏆 The 2026 World Cup is complete. What a tournament!</div>';
    return;
  }
  const diff = KICKOFF - now;
  const d = Math.floor(diff / 864e5);
  const h = Math.floor(diff / 36e5) % 24;
  const m = Math.floor(diff / 6e4) % 60;
  const s = Math.floor(diff / 1e3) % 60;
  el.innerHTML = [[d, "Days"], [h, "Hours"], [m, "Minutes"], [s, "Seconds"]]
    .map(([v, l]) => `<div class="cd-box"><strong>${String(v).padStart(2, "0")}</strong><span>${l}</span></div>`)
    .join("");
  setTimeout(renderCountdown, 1000);
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
  const middle = r
    ? `<span class="score">${r[0]} – ${r[1]}</span>`
    : '<span class="vs">VS</span>';
  const timeTag = r
    ? '<span class="tag time ft">FT</span>'
    : `<span class="tag time">${esc(m.istFullDateTime)}</span>`;
  return `
    <div class="match-row">
      <div class="match-no"><strong>${m.no}</strong><span>Match</span></div>
      <div>
        <div class="match-teams">${teamLabel(m.home)}${middle}${teamLabel(m.away)}</div>
        <div class="match-meta">${v.flag} ${esc(v.name)} · ${esc(v.city)} · ${esc(m.time)} local</div>
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
    el.innerHTML = '<p class="result-count">Select a highlighted date to see its matches.</p>';
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
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const firstMatchDate = Object.keys(matchesByDate).sort()[0] || "2026-06-12";
  selectedDate = matchesByDate[today] ? today : firstMatchDate;
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
  calBtn.addEventListener("click", () => {
    calBtn.classList.add("active"); listBtn.classList.remove("active");
    $("#cal-wrap").classList.remove("hidden"); $("#list-wrap").classList.add("hidden");
  });
  listBtn.addEventListener("click", () => {
    listBtn.classList.add("active"); calBtn.classList.remove("active");
    $("#list-wrap").classList.remove("hidden"); $("#cal-wrap").classList.add("hidden");
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
  const table = computeStandings();
  $("#groups-grid").innerHTML = Object.keys(GROUPS).map((g) => `
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

  $("#groups-grid").addEventListener("click", (e) => {
    const row = e.target.closest(".team-row");
    if (row) openTeamModal(row.dataset.team);
  });
}

/* ---------- Team modal ---------- */
function openTeamModal(team) {
  const table = computeStandings();
  const s = table[team];
  if (!s) return;
  const pos = sortedGroup(table, s.group).findIndex((x) => x.team === team) + 1;
  const fixtures = MATCHES.filter((m) => m.home === team || m.away === team);

  const stats = [
    [s.pts, "Points"], [s.p, "Played"], [s.w, "Won"], [s.d, "Drawn"],
    [s.l, "Lost"], [s.gf, "Goals For"], [s.ga, "Goals Against"],
    [(s.gf - s.ga > 0 ? "+" : "") + (s.gf - s.ga), "Goal Diff"]
  ];

  $("#modal-body").innerHTML = `
    <div class="modal-head">
      <span class="modal-flag">${flagImgOf(team, 48)}</span>
      <div>
        <h3>${esc(team)}</h3>
        <p>Group ${s.group} · Position ${pos}${s.p === 0 ? " · Yet to play" : ""}</p>
      </div>
    </div>
    <div class="stat-grid">
      ${stats.map(([v, l]) => `<div class="stat-box"><strong>${v}</strong><span>${l}</span></div>`).join("")}
    </div>
    <h4 class="fixtures-title">Fixtures &amp; Results</h4>
    <div class="fixture-list">
      ${fixtures.map((m) => {
        const v = VENUES[m.venue];
        const r = RESULTS[m.no];
        const opp = m.home === team ? m.away : m.home;
        let outcome = "", res;
        if (r) {
          const my = m.home === team ? r[0] : r[1];
          const their = m.home === team ? r[1] : r[0];
          outcome = my > their ? "win" : my < their ? "loss" : "draw";
          res = `<span class="fx-score ${outcome}">${r[0]} – ${r[1]}</span>`;
        } else {
          res = `<span class="fx-time">${esc(m.istFullDateTime)}</span>`;
        }
        return `
          <div class="fixture-row ${outcome}">
            <span class="fx-no">M${m.no}</span>
            <span class="fx-teams">${m.home === team ? "vs" : "@"} ${flagImgOf(opp, 18)} ${esc(opp)}</span>
            ${res}
            <span class="fx-venue">${esc(v.city)}</span>
          </div>`;
      }).join("")}
    </div>`;
  $("#team-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeTeamModal() {
  $("#team-modal").classList.add("hidden");
  document.body.style.overflow = "";
}

function initModal() {
  $("#modal-close").addEventListener("click", closeTeamModal);
  $("#team-modal").addEventListener("click", (e) => {
    if (e.target === $("#team-modal")) closeTeamModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTeamModal();
  });
}

/* ---------- Players ---------- */
function renderPlayers() {
  $("#players-grid").innerHTML = PLAYERS.map((p) => `
    <article class="player-card">
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
    </article>`).join("");
}

 // Hamburger menu
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Back to top
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 300);
  });
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


/* ---------- Init ---------- */
renderCountdown();
initCalendar();
initFilters();
initViewToggle();
renderSchedule();
renderGroups();
initModal();
renderPlayers();
renderVenues();