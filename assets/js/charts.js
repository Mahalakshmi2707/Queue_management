// charts.js

window.onload = function () {
  const tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  const waiting = tokens.filter(t => t.status === "Waiting").length;
  const completed = tokens.filter(t => t.status === "Completed").length;

  const ctx = document.getElementById("queueChart").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Waiting", "Completed"],
      datasets: [{
        data: [waiting, completed],
        backgroundColor: ["#f6ad55", "#48bb78"]
      }]
    }
  });
};

