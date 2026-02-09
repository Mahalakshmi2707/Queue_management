// SAVE PATIENT PROFILE
function saveProfile() {
  const profile = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    place: document.getElementById("place").value,
    condition: document.getElementById("condition").value,
    history: []
  };

  localStorage.setItem("patientProfile", JSON.stringify(profile));
  alert("Profile saved successfully");
}

// NAVIGATION
function goToToken() {
  window.location.href = "patient-token.html";
}

// BOOK TOKEN
function bookToken() {
  const specialist = document.getElementById("specialist").value;
  const time = document.getElementById("time").value;

  let tokens = JSON.parse(localStorage.getItem("tokens")) || [];
  let profile = JSON.parse(localStorage.getItem("patientProfile"));

  const token = {
    patient: profile.name,
    specialist,
    time,
    status: "Waiting"
  };

  tokens.push(token);
  profile.history.push(token);

  localStorage.setItem("tokens", JSON.stringify(tokens));
  localStorage.setItem("patientProfile", JSON.stringify(profile));

  alert("Token booked successfully");
}

// LOAD HISTORY
window.onload = function () {
  const list = document.getElementById("historyList");
  if (!list) return;

  const profile = JSON.parse(localStorage.getItem("patientProfile"));
  if (!profile || !profile.history.length) {
    list.innerHTML = "<li>No consultation history</li>";
    return;
  }

  profile.history.forEach(h => {
    const li = document.createElement("li");
    li.textContent = `${h.specialist} at ${h.time} (${h.status})`;
    list.appendChild(li);
  });
};
