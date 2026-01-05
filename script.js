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
  },
  linen: {
  name: "Linen",
  gsm: "150–220",
  season: "Summer",
  cost: "High",
  durability: "High",
  sustainability: {
    score: 9,
    reason:
      "Derived from flax with minimal water usage, low pesticide requirement, and high biodegradability. Linen is considered one of the most environmentally responsible natural fibers, though higher cost limits mass retail usage."
  },
  uses: ["Shirts", "Summer trousers", "Resort wear"]
},

tencel: {
  name: "Tencel™ (Lyocell)",
  gsm: "120–180",
  season: "All-season",
  cost: "High",
  durability: "Medium",
  sustainability: {
    score: 9,
    reason:
      "Produced from sustainably sourced wood pulp using a closed-loop process that recycles water and solvents. Tencel offers excellent softness and drape with significantly lower environmental impact compared to conventional viscose."
  },
  uses: ["Dresses", "Premium tops", "Innerwear"]
},

organicCotton: {
  name: "Organic Cotton",
  gsm: "130–190",
  season: "Summer",
  cost: "High",
  durability: "Medium",
  sustainability: {
    score: 8,
    reason:
      "Cultivated without synthetic pesticides or fertilizers, reducing soil and water contamination. While water usage remains high, organic cotton improves biodiversity and supports responsible farming practices."
  },
  uses: ["Kidswear", "Basics", "Sustainable collections"]
},

recycledPolyester: {
  name: "Recycled Polyester",
  gsm: "180–240",
  season: "All-season",
  cost: "Medium",
  durability: "High",
  sustainability: {
    score: 6,
    reason:
      "Made from post-consumer plastic waste such as PET bottles, reducing landfill impact and virgin petroleum usage. However, microplastic shedding during washing remains a sustainability concern."
  },
  uses: ["Activewear", "Outerwear", "Sportswear"]
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
