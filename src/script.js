document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.querySelector("input[type='email']").value;
  alert("Revolta registrada: " + email);
});