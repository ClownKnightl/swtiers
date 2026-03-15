const tierPoints = {
  "HT1": 30, "LT1": 22,
  "HT2": 15, "LT2": 10,
  "HT3": 6,  "LT3": 5,
  "HT4": 4,  "LT4": 3,
  "HT5": 2,  "LT5": 1,
  "HT1R": 30,  "LT1R": 22,
  "HT2R": 15,  "LT2R": 10,
  "Unranked": 0
};

const DEFAULT_PROFILE = "default-tierr.png";

const regionNamesMap = {
  NA: "North America",
  SA: "South America",
  EU: "Europe",
  AU: "Australia",
  AS: "Asia"
};

const regionImages = {
  NA: "iNA.png",
  SA: "iSA.png",
  EU: "iEU.png",
  AU: "iAU.png",
  AS: "iAS.png",
};

const playerImages = {
  "Giantking": "Giantking.png",
  "Bob": "bob.png",
};

const players = [
  {
    name: "Giantking",
    region: "EU",
    tiers: ["", "", "", "", "", "", "", "", "", "LT5", "", "", "", ""],
  },
  {
    name: "Bob",
    region: "EU",
    tiers: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  }
];

const rankImages = {
  "Combat Cyrus": "Cyrus.png",
  "Combat Z4CK": "Z4CK.png",
  "Combat Wesly": "Wesly.png",
  "Combat Vin": "Vin.png",
  "Combat Maverick": "Maverick.png",
  "Combat Willow": "Willow.png",
  "Combat Ruth": "Ruth_.png",
  "Unranked": "unranked_.png",
};

const rankNameColors = {
  "Combat Cyrus": "#e3d89b",
  "Combat Z4CK": "#bdd0ea",
  "Combat Wesly": "#f2d4b2",
  "Combat Vin": "#d4e1e1",
  "Combat Maverick": "#ffcca8",
  "Combat Willow": "#cfbcd4",
  "Combat Ruth": "#f4dfdf",
  "Unranked": "#888888"
};

const GOLD_RANK_IMG = "Gol.png";

const tierInfo = {
  HT1: { name: "HT1", points: 30, image: "HT1__.png" },
  HT2: { name: "HT2", points: 15, image: "HT2__.png" },
  HT3: { name: "HT3", points: 6, image: "HT3__.png" },
  HT4: { name: "HT4", points: 4, image: "HT4__.png" },
  HT5: { name: "HT5", points: 2, image: "HT5__.png" },
  LT1: { name: "LT1", points: 22, image: "LT1__.png" },
  LT2: { name: "LT2", points: 10, image: "LT2__.png" },
  LT3: { name: "LT3", points: 5, image: "LT3__.png" },
  LT4: { name: "LT4", points: 3, image: "LT4__.png" },
  LT5: { name: "LT5", points: 1, image: "LT5__.png" },
  HT1R: { name: "HT1 (Retired)", points: 30, image: "rHT1__.png" },
  HT2R: { name: "HT2 (Retired)", points: 15, image: "rHT2__.png" },
  LT1R: { name: "LT1 (Retired)", points: 22, image: "rLT1__.png" },
  LT2R: { name: "LT2 (Retired)", points: 10, image: "rLT2__.png" },
};

const ARROW_UP = "Upup.png";
const ARROW_DOWN = "Downdown.png";

const tabsContainer = document.getElementById("tabs-container");
const tierBoxesContainer = document.getElementById("tier-boxes-container");
const tbody = document.getElementById("leaderboard-body");
const infoButton = document.getElementById("info-button");
const infoPopup = document.getElementById("info-popup");
const titlesBtn = document.getElementById("titles-btn");
const pointsBtn = document.getElementById("points-btn");
const infoContent = document.getElementById("info-content");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("search-popup");
const playerInfoDiv = popup.querySelector(".player-info");
const tierListDiv = popup.querySelector(".tier-list");
const closeBtn = popup.querySelector(".close-btn");
const searchInput = document.getElementById("search-input");

const leaderboardTabImage = "Gol.png";

// New: all new images for every tab
const tierTabImages = [
  "Gol.png",           // Overall
  "tierr1.png",          // ShadowjugVP
  "tierr2.png",          // Spearsor
  "tierr3.png",          // Giant
  "tierr4.png",          // Merichu
  "tierr5.png",          // ArcherWall
  "tierr6.png",          // Gspam
  "tierr7%20(1).png",    // ShadowripVL
  "tierr8.png",          // Crawlerjug
  "tierr9.png",          // Spearcher
  "tierr10.png",         // Sicklejug
  "tierr13.png",         // ShadowripVP (note 12 was removed)
  "tierr14.png",         // Bomber
  "tierr15.png",         // MagiWall
  "tierr17.png"          // A&F
];

const tierTabNames = [
  "Overall", "ShadowjugVP", "Spearsor", "Giant", "Merichu", "ArcherWall", "Gspam",
  "ShadowripVL", "Crawlerjug", "Spearcher", "Sicklejug", "ShadowripVP",
  "Bomber", "MagiWall", "A&F"
];

const tierSlotHeights = {
  1: 20,
  2: 20,
  3: 20,
  4: 20,
  5: 20,
  6: 20,
  7: 20,
  8: 20,
  9: 20,
  10: 20,
  11: 20,
  12: 20,
  13: 20,
  14: 20
};

const tierSlotImageHeights = {
  1: 17,
  //ShadowjugVP
  
  2: 22,
  //Spearsor
  
  3: 40,
  //Giant
  
  4: 15,
  //Merichu
  
  5: 23,
  //ArcherWall
  
  6: 15,
  //Gspam
  
  7: 18,
  //ShadowripVL
  
  8: 21,
  //Crawlerjug
  
  9: 22,
  //Spearcher
  
  10: 23,
  //Sicklejug
  
  11: 19,
  //ShadowripVP
  
  12: 42,
  //Bomber
  
  13: 20,
  //MagiWall
  
  14: 15
  //A&F
};

function calculatePoints(tiers){
  return tiers.reduce((sum, t) => sum + (tierPoints[t] || 0), 0);
}

function getRank(points){
  if(points >= 180) return "Combat Cyrus";
  if(points >= 130) return "Combat Z4CK";
  if(points >= 75) return "Combat Wesly";
  if(points >= 40) return "Combat Vin";
  if(points >= 25) return "Combat Maverick";
  if(points >= 16) return "Combat Willow";
  if(points >= 1) return "Combat Ruth";
  return "Unranked";
}

function assignRanks(players){
  players.sort((a,b) => b.totalPoints - a.totalPoints);
  let lastPoints = null, rankNum = 0;
  players.forEach((p, i) => {
    if(p.totalPoints !== lastPoints){
      rankNum = i + 1;
      lastPoints = p.totalPoints;
    }
    p.rankNumber = rankNum;
  });
}

players.forEach(p => p.totalPoints = calculatePoints(p.tiers));
assignRanks(players);

const rankBackgroundColors = {
  1: "#efba3cff",
  2: "#879ea5ff",
  3: "#b56329ff"
};

function renderTierIcon(tier, forTab = false){
  if(!tier) return "";
  if(forTab && tier.endsWith("R")) return "";
  const info = tierInfo[tier] || {name:tier, points:0, image:DEFAULT_PROFILE};
  return `<img class="tier-image"
       src="${info.image}"
       alt="${info.name}"
       onmouseenter="showTierTooltip(event,'${tier}')"
       onmouseleave="hideTierTooltip()"
  />`;
  
}

function getRankColorClass(rankNum) {
  if(rankNum === 1) return "rank-color-1";
  if(rankNum === 2) return "rank-color-2";
  if(rankNum === 3) return "rank-color-3";
  return "rank-color-default";
}

function getRankBoxClass(rankName) {
  return "rank-box-" + rankName.replace(/\s/g, "-");
}

function renderLeaderboard(){
  tbody.innerHTML = "";
  players.forEach(player => {
    const rankText = getRank(player.totalPoints);
    let rankImg = rankImages[rankText] || rankImages["Unranked"];
    const rankClass = player.rankNumber <= 3 ? `rank-${player.rankNumber}` : "rank-default";
    const bgColor = rankBackgroundColors[player.rankNumber] || "#1d2735";
    
    const tierHTML = player.tiers.map((tier, i) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'tier-slot-wrapper';

  const slotImg = document.createElement('img');
slotImg.className = 'slot-image';
slotImg.src = tierTabImages[i + 1] || tierTabImages[tierTabImages.length - 1];
slotImg.alt = `Tier slot ${i + 1}`;

const slotHeight = tierSlotImageHeights[i+1] || 24;
slotImg.style.height = slotHeight + "px";

  const tierImgWrapper = document.createElement('div');

  const height = tierSlotHeights[i+1] || 24;

if (tier === "Unranked") {
  tierImgWrapper.innerHTML =
  `<img class="tier-image"
        src="unranked_.png"
        alt="Unranked"
        style="height:${height}px;" />`;
} else {

  const info = tierInfo[tier] || {name:tier,image:DEFAULT_PROFILE};

  tierImgWrapper.innerHTML =
  `<img class="tier-image"
        src="${info.image}"
        alt="${info.name}"
        style="height:${height}px;"
        onmouseenter="showTierTooltip(event,'${tier}')"
        onmouseleave="hideTierTooltip()" />`;
}

  wrapper.appendChild(slotImg);
  if (tierImgWrapper.firstElementChild) wrapper.appendChild(tierImgWrapper.firstElementChild);
  return wrapper.outerHTML;
}).join("");

    const tr = document.createElement("tr");
    tr.classList.add("clickable-row");
    tr.dataset.playerName = player.name;

    tr.innerHTML = `
  <td style="padding:0;">
    <div class="leaderboard-rank-profile-container rank-profile-relative"
         style="background:${bgColor}; color:white; border: 3px solid ${
           player.rankNumber === 1 ? '#f0c863' :
           player.rankNumber === 2 ? '#a0b0b7' :
           player.rankNumber === 3 ? '#c58152' :
           '#28313f'
         };">

  ${
    player.rankNumber === 1
      ? `<img class="trown-overlay" src="${TROWN_IMG}" alt="Rank 1 Crown">`
      : ""
  }

  <span class="leaderboard-rank-number">
  ${player.rankNumber}
</span>

  <img class="profile ${rankClass}"
       src="${playerImages[player.name]||DEFAULT_PROFILE}"
       alt="${player.name}" />
</div>
      </td>
      <td style="width:300px;">
        <div class="player-cell-horizontal">
          <div class="player-info-wrapper">
            <div class="player-name">${player.name}</div>
            <div class="rank-row">
  <img class="rank-icon" src="${rankImg}" alt="${rankText}" style="width:28px; height:28px;" />
  <div class="rank-text-block">
    <div class="rank-name" style="font-weight: normal;">${rankText}</div>
    <span class="rank-points">(${player.totalPoints} points)</span>
  </div>
</div>
      </td>
      <td class="region-flag region-column" style="text-align:center; user-select:none; padding-left:10px;">
  <img src="${regionImages[player.region] || ""}" alt="${player.region}" />
</td>
      <td style="padding-left:20px;"><div class="tier-container">${tierHTML}</div></td>
    `;
    tbody.appendChild(tr);
  });
}

const tierBoxHeaders = {
  1: {text:"Tier 1", image:leaderboardTabImage, color:"#41361b"},
  2: {text:"Tier 2", image:"Si.png", color:"#343843"},
  3: {text:"Tier 3", image:"Brr.png", color:"#352620"},
  4: {text:"Tier 4", image:null, color:"#161e2a"},
  5: {text:"Tier 5", image:null, color:"#161e2a"}
};

function getPlayersGroupedByTier(slotIndex){
  const tierGroups = {1:[],2:[],3:[],4:[],5:[],0:[]};

  players.forEach(player => {
    const tier = player.tiers[slotIndex] || "Unranked";
    if(tier.endsWith("R")) return;

    const match = tier.match(/(HT|LT)(\d)/);
    const tierNum = match ? Number(match[2]) : 0;
    const prefix = match ? match[1] : "";

    tierGroups[tierNum].push({
      name: player.name,
      tierCode: tier,
      profile: playerImages[player.name] || DEFAULT_PROFILE,
      isHT: prefix === "HT",
      isLT: prefix === "LT"
    });
  });

  for(let i = 1; i <= 5; i++){
    tierGroups[i].sort((a,b) => (a.isHT && b.isLT ? -1 : a.isLT && b.isHT ? 1 : 0));
  }
  return tierGroups;
}

const TROWN_IMG = "Trown.png";

function renderTierBoxes(slotIndex){
  const groupedPlayers = getPlayersGroupedByTier(slotIndex);
  tierBoxesContainer.innerHTML = "";
  for(let i = 1; i <= 5; i++){
    const box = document.createElement("div");
    box.className = "tier-box";
    const header = tierBoxHeaders[i];

    box.innerHTML = `<div class="tier-header" style="background:${header.color}">${header.image ? `<img src="${header.image}" alt="${header.text}" />` : ""}<span>${header.text}</span></div>`;

    const group = groupedPlayers[i];
    if(group.length === 0){
      box.innerHTML += `<p style="text-align:center;color:#888;">No players</p>`;
    } else {
      group.forEach(p => {
        const arrowHtml = p.isHT ? `<img class="arrow up" src="${ARROW_UP}" alt="Up arrow" />`
                          : p.isLT ? `<img class="arrow down" src="${ARROW_DOWN}" alt="Down arrow" />` : "";
        const tierPrefix = p.tierCode.startsWith("HT") ? "ht-tier" : (p.tierCode.startsWith("LT") ? "lt-tier" : "");

box.innerHTML += `
  <div class="player-card ${tierPrefix}" title="${p.name} - ${p.tierCode}" data-player-name="${p.name}" style="justify-content: space-between;">
    <div style="display:flex; align-items:center; gap:8px;">
      <img class="profile" src="${p.profile}" alt="${p.name}" onerror="this.onerror=null;this.src='${DEFAULT_PROFILE}'"/>
      <div class="player-info"><div>${p.name}</div></div>
    </div>
    ${arrowHtml}
  </div>`;
      });
    }
    tierBoxesContainer.appendChild(box);
  }

  Array.from(tierBoxesContainer.querySelectorAll(".player-card")).forEach(card => {
    card.addEventListener("click", e => {
      e.stopPropagation();
      const playerName = card.dataset.playerName;
      const player = players.find(p => p.name === playerName);
      if(player){
        openPopup(player);
        closeInfoPopup();
        currentSearchName = null;
        renderLeaderboard();
      }
    });
  });
}

function renderTierSlotHeaders(){}

function createTabs(){
  // Make sure tierTabNames and tierTabImages are aligned
  for(let i = 0; i < tierTabNames.length; i++){
    const tab = document.createElement("div");
    tab.className = "tab";

    const imgSrc = tierTabImages[i] || DEFAULT_PROFILE;

    tab.innerHTML = `<img src="${imgSrc}" alt="${tierTabNames[i]}" /><div>${tierTabNames[i]}</div>`;
    tab.dataset.tabIndex = i;

    tab.addEventListener("click", () => {
      setActiveTab(tab);

      if(i === 0){
        // Show entire leaderboard wrapper and container
        document.getElementById("leaderboard-wrapper").style.display = "block";
        document.getElementById("leaderboard-container").style.display = "block";
        tierBoxesContainer.style.display = "none";
        renderLeaderboard();
      } else {
        // Hide entire leaderboard wrapper, show tier boxes
        document.getElementById("leaderboard-wrapper").style.display = "none";
        tierBoxesContainer.style.display = "flex";
        renderTierBoxes(i-1);
      }
      closeInfoPopup();
    });

    tabsContainer.appendChild(tab);
  }
}

function setActiveTab(activeTab){
  Array.from(tabsContainer.children).forEach(tab => tab.classList.toggle("active", tab === activeTab));
}

function renderPlayerProfile(player){
  const rankText = getRank(player.totalPoints);
  const regionName = regionNamesMap[player.region] || player.region;

  const playerRankImg = rankImages[rankText] || rankImages["Unranked"];

  playerInfoDiv.innerHTML = "";

  const container = document.createElement("div");
  container.className = "player-profile-container";

  const img = document.createElement("img");
  img.src = playerImages[player.name] || DEFAULT_PROFILE;
  img.alt = player.name;
  img.style.width = "80px";
  img.style.height = "80px";
  img.style.borderRadius = "50%";
  const rankBorderColors = {
  1: "#e5ba43", // gold
  2: "#808c9c", // silver
  3: "#b56326", // bronze
  default: "#1e2634"
};

const borderColor = rankBorderColors[player.rankNumber] || rankBorderColors.default;
img.style.border = `3px solid ${borderColor}`;
  container.appendChild(img);

  const nameEl = document.createElement("div");
  nameEl.textContent = player.name;
  nameEl.style.fontWeight = "700";
  nameEl.style.fontSize = "1.5em";
  container.appendChild(nameEl);

  const rankBox = document.createElement("div");
  rankBox.className = "rank-box";
  rankBox.classList.add(getRankBoxClass(rankText));

  const rankImageEl = document.createElement("img");
  rankImageEl.src = playerRankImg;
  rankImageEl.alt = rankText;
  rankImageEl.style.width = "32px";
  rankImageEl.style.height = "32px";
  rankBox.appendChild(rankImageEl);

  const rankNameEl = document.createElement("span");
rankNameEl.textContent = rankText;
rankNameEl.style.color = rankNameColors[rankText] || "white";
rankNameEl.style.fontWeight = "normal";
rankBox.appendChild(rankNameEl);

  container.appendChild(rankBox);

  const regionNameEl = document.createElement("div");
  regionNameEl.style.color = "#222a38";  // Changed color here
  regionNameEl.style.fontWeight = "600";
  regionNameEl.style.fontSize = "0.9em";
  regionNameEl.style.userSelect = "none";
  regionNameEl.style.marginTop = "-6px";
  regionNameEl.style.marginBottom = "6px";
  regionNameEl.textContent = regionName;
  container.appendChild(regionNameEl);

  const streak = document.createElement("div");
  streak.className = "position-overall-streak";

  const positionLabel = document.createElement("div");
  positionLabel.className = "position-label";
  positionLabel.textContent = "POSITION";
  positionLabel.style.fontSize = "1em";
  streak.appendChild(positionLabel);

  const rankNumDiv = document.createElement("div");
rankNumDiv.className = "rank-number";
rankNumDiv.textContent = player.rankNumber;
if (player.rankNumber === 1) {
  rankNumDiv.style.color = "#f0b857";
} else if (player.rankNumber === 2) {
  rankNumDiv.style.color = "#a9b1b9";
} else if (player.rankNumber === 3) {
  rankNumDiv.style.color = "#d59161";
}
  streak.appendChild(rankNumDiv);
  
  rankNumDiv.className = `rank-number rank-${player.rankNumber}`;

  const posImg = document.createElement("img");
  posImg.src = GOLD_RANK_IMG;
  posImg.alt = rankText;
  posImg.style.width = "auto";
posImg.style.height = "28px"; // keep consistent height
  streak.appendChild(posImg);

  const overallText = document.createElement("div");
  overallText.className = "overall-text";
  overallText.textContent = "OVERALL";
  streak.appendChild(overallText);

  const pointsText = document.createElement("div");
  pointsText.className = "points-text";
  pointsText.textContent = `(${player.totalPoints} points)`;
  streak.appendChild(pointsText);

  container.appendChild(streak);

  const tiersHeader = document.createElement("div");
  tiersHeader.className = "popup-tiers-header";
  tiersHeader.textContent = "TIERS";
  tiersHeader.style.fontSize = "1em";
  container.appendChild(tiersHeader);

  const tiersRowsContainer = document.createElement("div");
  tiersRowsContainer.className = "popup-tiers-rows";

  const topTiers = player.tiers.slice(0, 10);
  const bottomTiers = player.tiers.slice(10);

  // Remove old tooltip if exists:
  let oldTooltip = document.getElementById("player-profile-tooltip");
  if (oldTooltip) oldTooltip.remove();

  function createTierRow(tiersSlice, startIndex) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "popup-tiers-row";

    tiersSlice.forEach((tier, i) => {
      const wrapper = document.createElement("div");
      wrapper.className = "tier-slot-wrapper-popup";

      const slotImg = document.createElement("img");
      slotImg.className = "slot-image";
      slotImg.src = tierTabImages[startIndex + i + 1] || tierTabImages[tierTabImages.length - 1];
      slotImg.alt = `Tier slot ${startIndex + i + 1}`;
      wrapper.appendChild(slotImg);

      const info = tierInfo[tier] || {name:tier, points:0, image:DEFAULT_PROFILE};
      const tierImg = document.createElement("img");
      tierImg.className = "tier-image";
      tierImg.src = info.image;
      tierImg.alt = info.name;

      tierImg.addEventListener("mouseenter", (event) => {
        showPlayerProfileTooltip(event, info, tier);
      });
      tierImg.addEventListener("mouseleave", () => {
        hidePlayerProfileTooltip();
      });

      if(tier.endsWith("R")){
        const baseName = info.name.replace(" (Retired)", "");
        tierImg.title = `Retired ${baseName}\n${info.points} points`;
        tierImg.style.whiteSpace = "pre-line";
      } else {
        tierImg.removeAttribute("title");
      }

      wrapper.appendChild(tierImg);
      rowDiv.appendChild(wrapper);
    });
    return rowDiv;
  }

  tiersRowsContainer.appendChild(createTierRow(topTiers, 0));
  tiersRowsContainer.appendChild(createTierRow(bottomTiers, 10));

  container.appendChild(tiersRowsContainer);

  playerInfoDiv.appendChild(container);
  tierListDiv.innerHTML = "";
  
  // Disable scroll wheel on popup when open
  popup.addEventListener("wheel", disableScrollWheel, { passive: false });
}

function disableScrollWheel(e) {
  e.preventDefault();
}

function removeScrollWheelListener() {
  popup.removeEventListener("wheel", disableScrollWheel, { passive: false });
}

// Player profile custom tooltip box
function showPlayerProfileTooltip(event, info, tierCode){
  let tooltip = document.getElementById("player-profile-tooltip");
  if(!tooltip){
    tooltip = document.createElement("div");
    tooltip.id = "player-profile-tooltip";
    document.body.appendChild(tooltip);
  }

  const isRetired = tierCode.endsWith("R");
  if(isRetired){
    const baseName = info.name.replace(" (Retired)", "");
    tooltip.innerHTML = `<div class="top-text">Retired ${baseName}</div><div class="bottom-text">(${info.points} points)</div>`;
  } else {
    tooltip.innerHTML = `<div class="top-text">${info.name}</div><div class="bottom-text">(${info.points} points)</div>`;
  }

  const rect = event.target.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + window.scrollX) + "px";
  tooltip.style.top = (rect.bottom + 6 + scrollY) + "px";
  tooltip.style.display = "block";
}

function hidePlayerProfileTooltip(){
  const tooltip = document.getElementById("player-profile-tooltip");
  if(tooltip) tooltip.style.display = "none";
}

let profilePopupOpen = false;

function openPopup(player){
  renderPlayerProfile(player);
  popup.style.display = "block";
  overlay.style.display = "block";

  disableInterface(true);
  profilePopupOpen = true;

  // Add an event listener to detect clicks outside popup closes it and blocks interaction during open
  setTimeout(() => {
    document.addEventListener("click", outsideClickListener, true);
  }, 0);
}

function closePopup(){
  popup.style.display = "none";
  overlay.style.display = "none";

  disableInterface(false);
  profilePopupOpen = false;

  // Remove outside click listener
  document.removeEventListener("click", outsideClickListener, true);
  hidePlayerProfileTooltip();

  searchInput.value = "";
  currentSearchName = null;
  renderLeaderboard();
  closeInfoPopup();

  // Remove scroll wheel disable on popup
  removeScrollWheelListener();
}

function disableInterface(disabled) {
  infoButton.disabled = disabled;
  document.getElementById("discord-button").disabled = disabled;
  // Disable tab clicks via pointer-events and opacity
  Array.from(tabsContainer.children).forEach(tab => {
    tab.style.pointerEvents = disabled ? "none" : "auto";
    tab.style.opacity = disabled ? "0.6" : "1";
  });
  // Disable search input
  searchInput.disabled = disabled;
}

// Listener for clicks outside popup to close it and block interaction except popup clicks
function outsideClickListener(event) {
  if (!profilePopupOpen) return;
  if (popup.contains(event.target)) {
    // Click inside popup allowed
    return;
  }
  if (event.target === popup || event.target === overlay) {
    closePopup();
    return;
  }
  // Block clicks on all other elements while popup open by stopping propagation & prevent default
  event.stopPropagation();
  event.preventDefault();
}

// Search enter key to open popup for that player
searchInput.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    const val = searchInput.value.trim();
    if(!val) return;

    const foundPlayer = players.find(p => p.name.toLowerCase() === val.toLowerCase());
    if(foundPlayer){
      openPopup(foundPlayer);
      currentSearchName = val;
      renderLeaderboard();
      closeInfoPopup();
    } else {
      showPlayerNotFound(val);
    }
  }
});

closeBtn.addEventListener("click", closePopup);

const discordButton = document.getElementById("discord-button");

// Change text to "Disclaimer"
discordButton.textContent = "Disclaimer";

// Remove previous event listeners
discordButton.replaceWith(discordButton.cloneNode(true));
const newDisclaimerBtn = document.getElementById("discord-button");

// Create a bigger box like infoPopup but under the button
const disclaimerBox = document.createElement("div");
disclaimerBox.id = "disclaimer-box";
disclaimerBox.style.display = "none";
disclaimerBox.style.position = "absolute";          // positioned relative to button
disclaimerBox.style.backgroundColor = "#1a1f2e";
disclaimerBox.style.border = "2px solid #5c6ac4";
disclaimerBox.style.borderRadius = "8px";
disclaimerBox.style.padding = "16px";
disclaimerBox.style.color = "white";
disclaimerBox.style.fontSize = "0.9em";
disclaimerBox.style.lineHeight = "1.4em";
disclaimerBox.style.width = "350px";               // bigger box
disclaimerBox.style.height = "200px";              // bigger height
disclaimerBox.style.overflowY = "auto";
disclaimerBox.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
disclaimerBox.style.zIndex = "1000";
disclaimerBox.innerHTML = `
  <h3 style="margin-top:0; margin-bottom:10px;"></h3>
This website in its beta is currently a 1/1 copy of Mctiers, with rank images/name assets from Stick War Legacy. Most of this website's images, functions, colors, and layout are almost identical or exactly copied from Mctiers. I made this as a Sw3 and PvpClub fan through direct inspiration from Mctiers. I did not ask for permission to make this, with the sole creation intent to be more active in the Sw3 community. 
  <br><br>
  <a href="https://mctiers.com/rankings/overall" target="_blank" style="color:#5c6ac4; text-decoration:underline;">Click here to check out Mctiers!</a>
  <br><br>
`;

// Append to body
document.body.appendChild(disclaimerBox);

// Function to position the box under the button
function positionDisclaimerBox() {
  const rect = newDisclaimerBtn.getBoundingClientRect();
  const boxWidth = 350; // width of the disclaimer box
  const padding = 10;   // minimal space from screen edges
  const leftOffset = 290; // move farther left

  let leftPos = rect.left + window.scrollX - leftOffset;

  if (leftPos < padding) leftPos = padding;
  if (leftPos + boxWidth + padding > window.innerWidth) {
    leftPos = window.innerWidth - boxWidth - padding;
  }

  disclaimerBox.style.top = rect.bottom + window.scrollY + "px";
  disclaimerBox.style.left = leftPos + "px";
  disclaimerBox.style.width = boxWidth + "px";
}

// Toggle disclaimer box on click
newDisclaimerBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent triggering the outside click listener
  if (disclaimerBox.style.display === "block") {
  disclaimerBox.style.display = "none";
  newDisclaimerBtn.classList.remove("active");
  disclaimerBox.classList.remove("showing");
  document.removeEventListener("click", outsideDisclaimerClickListener, true);
} else {
  positionDisclaimerBox();
  disclaimerBox.style.display = "block";
  newDisclaimerBtn.classList.add("active");
  disclaimerBox.classList.add("showing");

  // Close when clicking outside
  setTimeout(() => {
    document.addEventListener("click", outsideDisclaimerClickListener, true);
  }, 0);
}
});

// Outside click listener
function outsideDisclaimerClickListener(event) {
  if (!disclaimerBox.contains(event.target) && event.target !== newDisclaimerBtn) {
    disclaimerBox.style.display = "none";
    document.removeEventListener("click", outsideDisclaimerClickListener, true);
  }
}

const closeX = document.createElement("span");
closeX.textContent = "×";
closeX.style.position = "absolute";
closeX.style.top = "6px";
closeX.style.left = "6px";
closeX.style.cursor = "pointer";
closeX.style.fontSize = "18px";
closeX.style.fontWeight = "700";
closeX.style.color = "#fff";
closeX.style.userSelect = "none";

// Close box when X is clicked
closeX.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent triggering outside click
  disclaimerBox.style.display = "none";
  document.removeEventListener("click", outsideDisclaimerClickListener, true);
});

// Append X to disclaimer box
disclaimerBox.style.position = "absolute"; // make sure it's absolute
disclaimerBox.appendChild(closeX);

// Reposition on window resize/scroll to stay under button
window.addEventListener("resize", () => { if(disclaimerBox.style.display === "block") positionDisclaimerBox(); });
window.addEventListener("scroll", () => { if(disclaimerBox.style.display === "block") positionDisclaimerBox(); });

const ranksWithPoints = [
  {name: "Combat Cyrus", points: 180},
  {name: "Combat Z4CK", points: 130},
  {name: "Combat Wesly", points: 75},
  {name: "Combat Vin", points: 40},
  {name: "Combat Maverick", points: 25},
  {name: "Combat Willow", points: 16},
  {name: "Combat Ruth", points: 1}
];

const tiersList = [
  {code: "HT1", points: 30, tierImg: tierInfo.HT1.image},
  {code: "LT1", points: 22, tierImg: tierInfo.LT1.image},
  {code: "HT2", points: 15, tierImg: tierInfo.HT2.image},
  {code: "LT2", points: 10, tierImg: tierInfo.LT2.image},
  {code: "HT3", points: 6,  tierImg: tierInfo.HT3.image},
  {code: "LT3", points: 5,  tierImg: tierInfo.LT3.image},
  {code: "HT4", points: 4,  tierImg: tierInfo.HT4.image},
  {code: "LT4", points: 3,  tierImg: tierInfo.LT4.image},
  {code: "HT5", points: 2,  tierImg: tierInfo.HT5.image},
  {code: "LT5", points: 1,  tierImg: tierInfo.LT5.image},
];

function renderTitlesInfo(){
  let html = "";
  ranksWithPoints.forEach(rank => {
    const img = rankImages[rank.name] || "";
    html += `
  <div class="info-rank-line">
    <img src="${img}" alt="${rank.name}" />
    <div class="info-rank-text">
      <div class="rank-name" style="color: ${rankNameColors[rank.name] || 'white'}; font-weight: normal;">${rank.name}</div>
      <div class="rank-desc">Obtained ${rank.points}+ total points</div>
    </div>
  </div>
`;
  });
  infoContent.innerHTML = html;
}

function renderPointsInfo(){
  let html = "";
  const pairs = [
    {HT:"HT1", LT:"LT1"},
    {HT:"HT2", LT:"LT2"},
    {HT:"HT3", LT:"LT3"},
    {HT:"HT4", LT:"LT4"},
    {HT:"HT5", LT:"LT5"},
  ];
  pairs.forEach(pair => {
  const ht = tierInfo[pair.HT];
  const lt = tierInfo[pair.LT];

  // Fix singular/plural for points
  const htPointsText = ht.points === 1 ? "1 point" : `${ht.points} points`;
  const ltPointsText = lt.points === 1 ? "1 point" : `${lt.points} points`;

  html += `<div class="points-pair">
    <div class="info-line">
      <img src="${ht.image}" alt="${ht.name}" style="height:20px; width:auto; margin-right:4px; border-radius:6px;"/>
      <img class="info-arrow" src="${ARROW_UP}" alt="Up arrow"/>
      ${htPointsText}
    </div>
    <div class="info-line">
      <img src="${lt.image}" alt="${lt.name}" style="height:20px; width:auto; margin-right:4px; border-radius:6px;"/>
      <img class="info-arrow" src="${ARROW_DOWN}" alt="Down arrow"/>
      ${ltPointsText}
    </div>
  </div>`;
});
  infoContent.innerHTML = html;
}

function openInfoPopup() {
  infoPopup.style.display = "block";
  clickedInfo = true;
  clickedPopup = false;
}

function closeInfoPopup() {
  infoPopup.style.display = "none";
  titlesBtn.classList.remove("active");
  pointsBtn.classList.remove("active");
  clickedInfo = false;
}

// Manage clicks outside info popup to close it
function infoOutsideClickListener(event) {
  if (!clickedInfo) return;
  const isClickInsidePopup = infoPopup.contains(event.target);
  const isClickOnInfoButton = infoButton.contains(event.target);

  if (!isClickInsidePopup && !isClickOnInfoButton) {
    closeInfoPopup();
    document.removeEventListener("click", infoOutsideClickListener, true);
  }
}

infoButton.addEventListener("click", () => {
  if(infoPopup.style.display === "block"){
    closeInfoPopup();
    document.removeEventListener("click", infoOutsideClickListener, true);
  } else {
    renderTitlesInfo();
    titlesBtn.classList.add("active");
    pointsBtn.classList.remove("active");
    openInfoPopup();
    setTimeout(() => {
      document.addEventListener("click", infoOutsideClickListener, true);
    }, 0);
  }
});

titlesBtn.addEventListener("click", () => {
  renderTitlesInfo();
  titlesBtn.classList.add("active");
  pointsBtn.classList.remove("active");
});

pointsBtn.addEventListener("click", () => {
  renderPointsInfo();
  pointsBtn.classList.add("active");
  titlesBtn.classList.remove("active");
});

createTabs();
setActiveTab(tabsContainer.children[0]);
renderTierSlotHeaders();
document.getElementById("leaderboard-container").style.display = "block";
tierBoxesContainer.style.display = "none";
let currentSearchName = null;
let clickedInfo = false;
let clickedPopup = false;
renderLeaderboard();

document.getElementById("leaderboard-wrapper").addEventListener("click", e => {
  const target = e.target.closest("tr.clickable-row");
  if(target){
    const playerName = target.dataset.playerName;
    const player = players.find(p => p.name === playerName);
    if(player){
      openPopup(player);
      closeInfoPopup();
      currentSearchName = null;
      renderLeaderboard();
    }
  }
});

// Tooltip for tier icons on hover
function showTierTooltip(event, tierCode){
  let info = tierInfo[tierCode];
  if(!info) return;

  let tooltip = document.getElementById("tier-tooltip");
  if(!tooltip){
    tooltip = document.createElement("div");
    tooltip.id = "tier-tooltip";
    tooltip.className = "tier-tooltip";
    document.body.appendChild(tooltip);
  }

  let isRetired = tierCode.endsWith("R");

  if(isRetired){
    const retiredName = info.name.replace(" (Retired)", "");
    tooltip.innerHTML = `
      <span class="tier-retired">Retired ${retiredName}</span>
      <span class="tier-points">(${info.points} points)</span>
    `;
  } else {
    tooltip.innerHTML = `
      <span class="tier-name">${info.name}</span>
      <span class="tier-points">(${info.points} points)</span>
    `;
  }

  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = (rect.left + rect.width / 2 + window.scrollX) + "px";
  tooltip.style.top = (rect.bottom + window.scrollY) + "px";
  tooltip.classList.add("visible");
}

function hideTierTooltip(){
  const tooltip = document.getElementById("tier-tooltip");
  if(tooltip) tooltip.classList.remove("visible");
}

function showPlayerNotFound(name) {
  const box = document.getElementById("player-not-found-box");
  const subtitle = box.querySelector(".subtitle");
  subtitle.textContent = `Unable to find player by the name ${name}`; // no quotes

  // Slide down animation
  box.style.top = "-100px"; // reset position
  box.style.display = "flex";
  setTimeout(() => {
    box.style.top = "20px"; // final visible position
  }, 50);

  // Auto-hide after 3s
  const hideTimeout = setTimeout(() => {
    box.style.top = "-100px"; // slide up
    setTimeout(() => box.style.display = "none", 1000); // hide after animation
  }, 3000);

  // Close on X click
  const closeX = box.querySelector(".close-x");
  closeX.onclick = () => {
    clearTimeout(hideTimeout);
    box.style.top = "-100px";
    setTimeout(() => box.style.display = "none", 500);
  };
}
