const fabrics = {
  cotton: {
    name: "Cotton",
    gsm: "120–180",
    season: "Summer",
    cost: "Medium",
    durability: "Medium",
    sustainability: {
      score: 8,
      reason: "Natural fiber, biodegradable, low microplastic impact"
    }
  },

  rayon: {
    name: "Rayon",
    gsm: "110–150",
    season: "Summer",
    cost: "Medium",
    durability: "Low–Medium",
    sustainability: {
      score: 5,
      reason: "Regenerated fiber with chemical-intensive processing"
    }
  },

  denim: {
    name: "Denim",
    gsm: "250–400",
    season: "All-season",
    cost: "Medium",
    durability: "High",
    sustainability: {
      score: 6,
      reason: "Durable fabric with moderate environmental impact"
    }
  },

  polyester: {
    name: "Polyester",
    gsm: "180–240",
    season: "All-season",
    cost: "Low",
    durability: "High",
    sustainability: {
      score: 3,
      reason: "Synthetic fiber with high microplastic impact"
    }
  }
};

function filterFabric(type) {
  const cards = document.querySelectorAll(".fabric-card");
  cards.forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
        ? "block"
        : "none";
  });
}

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
      <p>Sustainability: ${a.sustainability.score}/10</p>
      <p class="why">${a.sustainability.reason}</p>
      <div class="score-bar">
        <div style="width:${a.sustainability.score * 10}%"></div>
      </div>
    </div>

    <div class="compare-card">
      <h3>${b.name}</h3>
      <p>GSM: ${b.gsm}</p>
      <p>Season: ${b.season}</p>
      <p>Cost: ${b.cost}</p>
      <p>Durability: ${b.durability}</p>
      <p>Sustainability: ${b.sustainability.score}/10</p>
      <p class="why">${b.sustainability.reason}</p>
      <div class="score-bar">
        <div style="width:${b.sustainability.score * 10}%"></div>
      </div>
    </div>
  `;
}
function recommendFabric() {
  let best = "cotton";
  let reason = "Balanced sustainability and comfort for mass retail.";

  Object.values(fabrics).forEach(f => {
    if (f.sustainability > fabrics[best].sustainability) {
      best = f.name.toLowerCase();
      reason = "Higher sustainability score.";
    }
  });

  document.getElementById("recommendation").innerHTML = `
    <h3>✅ Recommended Fabric</h3>
    <p><strong>${fabrics[best].name}</strong></p>
    <p class="why">${reason}</p>
  `;
}
