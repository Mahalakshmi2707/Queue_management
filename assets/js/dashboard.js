// dashboard.js

function loadDashboard() {
  const tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  document.getElementById("totalPatients").innerText = tokens.length;
  document.getElementById("waiting").innerText =
    tokens.filter(t => t.status === "Waiting").length;
  document.getElementById("completed").innerText =
    tokens.filter(t => t.status === "Completed").length;
}

function markCompleted(tokenNumber) {
  let tokens = JSON.parse(localStorage.getItem("tokens"));
  tokens = tokens.map(t => {
    if (t.tokenNumber === tokenNumber) {
      t.status = "Completed";
    }
    return t;
  });

  localStorage.setItem("tokens", JSON.stringify(tokens));
  loadDashboard();
}

window.onload = loadDashboard;

