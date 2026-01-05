const fabrics = {
  cotton: {
    name: "Cotton",
    gsm: "120–180",
    season: "Summer",
    cost: "Medium",
    durability: "Medium",
    sustainability: 8,
    uses: ["T-shirts", "Kidswear", "Dresses"]
  },
  denim: {
    name: "Denim",
    gsm: "250–400",
    season: "All-season",
    cost: "Medium",
    durability: "High",
    sustainability: 6,
    uses: ["Jeans", "Jackets", "Skirts"]
  },
  polyester: {
    name: "Polyester",
    gsm: "180–240",
    season: "All-season",
    cost: "Low",
    durability: "High",
    sustainability: 3,
    uses: ["Activewear", "Outerwear", "Lining"]
  }
};

/* FILTER (already existing, keep it) */
function filterFabric(type) {
  const cards = document.querySelectorAll(".fabric-card");
  cards.forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
        ? "block"
        : "none";
  });
}

/* DYNAMIC COMPARISON */
function compareFabrics() {
  const f1 = document.getElementById("fabric1").value;
  const f2 = document.getElementById("fabric2").value;

  if (!f1 || !f2) return;

  const a = fabrics[f1];
  const b = fabrics[f2];

  document.getElementById("compareResult").innerHTML = `
    <div class="compare-card">
      <h3>${a.name}</h3>
      <p>GSM: ${a.gsm}</p>
      <p>Season: ${a.season}</p>
      <p>Cost: ${a.cost}</p>
      <p>Durability: ${a.durability}</p>
      <p>Sustainability: ${a.sustainability}/10</p>
      <div class="score-bar">
        <div style="width:${a.sustainability * 10}%"></div>
      </div>
    </div>

    <div class="compare-card">
      <h3>${b.name}</h3>
      <p>GSM: ${b.gsm}</p>
      <p>Season: ${b.season}</p>
      <p>Cost: ${b.cost}</p>
      <p>Durability: ${b.durability}</p>
      <p>Sustainability: ${b.sustainability}/10</p>
      <div class="score-bar">
        <div style="width:${b.sustainability * 10}%"></div>
      </div>
    </div>
  `;
}
