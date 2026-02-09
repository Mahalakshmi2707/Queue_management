// token.js

function generateToken() {
  let tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  const patientName = document.getElementById("patientName").value;
  const age = document.getElementById("age").value;

  if (!patientName || !age) {
    alert("Enter patient details");
    return;
  }

  const tokenNumber = tokens.length + 1;
  const tokenData = {
    tokenNumber,
    patientName,
    age,
    time: new Date().toLocaleTimeString(),
    status: "Waiting"
  };

  tokens.push(tokenData);
  localStorage.setItem("tokens", JSON.stringify(tokens));

  alert(`Token ${tokenNumber} created`);
  displayTokens();
}

// DISPLAY TOKENS
function displayTokens() {
  const tokens = JSON.parse(localStorage.getItem("tokens")) || [];
  const list = document.getElementById("tokenList");
  list.innerHTML = "";

  tokens.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `Token ${t.tokenNumber} - ${t.patientName} (${t.status})`;
    list.appendChild(li);
  });
}

window.onload = displayTokens;

